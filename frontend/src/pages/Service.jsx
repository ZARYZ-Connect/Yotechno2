import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Service.css'

const fallbackServices = [
  {
    id: 1,
    title: 'Access Control Systems',
    icon: '🔐',
    description: 'Supply, installation, configuration, and maintenance of advanced access control solutions for businesses, offices, educational institutions, and industrial facilities.',
    tags: ['Installation', 'Configuration', 'Maintenance', 'Biometric', 'Card Access'],
  },
  {
    id: 2,
    title: 'CCTV Surveillance Solutions',
    icon: '📹',
    description: 'Complete surveillance system deployment including camera installation, monitoring setup, remote access configuration, and maintenance.',
    tags: ['Camera Installation', 'Remote Access', 'Monitoring', 'HD/4K', 'NVR/DVR'],
  },
  {
    id: 3,
    title: 'Intrusion & Alarm Systems',
    icon: '🚨',
    description: 'Professional installation and configuration of smart alarm and intrusion detection systems to safeguard your premises.',
    tags: ['Alarm Systems', 'Motion Sensors', 'Smart Detection', 'Real-time Alerts'],
  },
  {
    id: 4,
    title: 'Time Attendance & Workforce Management',
    icon: '🏢',
    description: 'Advanced attendance tracking solutions for organizations of all sizes with seamless software integration.',
    tags: ['Attendance Tracking', 'Payroll Integration', 'Biometric', 'HR Software'],
  },
  {
    id: 5,
    title: 'Network Infrastructure & Troubleshooting',
    icon: '🌐',
    description: 'Design, installation, optimization, and troubleshooting of wired and wireless networks to ensure uninterrupted connectivity.',
    tags: ['Wired Networks', 'Wi-Fi Solutions', 'Optimization', 'Troubleshooting'],
  },
]

const process = [
  { step:'01', title:'Discovery',      desc:'We deep-dive into your business, goals, and technical requirements.' },
  { step:'02', title:'Architecture',   desc:'We design a robust, scalable architecture tailored to your needs.' },
  { step:'03', title:'Development',    desc:'Our engineers build with precision using modern tools and best practices.' },
  { step:'04', title:'Launch & Scale', desc:'We deploy, monitor, and help your product grow confidently over time.' },
]

export default function Service() {
  const [services, setServices] = useState(fallbackServices)
  const [loading, setLoading]   = useState(true)
  const [active, setActive]     = useState(null)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/solutions/`)
      .then(res => setServices(res.data.length ? res.data : fallbackServices))
      .catch(() => setServices(fallbackServices))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="service-page">
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* ——— Hero ——— */}
      <section className="service-hero section">
        <div className="container">
          <div className="service-hero__left">
            <div className="service-hero__badge">
              <span className="badge-diamond">❖</span> WHAT WE OFFER
            </div>

            <h1 className="service-hero__title animate-fade-up">
              Our <span className="highlight-blue">Services</span>
            </h1>
            <div className="title-underline" />

            <p className="service-hero__subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
              From security infrastructure to network solutions, we deliver reliable technology services backed by certified expertise and industry-leading products.
            </p>

            <div className="service-hero__checklist animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="checklist-item">
                <div className="checklist-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0066cc">
                    <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <div className="checklist-label">Reliable Solutions</div>
              </div>

              <div className="checklist-item">
                <div className="checklist-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0066cc">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <div className="checklist-label">Expert Team</div>
              </div>

              <div className="checklist-item">
                <div className="checklist-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0066cc">
                    <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="checklist-label">Quality Assured</div>
              </div>

              <div className="checklist-item">
                <div className="checklist-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0066cc">
                    <path d="M12 2c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
                  </svg>
                </div>
                <div className="checklist-label">Support 24/7</div>
              </div>
            </div>

            <div className="service-hero__actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#services-list" className="btn-solid-blue">Explore Services →</a>
              <Link to="/contact" className="btn-outline-blue">Get in Touch →</Link>
            </div>
          </div>

          <div className="service-hero__right animate-fade-in">
            <div className="diagram-container">
              {/* Background Circular Ring */}
              <div className="diagram-ring-wrapper">
                <svg className="diagram-ring-svg" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" stroke="rgba(30, 136, 229, 0.12)" strokeWidth="1" strokeDasharray="3,3" fill="none"/>
                  <circle cx="50" cy="12" r="2" fill="#1e88e5" />
                  <circle cx="86" cy="38" r="2" fill="#1e88e5" />
                  <circle cx="72" cy="80" r="2" fill="#1e88e5" />
                  <circle cx="28" cy="80" r="2" fill="#1e88e5" />
                  <circle cx="14" cy="38" r="2" fill="#1e88e5" />
                </svg>
              </div>

              {/* Central Circle */}
              <div className="diagram-center-node">
                <div className="center-node-icon">
                  <svg viewBox="0 0 100 100" width="70" height="70">
                    <rect x="25" y="45" width="12" height="40" fill="#1565c0" opacity="0.8" />
                    <rect x="42" y="25" width="16" height="60" fill="#1e88e5" />
                    <rect x="63" y="38" width="12" height="47" fill="#42a5f5" opacity="0.8" />
                    <line x1="15" y1="85" x2="85" y2="85" stroke="#1e88e5" strokeWidth="2" />
                  </svg>
                </div>
                <div className="center-node-title">End-to-End Technology Solutions</div>
                <div className="center-node-line" />
              </div>

              {/* Node 1: Access Control (Top) */}
              <div className="diagram-node node-top">
                <div className="node-circle" style={{ borderColor: '#1e88e5' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#1e88e5">
                    <path d="M19 8H17V6A5 5 0 0 0 7 6V8H6A3 3 0 0 0 3 11V21A3 3 0 0 0 6 24H18A3 3 0 0 0 21 21V11A3 3 0 0 0 18 8ZM9 6A3 3 0 0 1 15 6V8H9ZM12 18A2 2 0 1 1 14 16A2 2 0 0 1 12 18Z"/>
                  </svg>
                </div>
                <span className="node-label label-top">Access Control Systems</span>
              </div>

              {/* Node 2: CCTV (Top Right) */}
              <div className="diagram-node node-top-right">
                <div className="node-circle" style={{ borderColor: '#1e88e5' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#1e88e5">
                    <path d="M16 17v-6.57l5.48-3.29A1 1 0 0 1 23 8v8a1 1 0 0 1-1.52.86L16 13.57V17a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10Z"/>
                  </svg>
                </div>
                <span className="node-label label-top-right">CCTV Surveillance Solutions</span>
              </div>

              {/* Node 3: Network Infrastructure (Bottom Right) */}
              <div className="diagram-node node-bottom-right">
                <div className="node-circle" style={{ borderColor: '#ffb300' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#ffb300">
                    <path d="M12 2a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm-4 12H3a2 2 0 0 0-2 2v6h6v-6a2 2 0 0 0-2-2Zm13 0h-5a2 2 0 0 0-2 2v6h6v-6a2 2 0 0 0-2-2Z"/>
                  </svg>
                </div>
                <span className="node-label label-bottom-right">Network Infrastructure & Troubleshooting</span>
              </div>

              {/* Node 4: Time Attendance (Bottom Left) */}
              <div className="diagram-node node-bottom-left">
                <div className="node-circle" style={{ borderColor: '#00c853' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#00c853">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-7 14.5A2.5 2.5 0 1 1 14.5 12 2.5 2.5 0 0 1 12 17.5ZM16.5 8.5h-9v-2h9z"/>
                  </svg>
                </div>
                <span className="node-label label-bottom-left">Time Attendance & Workforce Management</span>
              </div>

              {/* Node 5: Intrusion & Alarm (Middle Left) */}
              <div className="diagram-node node-middle-left">
                <div className="node-circle" style={{ borderColor: '#ff1744' }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#ff1744">
                    <path d="M12 2C6.48 2 2 6.48 2 12v5c0 1.66 1.34 3 3 3h2v-8H4v-1c0-4.41 3.59-8 8-8s8 3.59 8 8v1h-3v8h2c1.66 0 3-1.34 3-3v-5c0-5.52-4.48-10-10-10Z"/>
                  </svg>
                </div>
                <span className="node-label label-middle-left">Intrusion & Alarm Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Services Grid ——— */}
      <section id="services-list" className="section">
        <div className="container">
          {loading ? (
            <div className="services-loading">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="service-skeleton glass-card" />
              ))}
            </div>
          ) : (
            <div className="services-grid">
              {services.map((svc, i) => (
                <div
                  key={svc.id}
                  className={`service-card glass-card${active === svc.id ? ' service-card--active' : ''}`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  onMouseEnter={() => setActive(svc.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="service-card__top">
                    <div className="service-icon">{svc.icon}</div>
                    <div className="service-arrow">→</div>
                  </div>
                  <h3 className="service-title">{svc.title}</h3>
                  <p className="service-desc">{svc.description}</p>
                  <div className="service-tags">
                    {svc.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ——— Process ——— */}
      <section className="section process-section">
        <div className="container">
          <div className="section-center">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our <span className="gradient-text">Proven Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto 60px' }}>
              A transparent, collaborative process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="process-steps">
            {process.map((p, i) => (
              <div key={i} className="process-step glass-card">
                <div className="process-step-number">{p.step}</div>
                <h3 className="process-step-title">{p.title}</h3>
                <p className="process-step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Ready to Build?</div>
          <h2 className="section-title">Got a Project in Mind?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Let's discuss how we can tailor our services to your specific needs and budget.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
            <Link to="/projects" className="btn-outline">View Our Projects</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
