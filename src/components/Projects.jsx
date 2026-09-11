import React from 'react';

const CAPABILITIES = [
  {
    num: 1,
    title: 'Resume Upload',
    desc: 'Accepts candidate resumes in standard file formats for screening.',
  },
  {
    num: 2,
    title: 'Resume Processing',
    desc: 'Parses uploaded documents, extracting structured text from raw files.',
  },
  {
    num: 3,
    title: 'Skill Keyword Extraction',
    desc: 'Identifies candidate technical skills against predefined technology keywords.',
  },
  {
    num: 4,
    title: 'Job Description Analysis',
    desc: 'Evaluates role requirements, categorizing mandatory vs. preferred skills.',
  },
  {
    num: 5,
    title: 'Candidate Skill Matching',
    desc: 'Executes skill comparison logic to compute qualification fit percentages.',
  },
  {
    num: 6,
    title: 'Display Matching Results',
    desc: 'Presents clear visual dashboards with breakdowns of matched and missing skills.',
  },
];

export default function Projects({ onOpenModal }) {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Practical Engineering</span>
          <h2 className="section-title">Featured Project</h2>
          <div className="section-divider" />
          <p className="section-intro">
            An in-depth look at a full-stack project built to solve real hiring workflows with Java, Spring Boot, MySQL, and modern web technologies.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="featured-project-container">
          <div className="project-spotlight-card">
            <div className="project-header-bar">
              <div className="project-type-pill">
                <span className="pulse-indicator pulse-indigo" />
                <span>Full-Stack Web Application</span>
              </div>
              <span className="project-tag-accent">Core Highlight</span>
            </div>

            <div className="project-main-content">
              <div className="project-info-side">
                <h3 className="project-title">Automated Resume Screener &amp; Skill-Matcher</h3>

                <p className="project-description">
                  A web-based application built to streamline the initial resume screening process by extracting text and matching candidate technical skills directly against target job requirements. Features a Java Spring Boot backend, MySQL database, and an intuitive web interface.
                </p>

                <div className="project-tech-stack">
                  <span className="tech-badge">Java</span>
                  <span className="tech-badge">Spring Boot</span>
                  <span className="tech-badge">MySQL</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    id="open-project-modal-btn"
                    onClick={onOpenModal}
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
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                    <span>View Architecture &amp; Features</span>
                  </button>
                  <a
                    href="https://github.com/itzpratikswain19-maker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
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
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span>GitHub Repository</span>
                  </a>
                </div>
              </div>

              {/* Feature Highlights Grid */}
              <div className="project-features-side">
                <h4 className="features-title">Core Capabilities:</h4>
                <div className="feature-pills-list">
                  {CAPABILITIES.map((cap) => (
                    <div key={cap.num} className="feature-item">
                      <div className="feature-bullet">{cap.num}</div>
                      <div className="feature-item-body">
                        <h5>{cap.title}</h5>
                        <p>{cap.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
