import React from 'react';

export default function Hero({ onCopyEmail }) {
  const email = 'pratikpriyadarshiswain19@gmail.com';

  return (
    <section id="hero" className="hero-section section">
      <div className="hero-glow-bg hero-glow-1" />
      <div className="hero-glow-bg hero-glow-2" />
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-pill hero-badge">
            <span className="badge-dot" />
            <span>Second-Year B.Tech Computer Science Engineering Student &bull; GIET University</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Pratik Priyadarshi Swain</span>
          </h1>

          <p className="hero-subtitle">
            Second-Year B.Tech <strong className="text-highlight">Computer Science Engineering</strong> Student | Aspiring Web Developer &amp; Software Engineer — continuously developing programming, backend, database, and web development skills through practical projects.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary" id="hero-btn-projects">
              <span>Explore Projects</span>
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary" id="hero-btn-contact">
              <span>Contact Me</span>
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <button
              type="button"
              className="btn btn-outline copy-email-btn"
              title="Copy email address"
              aria-label="Copy Email Address to Clipboard"
              onClick={() => onCopyEmail(email)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
              <span>Copy Email</span>
            </button>
          </div>

          {/* Social Links Strip */}
          <div className="hero-social-links">
            <span className="social-label">Connect:</span>
            <a
              href="https://github.com/itzpratikswain19-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub: itzpratikswain19-maker"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-priyadarshi-swain-8265b1364"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:pratikpriyadarshiswain19@gmail.com"
              className="social-icon-btn"
              aria-label="Email"
              title="Email: pratikpriyadarshiswain19@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <span>Email</span>
            </a>
          </div>

          {/* Quick Highlight Metrics */}
          <div className="hero-stats-row">
            <div className="stat-card">
              <span className="stat-num">2nd Year</span>
              <span className="stat-desc">B.Tech CSE (GIETU)</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">9</span>
              <span className="stat-desc">Technical Skills</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">1</span>
              <span className="stat-desc">Featured Web Project</span>
            </div>
          </div>
        </div>

        {/* Hero Avatar Column */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            <div className="profile-card-glow" />
            <div className="profile-card">
              <div className="profile-image-container">
                <img
                  src="/assets/profile.jpg"
                  alt="Portrait photo of Pratik Priyadarshi Swain"
                  className="profile-image"
                  id="profile-img"
                  width="340"
                  height="420"
                  loading="eager"
                />
              </div>
              <div className="profile-card-details">
                <div className="profile-status-tag">
                  <span className="pulse-indicator" />
                  <span>Second-Year B.Tech CSE Student &bull; Actively Learning &amp; Building</span>
                </div>
                <div className="profile-identity">
                  <h3 className="profile-name">Pratik P. Swain</h3>
                  <p className="profile-role">B.Tech CSE &bull; Gunupur, Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
