import { useState } from 'react'
import { PageHeader } from '../components/Ui'

const skills = [
  'DevSecOps',
  'Spring Boot',
  'Microservices',
  'AWS Cloud',
  'Python',
  'AI / ML',
  'Solutions Architecture',
  'Design Thinking',
]

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export default function About() {
  const [imgOk, setImgOk] = useState(true)
  // Drop an `author.jpg` into /public to replace the placeholder avatar.
  const photo = `${import.meta.env.BASE_URL}author.jpg`

  return (
    <div>
      <PageHeader title="About the developer" fallback="/" />

      {/* Profile banner + avatar (avatar shows author.jpg once added, else initials) */}
      <div className="relative mb-14">
        <div className="h-28 w-full rounded-2xl bg-gradient-to-br from-brand-500 via-fuchsia-600 to-indigo-600" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
          <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-slate-900 bg-slate-800 shadow-xl">
            {imgOk ? (
              <img
                src={photo}
                alt="Naseem Akhtar"
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-500 to-indigo-600 text-2xl font-extrabold text-white">
                NA
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-extrabold text-white">Naseem Akhtar</h2>
        <p className="text-sm font-semibold text-brand-300">
          Project Lead · Solutions Architect
        </p>
        <p className="mx-auto mt-1 max-w-xs text-xs italic text-slate-400">
          Code-wielding architect with a gamer's heart and a visionary mind.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {skills.map((s) => (
          <span key={s} className="pill bg-white/10 text-slate-200">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
        <p>
          By day, I'm a <strong className="text-white">Project Lead and Solutions
          Architect</strong>, orchestrating DevSecOps, Spring Boot, microservices, and AWS
          cloud infrastructure like a maestro. By night — or on a good coffee break — I'm
          decoding AI, designing smarter clusters in Python, and optimizing checkout flows
          for digital-first users, all while staying true to human-centered design.
        </p>
        <p>
          A tech polymath with a decade of hands-on software wizardry, I'm the go-to person
          for architectural decisions, intern mentorship, and system reliability. But I'm
          more than code: I'm a retro-gaming enthusiast and a relentless learner who lives at
          the intersection of data science, design thinking, and dopamine (aka gaming and
          great gear).
        </p>
        <p>
          I don't just keep up —{' '}
          <strong className="text-white">I lead, learn, and level up</strong>, all while
          keeping it smart, secure, and stylish.
        </p>
      </div>

      <a
        href="https://in.linkedin.com/in/naseemakhtar"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-6 w-full"
      >
        <LinkedInIcon /> Connect on LinkedIn
      </a>

      <p className="mt-4 text-center text-[11px] text-slate-600">
        © 2026 Naseem Akhtar. All rights reserved.
      </p>
    </div>
  )
}
