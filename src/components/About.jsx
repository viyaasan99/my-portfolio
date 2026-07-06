import { useRef, useEffect, useState } from 'react'
import './About.css'

const stats = [
  { from: 0, to: 4, suffix: '+', label: 'Years Coding' },
  { from: 0, to: 10, suffix: '+', label: 'Projects Built' },
  { from: 2020, to: 2026, suffix: '', label: 'BSc Graduation' },
  { static: 'LK', label: 'Based in Sri Lanka' },
]

function StatValue({ from, to, suffix, staticVal }) {
  const [count, setCount] = useState(staticVal != null ? null : from)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (staticVal != null) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { setCount(to); return }

    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          io.disconnect()
          const duration = 1200
          const startTime = performance.now()
          const range = to - from
          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(from + range * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [from, to, staticVal])

  if (staticVal != null) {
    return <span className="about__stat-value" ref={ref}>{staticVal}</span>
  }
  return <span className="about__stat-value" ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-eyebrow" data-reveal>About</div>
        <div className="about__grid">
          <div className="about__text" data-reveal data-delay="1">
            <h2 className="about__heading">
              Building systems that<br />
              <span className="about__heading-accent">actually ship.</span>
            </h2>
            <p className="about__para">
              I'm a final-year Computer Science &amp; Technology undergraduate at{' '}
              <strong>Uva Wellassa University of Sri Lanka</strong>, on track to graduate
              with a BSc (Hons) in 2026. My internship work spans .NET Web APIs,
              Angular frontends, PostgreSQL databases, and containerisation with Docker.
            </p>
            <p className="about__para">
              Outside coursework I'm contributing to <strong>ServeEasy</strong>, an intern/company project developed with my team — a service
              booking platform tailored to the Sri Lankan market covering six
              categories including Beauty &amp; Grooming and Wedding &amp; Events.
              I'm also designing <strong>AgriSmart</strong>, an AI-powered agricultural
              monitoring platform using a Python/FastAPI microservice with a CNN trained
              on PlantVillage data.
            </p>
            <p className="about__para">
              I care about clean architecture, real-world validation (LankaQR, NIC formats,
              local phone patterns), and building products people in Sri Lanka can actually use.
            </p>
          </div>
          <div className="about__right" data-reveal data-delay="2">
            <div className="about__stats">
              {stats.map(s => (
                <div className="about__stat" key={s.label}>
                  <StatValue from={s.from} to={s.to} suffix={s.suffix} staticVal={s.static} />
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="about__card">
              {[
                ['University', 'Uva Wellassa University'],
                ['Degree', 'BSc (Hons) CS & Technology'],
                ['Focus', 'Full-Stack Web Development'],
                ['Location', 'Sri Lanka 🇱🇰'],
              ].map(([k, v]) => (
                <div className="about__card-row" key={k}>
                  <span className="about__card-key">{k}</span>
                  <span className="about__card-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
