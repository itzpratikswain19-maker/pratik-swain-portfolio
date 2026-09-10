import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import Toast from './components/Toast.jsx';

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('pratik_portfolio_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Active section for navbar scroll spy
  const [activeSection, setActiveSection] = useState('hero');

  // Project deep-dive modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toast notification state
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  // Update theme attribute on root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pratik_portfolio_theme', theme);
  }, [theme]);

  // Toggle theme callback
  const handleToggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      showToast(`Switched to ${nextTheme} mode`, 'info');
      return nextTheme;
    });
  }, [showToast]);

  // Scroll spy for active section highlight
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];

    function handleScroll() {
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Copy email helper
  const handleCopyEmail = useCallback(
    (email) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(email)
          .then(() => {
            showToast(`Email copied: ${email}`, 'success');
          })
          .catch(() => {
            fallbackCopy(email);
          });
      } else {
        fallbackCopy(email);
      }

      function fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          document.execCommand('copy');
          showToast(`Email copied: ${text}`, 'success');
        } catch {
          showToast(`Email: ${text}`, 'info');
        }
        document.body.removeChild(textArea);
      }
    },
    [showToast]
  );

  return (
    <>
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
      <main id="main-content">
        <Hero onCopyEmail={handleCopyEmail} />
        <About />
        <Skills />
        <Projects onOpenModal={() => setIsModalOpen(true)} />
        <Education />
        <Achievements />
        <Contact onCopyEmail={handleCopyEmail} onShowToast={showToast} />
      </main>
      <Footer />
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Toast toasts={toasts} />
    </>
  );
}
