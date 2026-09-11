import React, { useEffect } from 'react';

export default function ProjectModal({ isOpen, onClose }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="project-modal"
      className="modal open"
      aria-hidden="false"
      role="dialog"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-overlay" id="modal-overlay" onClick={onClose} />
      <div className="modal-dialog">
        <div className="modal-header">
          <div>
            <span className="badge-pill modal-badge">Project Deep-Dive</span>
            <h3 id="modal-project-title" className="modal-title">
              Automated Resume Screener &amp; Skill-Matcher
            </h3>
          </div>
          <button
            id="close-modal-btn"
            className="close-modal-btn"
            aria-label="Close Project Details Dialog"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4 className="modal-section-heading">Project Overview &amp; Objective</h4>
            <p className="modal-text">
              Manual resume screening consumes substantial recruiter time and introduces human fatigue into initial candidate qualification. <strong>Automated Resume Screener &amp; Skill-Matcher</strong> provides an automated pipeline to ingest candidate resumes, parse structured technical keywords, correlate them against target role criteria, and score candidate-to-job compatibility instantly.
            </p>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-heading">Technology Stack &amp; Architecture</h4>
            <div className="tech-spec-grid">
              <div className="spec-card">
                <span className="spec-type">Backend Service</span>
                <strong className="spec-value">Java &amp; Spring Boot</strong>
                <span className="spec-detail">REST API routing, text processing service, and matching business logic.</span>
              </div>
              <div className="spec-card">
                <span className="spec-type">Relational Database</span>
                <strong className="spec-value">MySQL</strong>
                <span className="spec-detail">Schema for candidates, resumes, extracted skill tokens, and job requirement profiles.</span>
              </div>
              <div className="spec-card">
                <span className="spec-type">Frontend Presentation</span>
                <strong className="spec-value">HTML5, CSS3, JavaScript</strong>
                <span className="spec-detail">Interactive document uploader, real-time result dashboards, and match percentage scorecards.</span>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-heading">End-to-End Workflow Architecture</h4>
            <div className="workflow-steps-diagram">
              <div className="workflow-step">
                <div className="step-num">Step 1</div>
                <h5>Resume Upload</h5>
                <p>User submits candidate resume through clean web interface.</p>
              </div>
              <div className="workflow-arrow">&rarr;</div>
              <div className="workflow-step">
                <div className="step-num">Step 2</div>
                <h5>Text Processing</h5>
                <p>Spring Boot service parses raw text from file streams.</p>
              </div>
              <div className="workflow-arrow">&rarr;</div>
              <div className="workflow-step">
                <div className="step-num">Step 3</div>
                <h5>Skill Extraction</h5>
                <p>Identifies candidate tech stack tokens and experience keywords.</p>
              </div>
              <div className="workflow-arrow">&rarr;</div>
              <div className="workflow-step">
                <div className="step-num">Step 4</div>
                <h5>Job Analysis</h5>
                <p>Evaluates target role criteria and required competency list.</p>
              </div>
              <div className="workflow-arrow">&rarr;</div>
              <div className="workflow-step">
                <div className="step-num">Step 5</div>
                <h5>Matching Engine</h5>
                <p>Computes similarity score and flags matching vs. missing skills.</p>
              </div>
              <div className="workflow-arrow">&rarr;</div>
              <div className="workflow-step">
                <div className="step-num">Step 6</div>
                <h5>Results Dashboard</h5>
                <p>Renders visual scorecards and candidate ranking breakdown.</p>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-heading">Core Feature Breakdown</h4>
            <div className="modal-features-grid">
              <div className="m-feat-card">
                <span className="m-feat-title">&#10003; 1. Resume Upload</span>
                <p>Intuitive file dropzone accepting standard applicant formats for immediate batch or single processing.</p>
              </div>
              <div className="m-feat-card">
                <span className="m-feat-title">&#10003; 2. Resume Processing</span>
                <p>Text extraction, cleaning, and keyword parsing for reliable document analysis.</p>
              </div>
              <div className="m-feat-card">
                <span className="m-feat-title">&#10003; 3. Skill Extraction</span>
                <p>Dictionary and pattern-based matching against technical taxonomies (languages, frameworks, databases).</p>
              </div>
              <div className="m-feat-card">
                <span className="m-feat-title">&#10003; 4. Job Description Analysis</span>
                <p>Ingests recruiter job descriptions, categorizing must-have technical qualifications from nice-to-have items.</p>
              </div>
              <div className="m-feat-card">
                <span className="m-feat-title">&#10003; 5. Candidate Skill Matching</span>
                <p>Skill comparison logic and matching scoring calculating qualification overlap percentage.</p>
              </div>
              <div className="m-feat-card">
                <span className="m-feat-title">&#10003; 6. Display Matching Results</span>
                <p>Clean recruiter-facing UI displaying breakdown of matched skills, missing criteria, and overall suitability.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
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
            <span>Visit GitHub Profile</span>
          </a>
          <button className="btn btn-primary" id="close-modal-footer-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
