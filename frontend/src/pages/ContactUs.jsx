import { useState } from 'react'
import axios from 'axios'
import './ContactUs.css'

const contactInfo = [
  { icon: '📧', label: 'Email Us',        value: 'hello@yotechno.com',      sub: 'We reply within 24 hours' },
  { icon: '📞', label: 'Call Us',         value: '+1 (555) 000-1234',       sub: 'Mon–Fri, 9am–6pm IST' },
  { icon: '📍', label: 'Our Office',      value: 'Tech Hub, Innovation City', sub: 'Remote-first company' },
  { icon: '💬', label: 'Live Chat',       value: 'Chat on WhatsApp',        sub: 'Usually replies instantly' },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function ContactUs() {
  const [form, setForm]       = useState(initialForm)
  const [status, setStatus]   = useState('idle') // idle | loading | success | error
  const [errors, setErrors]   = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    try {
      await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/contact/`, form)
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact">
      <div className="bg-orbs">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
      </div>

      {/* ——— Hero ——— */}
      <section className="page-hero section">
        <div className="container">
          <div className="section-label animate-fade-up">Contact Us</div>
          <h1 className="page-hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="page-hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Have a project, a question, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ——— Main Content ——— */}
      <section className="section contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info">
              <h2 className="contact-info-title">Get in Touch</h2>
              <p className="contact-info-subtitle">
                Whether you're ready to start a project or just exploring options — we're here to help.
              </p>
              <div className="contact-cards">
                {contactInfo.map((c, i) => (
                  <div key={i} className="contact-card glass-card">
                    <span className="contact-card-icon">{c.icon}</span>
                    <div>
                      <div className="contact-card-label">{c.label}</div>
                      <div className="contact-card-value">{c.value}</div>
                      <div className="contact-card-sub">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrapper glass-card">
              <h2 className="contact-form-title">Send Us a Message</h2>

              {status === 'success' ? (
                <div className="contact-success animate-scale-in">
                  <div className="success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another →</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        id="name" name="name" type="text"
                        className={`form-input${errors.name ? ' form-input--error' : ''}`}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        id="email" name="email" type="email"
                        className={`form-input${errors.email ? ' form-input--error' : ''}`}
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      id="subject" name="subject" type="text"
                      className="form-input"
                      placeholder="Project inquiry, partnership, etc."
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message" name="message"
                      className={`form-textarea${errors.message ? ' form-input--error' : ''}`}
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  {status === 'error' && (
                    <div className="contact-error-banner">
                      ⚠️ Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button type="submit" className="btn-primary contact-submit" disabled={status === 'loading'}>
                    {status === 'loading'
                      ? <><span className="spinner" /> Sending...</>
                      : <>Send Message →</>
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
