import React, { useState } from 'react';

export default function Contact({ onCopyEmail, onShowToast }) {
  const emailAddress = 'pratikpriyadarshiswain19@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = true;
    }
    if (!formData.email.trim() || !validateEmail(formData.email.trim())) {
      newErrors.email = true;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = true;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = true;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      onShowToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    const name = encodeURIComponent(formData.name.trim());
    const email = encodeURIComponent(formData.email.trim());
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject.trim()}`);
    const body = encodeURIComponent(
      `Hi Pratik,\n\n${formData.message.trim()}\n\n---\nSender Name: ${decodeURIComponent(name)}\nSender Email: ${decodeURIComponent(email)}`
    );

    const mailtoUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    onShowToast('Opening your email client to send message...', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider" />
          <p className="section-intro">
            Interested in discussing an internship, project collaboration, or technical opportunity? Feel free to reach out directly or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information Cards */}
          <div className="contact-info-cards">
            {/* Email */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Direct Email</span>
                <a href={`mailto:${emailAddress}`} className="contact-card-link">
                  {emailAddress}
                </a>
              </div>
              <button
                type="button"
                className="copy-icon-btn copy-email-btn"
                aria-label="Copy email address"
                title="Copy email"
                onClick={() => onCopyEmail(emailAddress)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>

            {/* LinkedIn */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">LinkedIn Profile</span>
                <a
                  href="https://www.linkedin.com/in/pratik-priyadarshi-swain-8265b1364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                >
                  linkedin.com/in/pratik-priyadarshi-swain-8265b1364
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/pratik-priyadarshi-swain-8265b1364"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link-btn"
                aria-label="Open LinkedIn profile in new tab"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">GitHub Account</span>
                <a
                  href="https://github.com/itzpratikswain19-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-link"
                >
                  github.com/itzpratikswain19-maker
                </a>
              </div>
              <a
                href="https://github.com/itzpratikswain19-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link-btn"
                aria-label="Open GitHub account in new tab"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* University / Location */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Campus Location</span>
                <span className="contact-card-text">
                  GIET University, Gunupur, Rayagada, Odisha, India
                </span>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3 className="form-title">Send a Direct Message</h3>
              <p className="form-description">
                Have a question or opportunity? Drop me a message and I will reply promptly.
              </p>
            </div>

            <form id="contact-form" className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required-mark">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input ${errors.name ? 'invalid' : ''}`}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span className="form-error" id="name-error">
                    Please enter your name.
                  </span>
                </div>

                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="required-mark">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'invalid' : ''}`}
                    placeholder="e.g. sarah@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="form-error" id="email-error">
                    Please enter a valid email address.
                  </span>
                </div>
              </div>

              <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required-mark">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`form-input ${errors.subject ? 'invalid' : ''}`}
                  placeholder="e.g. Software Engineering Internship Opportunity"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <span className="form-error" id="subject-error">
                  Please enter a subject line.
                </span>
              </div>

              <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                <label htmlFor="message" className="form-label">
                  Message <span className="required-mark">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-textarea ${errors.message ? 'invalid' : ''}`}
                  rows={5}
                  placeholder="Hi Pratik, I came across your portfolio and would like to connect regarding..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <span className="form-error" id="message-error">
                  Please enter a message (minimum 10 characters).
                </span>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" id="contact-submit-btn">
                <span>Send Message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              <p className="form-note">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Submitting opens your email client directly pre-filled to {emailAddress}.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
