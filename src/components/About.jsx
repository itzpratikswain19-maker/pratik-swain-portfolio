import React from 'react';

const SOFT_SKILLS = [
  {
    name: 'Communication',
    desc: 'Clear expression of technical thoughts, active listening, and open project dialogue.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: 'Problem Solving',
    desc: 'Structured decomposition of complex programming hurdles into clean, logical solutions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Time Management',
    desc: 'Balancing rigorous university coursework with deliberate practical coding projects.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: 'Teamwork',
    desc: 'Collaborative mindset eager to pair program, review code, and achieve collective goals.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: 'Continuous Learning',
    desc: 'Relentless curiosity to explore emerging engineering practices and developer tooling.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    name: 'Adaptability',
    desc: 'Quickly grasping new syntaxes, libraries, and design patterns as tasks evolve.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  {
    name: 'Critical Thinking',
    desc: 'Evaluating performance tradeoffs, edge cases, and code efficiency before executing.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="about-grid">
          <div className="about-text-column">
            <div className="about-card intro-card">
              <h3 className="about-heading">
                Second-Year B.Tech Computer Science Engineering Student — Actively Learning &amp; Building
              </h3>
               <p className="about-paragraph">
                I am a second-year B.Tech <strong>Computer Science Engineering student at GIET University, Gunupur</strong>, with a strong interest in web development and software engineering. I am continuously developing my programming, backend, database, and web development skills by working on practical projects using <strong>C, Java, HTML, CSS, JavaScript, Spring Boot, and MySQL</strong>.
              </p>
              <p className="about-paragraph">
                Rather than focusing only on theory, I enjoy applying what I learn by building practical projects—such as my automated resume screening and skill-matching web application. I am dedicated to improving my core problem-solving abilities and exploring best software development practices.
              </p>
            </div>

            {/* Recruiter & Career Focus Callout */}
            <div className="career-focus-banner">
              <div className="focus-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="focus-text">
                <h4 className="focus-title">Career Objective</h4>
                <p className="focus-description">
                  Seeking entry-level <strong>Software Engineering and Web Development internship or learning opportunities</strong> where I can apply my foundational skills, learn from experienced developers, and contribute to practical projects.
                </p>
              </div>
            </div>
          </div>

          {/* About Highlights Column */}
          <div className="about-highlights-column">
            <div className="about-info-box">
              <h4 className="info-box-title">Quick Information</h4>
              <ul className="info-list">
                <li>
                  <span className="info-key">Name:</span>
                  <span className="info-val">Pratik Priyadarshi Swain</span>
                </li>
                <li>
                  <span className="info-key">Degree:</span>
                   <span className="info-val">B.Tech in Computer Science Engineering (2nd Year)</span>
                </li>
                <li>
                  <span className="info-key">Institution:</span>
                  <span className="info-val">GIET University, Gunupur</span>
                </li>
                <li>
                  <span className="info-key">Location:</span>
                  <span className="info-val">Gunupur, Odisha, India</span>
                </li>
                <li>
                  <span className="info-key">Primary Focus:</span>
                  <span className="info-val">Web Development &amp; Software Engineering</span>
                </li>
                <li>
                  <span className="info-key">Status:</span>
                  <span className="info-val highlight-val">Actively Learning &amp; Building</span>
                </li>
              </ul>
            </div>

            <div className="what-i-bring-card">
              <h4 className="info-box-title">What I Bring to Your Team</h4>
              <div className="bring-tags">
                <span className="bring-tag"><span className="check-icon">&#10003;</span> Solid core OOP &amp; C/Java fundamentals</span>
                <span className="bring-tag"><span className="check-icon">&#10003;</span> Quick adaptability to new tools &amp; frameworks</span>
                <span className="bring-tag"><span className="check-icon">&#10003;</span> High discipline and self-driven curiosity</span>
                <span className="bring-tag"><span className="check-icon">&#10003;</span> Transparent communication and receptive to feedback</span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills Grid in About Section */}
        <div className="soft-skills-section">
          <h3 className="soft-skills-title">Core Interpersonal &amp; Professional Strengths</h3>
          <p className="soft-skills-subtitle">
            Essential soft skills that guide how I approach collaboration, technical hurdles, and team projects:
          </p>
          <div className="soft-skills-grid">
            {SOFT_SKILLS.map((skill) => (
              <div key={skill.name} className="soft-skill-card">
                <div className="soft-icon">{skill.icon}</div>
                <h4 className="soft-name">{skill.name}</h4>
                <p className="soft-desc">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
