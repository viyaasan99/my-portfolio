import { ExternalLink } from 'lucide-react'
import './Projects.css'

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const projects = [
  { name: 'ServeEasy', tag: 'In Progress', tagColor: 'amber', featured: true, description: 'Intern/company project developed with my internship team — a service booking platform for the Sri Lankan market covering Beauty & Grooming, Wedding & Events, and additional categories. Features LankaQR payments, NIC/phone validation, Google Maps integration, vendor onboarding, and staff management.', stack: ['.NET', 'Angular', 'PostgreSQL', 'Google APIs', 'LankaQR'], github: 'https://github.com/viyaasan99' },
  { name: 'Vehicle Management System with AI Integration', tag: 'May – Sep 2025', tagColor: 'teal', description: 'A comprehensive vehicle management system built with React.js, Django, Python, and SQLite for tracking, maintenance scheduling, and driver performance review. Includes an AI-powered driver review engine using DistilBERT and regression analysis, plus GPS-based incident reporting and automated dispatch using K-D Tree and Haversine Distance.', stack: ['React.js', 'Django', 'Python', 'SQLite', 'DistilBERT', 'AI'], github: 'https://github.com/viyaasan99' },
  { name: 'AgriSmart', tag: 'Portfolio Project', tagColor: 'purple', description: 'AI-powered agricultural monitoring web app. A Python/FastAPI microservice wraps a MobileNetV2 CNN trained on PlantVillage data to detect plant diseases from images. Full-stack with .NET backend and Angular frontend.', stack: ['.NET', 'Angular', 'FastAPI', 'Python', 'MobileNetV2', 'PostgreSQL'], github: 'https://github.com/viyaasan99' },
  { name: '.NET CRUD Web API', tag: 'Assignment', tagColor: 'blue', description: 'Production-quality REST API using Controller → Service → Repository pattern with Entity Framework Core and PostgreSQL. Includes full CRUD, pagination, BCrypt password hashing, DTOs, and Dependency Injection.', stack: ['.NET 10', 'EF Core', 'PostgreSQL', 'BCrypt', 'REST'], github: 'https://github.com/viyaasan99' },
  { name: 'Share-Plate', tag: 'Team Project', tagColor: 'green', description: 'A PHP/MySQL food-sharing web app built as part of a team. Focused on clean MVC structure, user authentication, and post management for sharing surplus food in a community.', stack: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'], github: 'https://github.com/viyaasan99' },
  { name: 'Mini E-Commerce', tag: 'Learning Project', tagColor: 'pink', description: 'Full-stack e-commerce app with product listings, cart, and checkout flow built with the MERN stack — MongoDB, Express, React, and Node.js — exploring modern full-stack JavaScript architecture.', stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'], github: 'https://github.com/viyaasan99' },
]

const tagColors = {
  amber:  { bg: 'rgba(251,191,36,0.1)',  text: '#fbbf24', border: 'rgba(251,191,36,0.2)' },
  purple: { bg: 'rgba(167,139,250,0.1)', text: '#a78bfa', border: 'rgba(167,139,250,0.2)' },
  teal:   { bg: 'rgba(77,225,193,0.1)',  text: '#4de1c1', border: 'rgba(77,225,193,0.2)' },
  blue:   { bg: 'rgba(96,165,250,0.1)',  text: '#60a5fa', border: 'rgba(96,165,250,0.2)' },
  green:  { bg: 'rgba(74,222,128,0.1)',  text: '#4ade80', border: 'rgba(74,222,128,0.2)' },
  pink:   { bg: 'rgba(244,114,182,0.1)', text: '#f472b6', border: 'rgba(244,114,182,0.2)' },
}

const onMove = e => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

const featured = projects[0]
const rest = projects.slice(1)

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-eyebrow" data-reveal>Projects</div>
        <h2 className="projects__heading" data-reveal data-delay="1">Things I've built</h2>
        <div className="projects__meta" data-reveal data-delay="2">
          {['6 projects', '.NET', 'Angular', 'React', 'AI'].map(m => (
            <span className="projects__meta-chip" key={m}>{m}</span>
          ))}
        </div>

        {/* Featured card */}
        {(() => {
          const tc = tagColors[featured.tagColor]
          return (
            <article
              className="project-card project-card--featured"
              data-reveal data-delay="2"
              onMouseMove={onMove}
            >
              <div className="project-card__spotlight" />
              <div className="project-card__featured-inner">
                <div className="project-card__featured-left">
                  <div className="project-card__featured-badges">
                    <span className="project-card__featured-label">Featured</span>
                    <span className="project-card__tag" style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>{featured.tag}</span>
                  </div>
                  <h3 className="project-card__name project-card__name--featured">{featured.name}</h3>
                  <p className="project-card__desc">{featured.description}</p>
                </div>
                <div className="project-card__featured-right">
                  <div className="project-card__stack project-card__stack--featured">
                    {featured.stack.map(s => <span className="project-card__pill" key={s}>{s}</span>)}
                  </div>
                  <a href={featured.github} target="_blank" rel="noopener noreferrer" className="project-card__featured-btn">
                    <GithubIcon size={15} /> View on GitHub
                  </a>
                </div>
              </div>
            </article>
          )
        })()}

        {/* Rest of projects */}
        <div className="projects__list">
          {rest.map((p, i) => {
            const tc = tagColors[p.tagColor]
            return (
              <article
                className="project-card"
                key={p.name}
                data-reveal
                data-delay={String((i % 3) + 1)}
                onMouseMove={onMove}
              >
                <div className="project-card__spotlight" />
                <div className="project-card__top">
                  <div className="project-card__left">
                    <span className="project-card__tag" style={{ background: tc.bg, color: tc.text, border: `1px solid ${tc.border}` }}>{p.tag}</span>
                    <h3 className="project-card__name">{p.name}</h3>
                    <p className="project-card__desc">{p.description}</p>
                  </div>
                  <div className="project-card__links">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="GitHub">
                      <GithubIcon size={15} />
                    </a>
                  </div>
                </div>
                <div className="project-card__stack">
                  {p.stack.map(s => <span className="project-card__pill" key={s}>{s}</span>)}
                </div>
              </article>
            )
          })}
        </div>

        <div className="projects__more" data-reveal>
          <a href="https://github.com/viyaasan99" target="_blank" rel="noopener noreferrer" className="projects__more-link">
            See all repositories on GitHub <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
