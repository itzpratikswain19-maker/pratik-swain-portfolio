import React from 'react';

export default function Education() {
  return (
    <section id="education" className="education-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
          <p className="section-intro">
            My academic progression in Computer Science Engineering and secondary schooling.
          </p>
        </div>

        <div className="timeline-container">
          {/* B.Tech */}
          <div className="timeline-item">
            <div className="timeline-marker active-marker">
              <span className="marker-dot" />
            </div>
            <div className="timeline-card current-education">
              <div className="timeline-card-header">
                <div className="timeline-badge-group">
                  <span className="education-status-tag">Currently Pursuing</span>
                  <span className="education-degree-tag">B.Tech</span>
                </div>
                <span className="timeline-year">2nd Year (2025 &ndash; Present)</span>
              </div>

              <h3 className="timeline-degree">B.Tech in Computer Science Engineering</h3>
              <h4 className="timeline-institution">GIET University, Gunupur</h4>

              <p className="timeline-details">
                Second-year B.Tech undergraduate building a solid foundation in Computer Science &amp; Engineering. Core academic coursework and practical study include Object-Oriented Programming, C &amp; Java, Data Structures, Database Management, and Web Development.
              </p>

              <div className="timeline-topics">
                <span className="topic-tag">Programming in C</span>
                <span className="topic-tag">Java OOP</span>
                <span className="topic-tag">Data Structures</span>
                <span className="topic-tag">Database Management</span>
                <span className="topic-tag">Web Development</span>
              </div>
            </div>
          </div>

          {/* 12th Standard */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="marker-dot" />
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <span className="education-degree-tag">Higher Secondary (12th)</span>
                <span className="timeline-year">Passing Year: 2025</span>
              </div>

              <h3 className="timeline-degree">Higher Secondary Education (+2 Science)</h3>
              <h4 className="timeline-institution">Council of Higher Secondary Education (CHSE), Odisha</h4>

              <div className="score-pill">
                <span className="score-label">Result:</span>
                <strong className="score-val">68%</strong>
              </div>

              <p className="timeline-details">
                Completed higher secondary curriculum with emphasis on Mathematics, Physics, and analytical problem-solving.
              </p>
            </div>
          </div>

          {/* 10th Standard */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="marker-dot" />
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <span className="education-degree-tag">Secondary (10th)</span>
                <span className="timeline-year">Passing Year: 2023</span>
              </div>

              <h3 className="timeline-degree">Secondary School Certificate (Matriculation)</h3>
              <h4 className="timeline-institution">Board of Secondary Education (BSE), Odisha</h4>

              <div className="score-pill">
                <span className="score-label">Result:</span>
                <strong className="score-val">71%</strong>
              </div>

              <p className="timeline-details">
                Completed foundational secondary schooling with focus on Science, Mathematics, and foundational computational skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
