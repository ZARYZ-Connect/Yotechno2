import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const allProjects = [
  {
    id: 1,
    title: 'FinTrack Dashboard',
    category: 'Web',
    tags: ['React', 'Django', 'PostgreSQL'],
    icon: '💹',
    color: '#2563eb',
    year: '2024',
    description: 'A real-time financial analytics dashboard with interactive charts, budget forecasting, and multi-currency support for fintech clients.',
    status: 'Live',
  },
  {
    id: 2,
    title: 'MediConnect App',
    category: 'Mobile',
    tags: ['Flutter', 'Firebase', 'Node.js'],
    icon: '🏥',
    color: '#059669',
    year: '2024',
    description: 'A cross-platform telemedicine app connecting patients with doctors via video consultations, e-prescriptions, and health record management.',
    status: 'Live',
  },
  {
    id: 3,
    title: 'CloudVault Platform',
    category: 'Cloud',
    tags: ['AWS', 'Docker', 'Terraform'],
    icon: '☁️',
    color: '#7c3aed',
    year: '2023',
    description: 'Enterprise-grade document storage and collaboration platform with end-to-end encryption and role-based access controls for 10k+ users.',
    status: 'Live',
  },
  {
    id: 4,
    title: 'ShopMate E-Commerce',
    category: 'Web',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    icon: '🛒',
    color: '#d97706',
    year: '2023',
    description: 'A high-performance e-commerce platform with AI-driven product recommendations, real-time inventory, and multi-vendor support.',
    status: 'Live',
  },
  {
    id: 5,
    title: 'SmartHR System',
    category: 'Web',
    tags: ['React', 'Python', 'MySQL'],
    icon: '👥',
    color: '#06b6d4',
    year: '2023',
    description: 'Comprehensive HR management system with payroll automation, leave tracking, performance reviews, and employee self-service portal.',
    status: 'Live',
  },
  {
    id: 6,
    title: 'EduLearn Platform',
    category: 'Mobile',
    tags: ['React Native', 'Django', 'Redis'],
    icon: '📚',
    color: '#ec4899',
    year: '2024',
    description: 'An adaptive e-learning platform with AI-curated course paths, live classes, quizzes, and progress tracking for 50k+ students.',
    status: 'Live',
  },
  {
    id: 7,
    title: 'SentinelAI Security',
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    icon: '🔐',
    color: '#dc2626',
    year: '2024',
    description: 'AI-powered threat detection system that analyses network traffic in real-time, identifying anomalies and blocking attacks automatically.',
    status: 'Beta',
  },
  {
    id: 8,
    title: 'LogiTrack Logistics',
    category: 'Web',
    tags: ['Vue.js', 'Django', 'Celery'],
    icon: '🚚',
    color: '#65a30d',
    year: '2023',
    description: 'End-to-end logistics management platform with live GPS tracking, route optimisation, and delivery analytics for fleet operators.',
    status: 'Live',
  },
  {
    id: 9,
    title: 'RetailBot AI',
    category: 'AI/ML',
    tags: ['OpenAI', 'Python', 'React'],
    icon: '🤖',
    color: '#8b5cf6',
    year: '2024',
    description: 'Conversational AI chatbot for retail businesses — handles customer queries, order tracking, and product recommendations 24/7.',
    status: 'Live',
  },
]

const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Cloud']

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '50+',  label: 'Happy Clients' },
  { number: '15+',  label: 'Industries Served' },
  { number: '98%',  label: 'Client Satisfaction' },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === filter)

  return (
    <div className="projects-page">
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* ——— Hero ——— */}
      <section className="page-hero section">
        <div className="container">
          <div className="section-label animate-fade-up">Our Portfolio</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Projects That <span className="gradient-text">Speak</span> For Themselves
          </h1>
          <p className="page-hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Real products, shipped to real users. Browse our portfolio of web apps, mobile experiences, cloud platforms, and AI solutions.
          </p>
        </div>
      </section>

      {/* ——— Stats ——— */}
      <section className="section" style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => (
              <div key={i} className="stat-card glass-card">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Filter + Projects ——— */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter Tabs */}
          <div className="project-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`project-filter-btn${filter === cat ? ' active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className="project-card glass-card"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Top accent bar */}
                <div className="project-card__bar" style={{ background: project.color }} />

                <div className="project-card__header">
                  <div className="project-icon" style={{ background: `${project.color}1a`, border: `1px solid ${project.color}33` }}>
                    {project.icon}
                  </div>
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className={`project-status project-status--${project.status.toLowerCase()}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="projects-empty">
              <p>No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section projects-cta">
        <div className="container">
          <div className="cta-inner glass-card">
            <div className="cta-glow" />
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Your Project Next?</div>
            <h2 className="section-title">Let's Build Something <span className="gradient-text">Together</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              Join 50+ companies that trust Yotechno to build their digital products. Let's make yours next.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Start Your Project →</Link>
              <Link to="/service" className="btn-outline">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
