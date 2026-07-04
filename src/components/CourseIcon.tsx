import BrandGlyph, { hasBrandGlyph } from './BrandGlyph'

// Renders a course's icon: a real brand mark for courses that would otherwise
// use a plain colour-box emoji (e.g. JavaScript 🟨), else the emoji itself.
export default function CourseIcon({
  certId,
  emoji,
  size = 30,
}: {
  certId: string
  emoji: string
  size?: number
}) {
  if (hasBrandGlyph(certId)) return <BrandGlyph name={certId} size={size} />
  return (
    <span style={{ fontSize: size, lineHeight: 1 }} className="inline-block leading-none">
      {emoji}
    </span>
  )
}
