import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const ROLES = ['Full-Stack Developer', '.NET & Angular Engineer', 'CS Undergrad @ UWU', 'Platform Builder']

export default function Hero() {
  const roleRef = useRef(null)

  useEffect(() => {
    let i = 0, charIdx = 0, deleting = false, timeout

    const tick = () => {
      const current = ROLES[i]
      if (!roleRef.current) return
      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          timeout = setTimeout(tick, 1800)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) { deleting = false; i = (i + 1) % ROLES.length }
      }
      timeout = setTimeout(tick, deleting ? 45 : 90)
    }

    timeout = setTimeout(tick, 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__orb hero__orb--3" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          Available for opportunities
        </div>
        <h1 className="hero__name">
          Viyaasan<br />
          <span className="hero__name-last">Thanabalasingam</span>
        </h1>
        <p className="hero__role">
          <span ref={roleRef} className="hero__role-text" />
          <span className="hero__cursor" aria-hidden="true">|</span>
        </p>
        <p className="hero__bio">
          Final-year CS undergraduate at Uva Wellassa University, Sri Lanka.
          I build full-stack web platforms — from .NET APIs to Angular frontends —
          with a focus on real products for the Sri Lankan market.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Projects
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Get in Touch
          </a>
        </div>
        <div className="hero__social">
          <a href="https://github.com/viyaasan99" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/viyaasan-thanabalasingam" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </div>
      {/* Terminal card – wide screens only */}
      <div className="hero__terminal" aria-hidden="true">
        <div className="hero__terminal-header">
          <div className="hero__terminal-dots">
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <span className="hero__terminal-title">developer.js</span>
        </div>
        <pre className="hero__terminal-body"><code>
<span className="t-kw">const</span> <span className="t-var">developer</span> <span className="t-op">=</span> {'{'}
{'  '}<span className="t-key">name</span><span className="t-op">:</span> <span className="t-str">"Viyaasan"</span><span className="t-op">,</span> <span className="t-key">stack</span><span className="t-op">:</span> <span className="t-op">[</span><span className="t-str">".NET"</span><span className="t-op">,</span> <span className="t-str">"Angular"</span><span className="t-op">],</span> <span className="t-key">status</span><span className="t-op">:</span> <span className="t-str">"open to work"</span> {'}'}
        </code></pre>
      </div>

      <button className="hero__scroll-hint" aria-label="Scroll down" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ArrowDown size={16} />
      </button>
    </section>
  )
}
