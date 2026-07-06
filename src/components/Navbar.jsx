import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.toLowerCase())).filter(Boolean)
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="navbar__logo-bracket">&lt;</span>VT<span className="navbar__logo-bracket">/&gt;</span>
        </a>
        <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`navbar__link${active === l.toLowerCase() ? ' navbar__link--active' : ''}`}
              onClick={e => handleNav(e, l)}
            >{l}</a>
          ))}
          <a href="https://github.com/viyaasan99" target="_blank" rel="noopener noreferrer" className="navbar__cta">GitHub</a>
        </nav>
        <button className="navbar__burger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
