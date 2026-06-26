// Pure-stdlib PNG icon generator — no external deps.
// Renders the CertPrep shield mark (dark bg, orange shield, check) into PNGs.
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public')
mkdirSync(outDir, { recursive: true })

function crc32(buf) {
  let c
  const table = []
  for (let n = 0; n < 256; n++) {
    c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0)
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function encodePNG(size, pixels) {
  // pixels: Uint8ClampedArray RGBA, length size*size*4
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // color type RGBA
  // rest 0
  const stride = size * 4
  const raw = Buffer.alloc((stride + 1) * size)
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0 // filter none
    pixels.copy
      ? pixels.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride)
      : Buffer.from(pixels.buffer, y * stride, stride).copy(raw, y * (stride + 1) + 1)
  }
  const idat = deflateSync(raw, { level: 9 })
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

function draw(size) {
  const px = Buffer.alloc(size * size * 4)
  const set = (x, y, r, g, b, a = 255) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return
    const i = (y * size + x) * 4
    // simple alpha-over compositing
    const ia = a / 255
    px[i] = px[i] * (1 - ia) + r * ia
    px[i + 1] = px[i + 1] * (1 - ia) + g * ia
    px[i + 2] = px[i + 2] * (1 - ia) + b * ia
    px[i + 3] = Math.max(px[i + 3], a)
  }
  const cx = size / 2
  // background rounded square (#0f172a)
  const radius = size * 0.22
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inRound = (() => {
        const rx = Math.min(x, size - 1 - x)
        const ry = Math.min(y, size - 1 - y)
        if (rx >= radius || ry >= radius) return true
        const dx = radius - rx
        const dy = radius - ry
        return dx * dx + dy * dy <= radius * radius
      })()
      if (inRound) set(x, y, 15, 23, 42)
    }
  }
  // shield (orange) — a downward-pointing rounded shield
  const top = size * 0.18
  const bot = size * 0.84
  const halfW = size * 0.28
  for (let y = Math.floor(top); y < bot; y++) {
    const t = (y - top) / (bot - top)
    // width tapers toward bottom point
    let w
    if (t < 0.6) w = halfW
    else w = halfW * (1 - (t - 0.6) / 0.4)
    for (let x = Math.floor(cx - w); x <= cx + w; x++) {
      set(x, y, 255, 153, 0)
    }
  }
  // inner dark shield
  const itop = top + size * 0.06
  const ibot = bot - size * 0.05
  const ihalf = halfW - size * 0.05
  for (let y = Math.floor(itop); y < ibot; y++) {
    const t = (y - itop) / (ibot - itop)
    let w
    if (t < 0.6) w = ihalf
    else w = ihalf * (1 - (t - 0.6) / 0.4)
    for (let x = Math.floor(cx - w); x <= cx + w; x++) {
      set(x, y, 15, 23, 42)
    }
  }
  // orange check mark
  const lw = Math.max(2, Math.round(size * 0.045))
  const p1 = [cx - size * 0.11, top + size * 0.33]
  const p2 = [cx - size * 0.02, top + size * 0.42]
  const p3 = [cx + size * 0.14, top + size * 0.22]
  const line = (a, b) => {
    const steps = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]))
    for (let s = 0; s <= steps; s++) {
      const x = a[0] + ((b[0] - a[0]) * s) / steps
      const y = a[1] + ((b[1] - a[1]) * s) / steps
      for (let oy = -lw; oy <= lw; oy++)
        for (let ox = -lw; ox <= lw; ox++)
          if (ox * ox + oy * oy <= lw * lw)
            set(Math.round(x + ox), Math.round(y + oy), 255, 153, 0)
    }
  }
  line(p1, p2)
  line(p2, p3)
  return px
}

for (const size of [192, 512]) {
  const png = encodePNG(size, draw(size))
  writeFileSync(join(outDir, `icon-${size}.png`), png)
  console.log(`wrote icon-${size}.png (${png.length} bytes)`)
}
