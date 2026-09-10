import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic &amp; Technical Growth</span>
          <h2 className="section-title">Achievements &amp; Certifications</h2>
          <div className="section-divider" />
          <p className="section-intro">
            A transparent record of verified certifications, technical events, and achievements.
          </p>
        </div>

        <div className="achievements-notice-container">
          <div className="achievements-notice-card">
            <div className="achievements-notice-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="achievements-notice-badge">
              <span className="pulse-indicator" />
              <span>In Progress &bull; Second-Year Journey</span>
            </div>
            <h3 className="achievements-notice-title">Achievements &amp; Certifications</h3>
            <p className="achievements-notice-text">
              Verified certifications, workshops, hackathons, and other achievements will be added here as I complete them.
            </p>
            <div className="achievements-notice-footer">
              <span className="notice-tag">Second-Year B.Tech CSE</span>
              <span className="notice-tag">GIET University, Gunupur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
