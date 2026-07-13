import './AboutUs.css'
import biometricPedestal from '../assets/biometric_pedestal.png'
import growthChart from '../assets/growth_chart.png'

const values = [
  { icon: '💡', title: 'Innovation First',   desc: 'We constantly explore emerging technologies to bring you forward-thinking solutions.' },
  { icon: '🎯', title: 'Client-Centric',     desc: 'Your success is our success. We align every decision with your business goals.' },
  { icon: '🏆', title: 'Excellence Always',  desc: 'We set a high bar for quality across every deliverable, without compromise.' },
  { icon: '🌍', title: 'Global Mindset',     desc: 'Remote-first, globally distributed, culturally diverse and always collaborative.' },
]

export default function AboutUs() {
  return (
    <div className="about">
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
      </div>

      {/* ——— Hero ——— */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero__left">
            <div className="about-hero__badge-container">
              <span className="badge-line" />
              <div className="about-hero__badge">
                <span className="badge-dot">●</span> ABOUT YOTECHNO
              </div>
              <span className="badge-line" />
            </div>

            <h1 className="about-hero__title animate-fade-up">
              We started Yotechno to give the most <span className="highlight-purple">convenient,</span><br />
              <span className="highlight-orange">secure,</span> <span className="highlight-purple">cost-effective</span> technology solution.
            </h1>

            <p className="about-hero__subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Driven by innovation and trust, we build digital products that empower businesses, protect what matters, and simplify everyday operations.
            </p>

            <p className="about-hero__quote-author animate-fade-up" style={{ animationDelay: '0.2s' }}>
              — <em>~ Mr. Venkatesh</em>
            </p>


          </div>

          <div className="about-hero__right animate-fade-in">
            <img src={biometricPedestal} alt="Biometric Pedestal Scanner" className="about-hero__image" />
          </div>
        </div>
      </section>

      {/* ——— Growth Journey ——— */}
      <section className="growth-section section">
        <div className="container">
          <div className="growth-grid">
            <div className="growth-left">
              <div className="growth-badge">
                <span className="badge-dot">●</span> OUR GROWTH JOURNEY
              </div>
              <h2 className="growth-title">
                Driving Growth.<br />
                <span className="gradient-text">Delivering Results.</span>
              </h2>
              <p className="growth-subtitle">
                Our data-driven strategies help your website grow visitors, generate leads, and increase revenue.
              </p>

              <div className="growth-metrics">
                <div className="metric-card glass-card">
                  <div className="metric-icon-wrapper" style={{ background: '#f0ebff' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#7b1fa2">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                    </svg>
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Total Visitors</span>
                    <span className="metric-value">128K</span>
                  </div>
                  <div className="metric-change">
                    <span className="change-value">↑ 42%</span>
                    <span className="change-sub">vs last 6 months</span>
                  </div>
                </div>

                <div className="metric-card glass-card">
                  <div className="metric-icon-wrapper" style={{ background: '#fff0eb' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#ff6d00">
                      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
                    </svg>
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Leads Generated</span>
                    <span className="metric-value">3.6K</span>
                  </div>
                  <div className="metric-change">
                    <span className="change-value">↑ 55%</span>
                    <span className="change-sub">vs last 6 months</span>
                  </div>
                </div>

                <div className="metric-card glass-card">
                  <div className="metric-icon-wrapper" style={{ background: '#ebf5ff' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#1e88e5">
                      <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
                    </svg>
                  </div>
                  <div className="metric-info">
                    <span className="metric-label">Revenue Growth</span>
                    <span className="metric-value">$98K</span>
                  </div>
                  <div className="metric-change">
                    <span className="change-value">↑ 68%</span>
                    <span className="change-sub">vs last 6 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="growth-right animate-fade-in">
              <img src={growthChart} alt="Growth Journey Chart" className="growth-image" />
            </div>
          </div>

          {/* Bottom Panel (Value proposition list) */}
          <div className="growth-bottom-panel animate-fade-up">
            <div className="panel-item">
              <div className="panel-icon-wrapper" style={{ background: '#f5f0ff' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#7b1fa2">
                  <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div>
                <div className="panel-title">Data Driven</div>
                <div className="panel-desc">Smart decisions that drive growth</div>
              </div>
            </div>

            <div className="panel-item">
              <div className="panel-icon-wrapper" style={{ background: '#fff3e0' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#ff6d00">
                  <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
                </svg>
              </div>
              <div>
                <div className="panel-title">Performance Focused</div>
                <div className="panel-desc">Optimized campaigns for better results</div>
              </div>
            </div>

            <div className="panel-item">
              <div className="panel-icon-wrapper" style={{ background: '#f5f0ff' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#7b1fa2">
                  <circle cx="12" cy="12" r="10" stroke="#7b1fa2" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="6" stroke="#7b1fa2" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="#7b1fa2"/>
                </svg>
              </div>
              <div>
                <div className="panel-title">ROI Oriented</div>
                <div className="panel-desc">Maximizing returns, minimizing costs</div>
              </div>
            </div>

            <div className="panel-item">
              <div className="panel-icon-wrapper" style={{ background: '#fce4ec' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#d81b60">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
                </svg>
              </div>
              <div>
                <div className="panel-title">Scalable Growth</div>
                <div className="panel-desc">Solutions that grow with your business</div>
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
    </div>
  )
}
