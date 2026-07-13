import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Solutions.css'

// Fallback data if API is unavailable
const fallbackSolutions = [
  { id:1, title:'Access Control Systems', icon:'🔐', description:'Supply, installation, configuration, and maintenance of advanced access control solutions for businesses, offices, educational institutions, and industrial facilities.', tags:['Installation','Configuration','Maintenance','Biometric','Card Access'] },
  { id:2, title:'CCTV Surveillance Solutions', icon:'📹', description:'Complete surveillance system deployment including camera installation, monitoring setup, remote access configuration, and maintenance.', tags:['Camera Installation','Remote Access','Monitoring','HD/4K','NVR/DVR'] },
  { id:3, title:'Intrusion & Alarm Systems', icon:'🚨', description:'Professional installation and configuration of smart alarm and intrusion detection systems to safeguard your premises.', tags:['Alarm Systems','Motion Sensors','Smart Detection','Real-time Alerts'] },
  { id:4, title:'Time Attendance & Workforce Management', icon:'🏢', description:'Advanced attendance tracking solutions for organizations of all sizes with seamless software integration.', tags:['Attendance Tracking','Payroll Integration','Biometric','HR Software'] },
  { id:5, title:'Network Infrastructure & Troubleshooting', icon:'🌐', description:'Design, installation, optimization, and troubleshooting of wired and wireless networks to ensure uninterrupted connectivity.', tags:['Wired Networks','Wi-Fi Solutions','Optimization','Troubleshooting'] },
]

const process = [
  { step:'01', title:'Discovery',      desc:'We deep-dive into your business, goals, and technical requirements.' },
  { step:'02', title:'Architecture',   desc:'We design a robust, scalable architecture tailored to your needs.' },
  { step:'03', title:'Development',    desc:'Our engineers build with precision, using modern tools and best practices.' },
  { step:'04', title:'Launch & Scale', desc:'We deploy, monitor, and help your product grow confidently over time.' },
]

export default function Solutions() {
  const [solutions, setSolutions] = useState(fallbackSolutions)
  const [loading, setLoading]     = useState(true)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/solutions/`)
      .then(res => setSolutions(res.data))
      .catch(() => setSolutions(fallbackSolutions))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="solutions">
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* ——— Hero ——— */}
      <section className="page-hero section">
        <div className="container">
          <div className="section-label animate-fade-up">What We Do</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Tech Solutions That <br /><span className="gradient-text">Drive Real Results</span>
          </h1>
          <p className="page-hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            From advanced access control and security infrastructure to network troubleshooting and workforce management — we deliver reliable technology services backed by certified expertise.
          </p>
        </div>
      </section>

      {/* ——— Solutions Grid ——— */}
      <section className="section">
        <div className="container">
          {loading ? (
            <div className="solutions-loading">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="solution-skeleton glass-card" />
              ))}
            </div>
          ) : (
            <div className="solutions-grid">
              {solutions.map((sol, i) => (
                <div
                  key={sol.id}
                  className="solution-card glass-card"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="solution-icon">{sol.icon}</div>
                  <h3 className="solution-title">{sol.title}</h3>
                  <p className="solution-desc">{sol.description}</p>
                  <div className="solution-tags">
                    {sol.tags.map(t => <span key={t} className="tag">{t}</span>)}
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
          <div className="home-section-header">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our <span className="gradient-text">Proven Process</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A transparent, collaborative process that keeps you informed and in control at every stage.
            </p>
          </div>
          <div className="process-steps">
            {process.map((p, i) => (
              <div key={i} className="process-step glass-card">
                <div className="process-step-number">{p.step}</div>
                <h3 className="process-step-title">{p.title}</h3>
                <p className="process-step-desc">{p.desc}</p>
                {i < process.length - 1 && <div className="process-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Ready to Build?</div>
          <h2 className="section-title">Got a Project in Mind?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
            Let's discuss how we can tailor our solutions to your specific needs and budget.
          </p>
          <Link to="/contact" className="btn-primary">Start a Conversation →</Link>
        </div>
      </section>
    </div>
  )
}
