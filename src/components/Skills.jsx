import './Skills.css'

const groups = [
  {
    label: 'Backend', color: '#7c8cff',
    items: ['.NET / ASP.NET Core', 'C#', 'Node.js / Express', 'Python / FastAPI'],
  },
  {
    label: 'Frontend', color: '#4de1c1',
    items: ['Angular', 'React / Vite', 'TypeScript', 'HTML / CSS'],
  },
  {
    label: 'Data & Infrastructure', color: '#60a5fa',
    items: ['PostgreSQL', 'MongoDB', 'Docker', 'Entity Framework Core'],
  },
  {
    label: 'Tools & Practices', color: '#4ade80',
    items: ['Git / GitHub', 'Azure DevOps', 'REST API Design', 'OOP & SOLID'],
  },
]

const alsoWorkedWith = [
  'Laravel', 'PHP', 'MySQL', 'MERN Stack', 'JWT Auth', 'BCrypt',
  'Tailwind CSS', 'draw.io', 'EF Core Migrations', 'NIC Validation',
  'LankaQR', 'MobileNetV2', 'PlantVillage',
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-eyebrow" data-reveal>Skills</div>
        <h2 className="skills__heading" data-reveal data-delay="1">My technical toolkit</h2>
        <div className="skills__grid">
          {groups.map((g, i) => (
            <div
              className="skills__card"
              key={g.label}
              data-reveal
              data-delay={String(i + 1)}
              style={{ '--card-accent': g.color }}
            >
              <div className="skills__card-header">
                <span className="skills__card-dot" />
                <span className="skills__card-label">{g.label}</span>
              </div>
              <div className="skills__chip-list">
                {g.items.map(item => (
                  <span className="skills__chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills__also" data-reveal>
          <span className="skills__also-label">Also worked with</span>
          <div className="skills__tags">
            {alsoWorkedWith.map(t => (
              <span className="skills__tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="skills__legend">
            {[
              { color: '#7c8cff', label: 'Core Stack' },
              { color: '#4de1c1', label: 'Used in Projects' },
              { color: '#4ade80', label: 'Exploring' },
            ].map(({ color, label }) => (
              <span className="skills__legend-item" key={label}>
                <span className="skills__legend-dot" style={{ '--dot': color }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
