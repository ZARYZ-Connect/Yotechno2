import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Service.css'

const fallbackServices = [
  { id:1, title:'Web Development',       icon:'🌐', description:'Scalable, modern web apps built with React, Django, Node.js and more. End-to-end from design to deployment.', tags:['React','Django','REST API','Next.js'] },
  { id:2, title:'Mobile Applications',   icon:'📱', description:'Cross-platform mobile apps for iOS & Android using React Native and Flutter — smooth, fast, and beautiful.', tags:['React Native','Flutter','iOS','Android'] },
  { id:3, title:'Cloud Solutions',       icon:'☁️', description:'Reliable cloud infrastructure on AWS, Azure, and GCP — from deployment to auto-scaling and monitoring.', tags:['AWS','Azure','GCP','Docker'] },
  { id:4, title:'AI & Machine Learning', icon:'🤖', description:'Intelligent solutions — chatbots, recommendation engines, predictive analytics, and custom ML models.', tags:['Python','TensorFlow','OpenAI','NLP'] },
  { id:5, title:'UI/UX Design',          icon:'🎨', description:'Beautiful, user-centred designs with Figma — from wireframes to polished interactive prototypes.', tags:['Figma','Prototyping','User Research','Accessibility'] },
  { id:6, title:'Cybersecurity',         icon:'🔒', description:'Security audits, penetration testing, and compliance consulting to protect your digital assets.', tags:['Pentest','Compliance','ISO 27001','VAPT'] },
  { id:7, title:'E-Commerce Solutions',  icon:'🛒', description:'Full-featured online stores with payment gateways, inventory management and seamless checkout flows.', tags:['Shopify','WooCommerce','Stripe','PayPal'] },
  { id:8, title:'DevOps & Automation',   icon:'⚙️', description:'CI/CD pipelines, containerisation, infrastructure as code and automated testing workflows.', tags:['GitHub Actions','Terraform','Kubernetes','Jenkins'] },
  { id:9, title:'Data Engineering',      icon:'📊', description:'Data pipelines, ETL processes, warehousing, and real-time analytics dashboards for business intelligence.', tags:['Spark','Airflow','BigQuery','Tableau'] },
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
      <section className="page-hero section">
        <div className="container">
          <div className="section-label animate-fade-up">What We Offer</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="page-hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            From full-stack development to cloud architecture and AI — we have the expertise to bring your boldest ideas to life.
          </p>
        </div>
      </section>

      {/* ——— Services Grid ——— */}
      <section className="section">
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
