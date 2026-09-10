import React, { useState } from 'react';

const FILTER_BUTTONS = [
  { label: 'All Skills', value: 'all' },
  { label: 'Programming Languages', value: 'languages' },
  { label: 'Web & Backend', value: 'web' },
  { label: 'Database & Tools', value: 'tools' },
  { label: 'Soft Skills', value: 'soft' },
];

const SKILLS = [
  {
    id: 'c',
    title: 'C Language',
    categories: ['languages'],
    badge: 'Academic Core',
    iconClass: 'lang-c',
    icon: <span className="code-symbol">C</span>,
    summary: 'Procedural programming, memory management basics, pointers, arrays, and standard data structures.',
    categoryTag: 'Language',
    statusTag: 'Strong Foundation',
  },
  {
    id: 'java',
    title: 'Java',
    categories: ['languages'],
    badge: 'Primary Language',
    iconClass: 'lang-java',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    summary: 'Object-oriented programming, class design, collections, exception handling, and backend development.',
    categoryTag: 'Language / OOP',
    statusTag: 'Project Applied',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    categories: ['languages', 'web'],
    badge: 'Web Interactive',
    iconClass: 'lang-js',
    icon: <span className="code-symbol">JS</span>,
    summary: 'Modern ES6+ syntax, DOM manipulation, asynchronous event handling, and client-side logic.',
    categoryTag: 'Frontend Scripting',
    statusTag: 'Hands-on',
  },
  {
    id: 'html',
    title: 'HTML5',
    categories: ['web'],
    badge: 'Frontend Structure',
    iconClass: 'lang-html',
    icon: <span className="code-symbol">&lt;/&gt;</span>,
    summary: 'Semantic markup, accessibility fundamentals, responsive viewport metadata, and forms.',
    categoryTag: 'Markup',
    statusTag: 'Core Competency',
  },
  {
    id: 'css',
    title: 'CSS3',
    categories: ['web'],
    badge: 'Styling & UI',
    iconClass: 'lang-css',
    icon: <span className="code-symbol">#</span>,
    summary: 'Flexbox, CSS Grid, custom properties, responsive media queries, glassmorphism, and animations.',
    categoryTag: 'Styling',
    statusTag: 'Core Competency',
  },
  {
    id: 'spring',
    title: 'Spring Boot',
    categories: ['web'],
    badge: 'Backend Framework',
    iconClass: 'lang-spring',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    summary: 'Building RESTful APIs, dependency injection, MVC architecture, and backend service integration.',
    categoryTag: 'Backend',
    statusTag: 'Project Applied',
  },
  {
    id: 'mysql',
    title: 'MySQL',
    categories: ['tools'],
    badge: 'Relational DB',
    iconClass: 'lang-sql',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    summary: 'Relational database schemas, SQL queries, table relationships, indexing, and data persistence.',
    categoryTag: 'Database',
    statusTag: 'Project Applied',
  },
  {
    id: 'git',
    title: 'Git',
    categories: ['tools'],
    badge: 'Version Control',
    iconClass: 'lang-git',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    summary: 'Local repository version tracking, branching strategies, commit cleanliness, and merge resolution.',
    categoryTag: 'Dev Tool',
    statusTag: 'Daily Practice',
  },
  {
    id: 'github',
    title: 'GitHub',
    categories: ['tools'],
    badge: 'Collaboration',
    iconClass: 'lang-github',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    summary: 'Remote repository hosting, portfolio management, documentation, and open collaboration.',
    categoryTag: 'Collaboration',
    statusTag: 'Active User',
  },
  {
    id: 'soft-suite',
    title: 'Soft Skills Suite',
    categories: ['soft'],
    badge: 'Interpersonal',
    iconClass: 'lang-soft',
    isSoft: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    summary: 'Communication, Adaptability, Critical Thinking, Problem Solving, Time Management, Teamwork, and Continuous Learning.',
    categoryTag: 'Interpersonal',
    statusTag: 'Core Value',
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const visibleSkills = SKILLS.filter(
    (skill) => activeFilter === 'all' || skill.categories.includes(activeFilter)
  );

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="section-divider" />
          <p className="section-intro">
            A transparent overview of the programming languages, web technologies, and developer tools I actively learn and practice.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="skills-filter-container">
          {FILTER_BUTTONS.map((btn) => (
            <button
              key={btn.value}
              type="button"
              className={`skill-filter-btn ${activeFilter === btn.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid" id="skills-grid">
          {visibleSkills.map((skill) => (
            <div
              key={skill.id}
              className={`skill-card ${skill.isSoft ? 'soft-card-item' : ''}`}
            >
              <div className="skill-card-top">
                <div className={`skill-icon-badge ${skill.iconClass}`}>
                  {skill.icon}
                </div>
                <span className="skill-level-badge">{skill.badge}</span>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-summary">{skill.summary}</p>
              <div className="skill-meta">
                <span className="skill-category-tag">{skill.categoryTag}</span>
                <span className="skill-status-tag">{skill.statusTag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
