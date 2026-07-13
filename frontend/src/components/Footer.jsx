import { Link } from 'react-router-dom'
import logoImg from '../assets/full Logo Yotechno.png'
import './Footer.css'

const navLinks = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/service',   label: 'Service' },
  { to: '/projects',  label: 'Projects' },
  { to: '/contact',   label: 'Contact Us' },
]

const services = [
  'Access Control Systems',
  'CCTV Surveillance Solutions',
  'Intrusion & Alarm Systems',
  'Time Attendance & Workforce Management',
  'Network Infrastructure & Troubleshooting',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="logo-white-box">
                <img src={logoImg} alt="Yotechno Logo" className="footer__logo-img" />
              </div>
            </Link>
            <p className="footer__tagline">
              Empowering businesses with reliable security infrastructure and network solutions that drive growth and ensure peace of mind.
            </p>
          </div>

          {/* Pages */}
          <div className="footer__col">
            <h4 className="footer__col-title">PAGES</h4>
            <div className="footer__title-underline" />
            <ul className="footer__list">
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">
                    <span className="bullet-arrow">&gt;</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">SERVICES</h4>
            <div className="footer__title-underline" />
            <ul className="footer__list">
              {services.map(s => (
                <li key={s}>
                  <span className="footer__link">
                    <span className="bullet-arrow">&gt;</span> {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">GET IN TOUCH</h4>
            <div className="footer__title-underline" />
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <div className="contact-icon-circle">
                  <span className="footer__contact-icon">📧</span>
                </div>
                <span>hello@yotechno.com</span>
              </div>
              <div className="footer__contact-item">
                <div className="contact-icon-circle">
                  <span className="footer__contact-icon">📍</span>
                </div>
                <span>Tech Hub, Innovation City</span>
              </div>
              <div className="footer__contact-item">
                <div className="contact-icon-circle">
                  <span className="footer__contact-icon">📞</span>
                </div>
                <span>+1 (555) 000-1234</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" style={{ margin: '48px 0 24px' }} />

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Yotechno Pvt Ltd. All rights reserved.</p>
          <p>Built with <a href="https://www.zaryz.com" target="_blank" rel="noopener noreferrer" className="zaryz-link"><span className="zaryz-purple">Zaryz</span> <span className="zaryz-orange">Solutions</span></a></p>
        </div>
      </div>
    </footer>
  )
}
