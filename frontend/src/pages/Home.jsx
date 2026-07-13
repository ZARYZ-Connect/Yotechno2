import { Link } from 'react-router-dom'
import './Home.css'
import heroImg from '../assets/hero.png'

const features = [
  {
    icon: '🚀',
    title: 'Fast Delivery',
    desc: 'We ship production-ready products on time, every time — without cutting corners on quality.',
  },
  {
    icon: '🎯',
    title: 'Precision Engineering',
    desc: 'Every line of code is crafted with intent. Clean architecture and best practices always.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    desc: 'Security is baked into every layer. From APIs to frontends, you\'re protected.',
  },
  {
    icon: '📊',
    title: 'Data-Driven Insights',
    desc: 'Make smarter decisions with analytics dashboards and AI-powered reporting tools.',
  },
  {
    icon: '☁️',
    title: 'Cloud-Native',
    desc: 'Scalable, resilient infrastructure that grows with you — no downtime, no limits.',
  },
  {
    icon: '🤝',
    title: 'Dedicated Support',
    desc: '24/7 support from our expert team. We\'re always here when you need us.',
  },
]

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '98%',  label: 'Client Satisfaction' },
  { number: '50+',  label: 'Happy Clients' },
  { number: '5+',   label: 'Years of Experience' },
]

const techStack = [
  'React', 'Django', 'Node.js', 'Python', 'AWS', 'Docker',
  'PostgreSQL', 'MongoDB', 'Flutter', 'TensorFlow',
]

export default function Home() {
  return (
    <div className="home">
      {/* Background Orbs */}
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      {/* ——— Hero Section ——— */}
      <section className="hero section">
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge animate-fade-up">
              <span className="badge-dot">●</span> <span className="badge-diamond">◆</span> YOTECHNO — INNOVATION UNLEASHED
            </div>

            <h1 className="hero__title animate-fade-up" style={{ animationDelay: '0.1s' }}>
              We Build <span className="gradient-text">Digital</span><br />
              Products<br />
              That <span className="gradient-text">Transform</span><br />
              Businesses
            </h1>

            <p className="hero__subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
              From idea to launch — we craft scalable web apps, mobile experiences,
              cloud infrastructure, and AI-powered solutions that drive real results.
            </p>

            <div className="hero__actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/service" className="btn-primary">
                Explore Services <span>→</span>
              </Link>
              <Link to="/contact" className="btn-outline">
                Talk to Us
              </Link>
            </div>


          </div>

          {/* Hero Graphic */}
          <div className="hero__graphic animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img src={heroImg} alt="Biometric Fingerprint Scanner" className="hero__image" />
          </div>
        </div>
      </section>

      {/* ——— Stats ——— */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-row">
            {stats.map((s, i) => (
              <div key={i} className="stat-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Features ——— */}
      <section className="section">
        <div className="container">
          <div className="home-section-header">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </h2>
            <p className="section-subtitle">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that actually move the needle for your business.
            </p>
          </div>

          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card glass-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— CTA Banner ——— */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-banner glass-card">
            <div className="cta-banner__glow" />
            <div className="section-label">Ready to Start?</div>
            <h2 className="section-title">Let's Build Something <span className="gradient-text">Amazing</span></h2>
            <p className="section-subtitle">
              Have a project in mind? We'd love to hear about it. Let's turn your vision into reality together.
            </p>
            <div className="hero__actions" style={{ marginTop: '32px' }}>
              <Link to="/contact" className="btn-primary">Start a Project →</Link>
              <Link to="/about" className="btn-outline">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
