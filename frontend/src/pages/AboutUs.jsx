import { Link } from 'react-router-dom'
import './AboutUs.css'

const values = [
  { icon: '💡', title: 'Innovation First',   desc: 'We constantly explore emerging technologies to bring you forward-thinking solutions.' },
  { icon: '🎯', title: 'Client-Centric',     desc: 'Your success is our success. We align every decision with your business goals.' },
  { icon: '🏆', title: 'Excellence Always',  desc: 'We set a high bar for quality across every deliverable, without compromise.' },
  { icon: '🌍', title: 'Global Mindset',     desc: 'Remote-first, globally distributed, culturally diverse and always collaborative.' },
]

const team = [
  { name: 'Arjun Sharma',   role: 'CEO & Co-Founder',        emoji: '👨‍💼', color: '#2563eb' },
  { name: 'Priya Nair',     role: 'CTO & Lead Architect',    emoji: '👩‍💻', color: '#7c3aed' },
  { name: 'Rahul Verma',    role: 'Head of Design',          emoji: '🎨',   color: '#06b6d4' },
  { name: 'Sneha Patel',    role: 'AI/ML Engineer',          emoji: '🤖',   color: '#059669' },
  { name: 'Karan Mehta',    role: 'Full-Stack Engineer',     emoji: '⚙️',   color: '#d97706' },
  { name: 'Divya Iyer',     role: 'Cloud & DevOps Lead',     emoji: '☁️',   color: '#dc2626' },
]

const milestones = [
  { year: '2019', title: 'Founded', desc: 'Yotechno was born from a shared vision to make great technology accessible to all.' },
  { year: '2020', title: '10 Clients', desc: 'Crossed 10 happy clients in our first year, with a 100% retention rate.' },
  { year: '2022', title: 'AI Division', desc: 'Launched our dedicated AI/ML practice to serve next-gen product teams.' },
  { year: '2024', title: '150+ Projects', desc: 'Delivered over 150 projects globally across 15+ industries.' },
]

export default function AboutUs() {
  return (
    <div className="about">
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
      </div>

      {/* ——— Hero ——— */}
      <section className="page-hero section">
        <div className="container">
          <div className="section-label animate-fade-up">About Yotechno</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Building the <span className="gradient-text">Future</span>,<br />
            One Innovation at a Time
          </h1>
          <p className="page-hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We're a passionate team of engineers, designers, and visionaries dedicated to solving real-world problems with elegant technology.
          </p>
        </div>
      </section>

      {/* ——— Story ——— */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-left">
              <div className="section-label">Our Story</div>
              <h2 className="section-title">From a Garage to a <span className="gradient-text">Global Team</span></h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                Yotechno started in 2019 when three engineers got tired of seeing great ideas die because of poor technical execution. We set out to bridge that gap — building technology that's not just functional, but transformative.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>
                Today we're a fully remote team of 30+ talented professionals spread across 8 countries, united by one mission: helping businesses grow through technology.
              </p>
              <Link to="/contact" className="btn-primary">Work With Us →</Link>
            </div>
            <div className="story-right">
              <div className="timeline">
                {milestones.map((m, i) => (
                  <div key={i} className="timeline-item glass-card">
                    <div className="timeline-year">{m.year}</div>
                    <div>
                      <div className="timeline-title">{m.title}</div>
                      <div className="timeline-desc">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Values ——— */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What Drives <span className="gradient-text">Everything We Do</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card glass-card">
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Team ——— */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <div className="section-label">The Dream Team</div>
            <h2 className="section-title">Meet the <span className="gradient-text">People</span> Behind Yotechno</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Brilliant minds, diverse backgrounds, one shared passion: building exceptional products.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card glass-card">
                <div className="team-avatar" style={{ background: `${member.color}22`, border: `2px solid ${member.color}55` }}>
                  <span>{member.emoji}</span>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role" style={{ color: member.color }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
