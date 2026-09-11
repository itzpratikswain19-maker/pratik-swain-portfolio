/**
 * PRATIK PRIYADARSHI SWAIN - PORTFOLIO JAVASCRIPT
 * Features:
 * - Theme Switcher (Dark/Light with localStorage persistence)
 * - Accessible Mobile Navigation Drawer
 * - Active Navigation Scroll Spy
 * - Interactive Skills Category Filtering
 * - Interactive Project Details Modal with Escape/Focus handling
 * - One-Click Email Copy with Toast Notification
 * - Interactive Contact Form with Validation & Mailto Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNavigation();
  initScrollSpy();
  initSkillsFilter();
  initProjectModal();
  initCopyEmail();
  initContactForm();
});

/* ==========================================================================
   1. Theme Switcher (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('pratik_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  htmlRoot.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('title', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
    
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = htmlRoot.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', currentTheme);
      localStorage.setItem('pratik_portfolio_theme', currentTheme);
      themeToggleBtn.setAttribute('title', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
      showToast(`Switched to ${currentTheme} mode`, 'info');
    });
  }
}

/* ==========================================================================
   2. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer || !overlay) return;

  function openDrawer() {
    menuBtn.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   3. Active Navigation Scroll Spy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-links-desktop .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navbar = document.getElementById('navbar');

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 120;

    // Navbar shadow on scroll
    if (navbar) {
      if (window.scrollY > 30) {
        navbar.style.borderBottomColor = 'rgba(99, 102, 241, 0.25)';
        navbar.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.borderBottomColor = '';
        navbar.style.boxShadow = '';
      }
    }

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/* ==========================================================================
   4. Interactive Skills Category Filtering
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skills-grid .skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. Interactive Project Details Modal
   ========================================================================== */
function initProjectModal() {
  const openModalBtn = document.getElementById('open-project-modal-btn');
  const modal = document.getElementById('project-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const closeModalFooterBtn = document.getElementById('close-modal-footer-btn');
  const modalOverlay = document.getElementById('modal-overlay');

  if (!modal || !openModalBtn) return;

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeModalBtn) closeModalBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    openModalBtn.focus();
  }

  openModalBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeModalFooterBtn) closeModalFooterBtn.addEventListener('click', closeModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. One-Click Copy Email to Clipboard
   ========================================================================== */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const email = button.getAttribute('data-email') || 'pratikpriyadarshiswain19@gmail.com';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(() => {
            showToast(`Email copied: ${email}`, 'success');
          })
          .catch(() => {
            fallbackCopy(email);
          });
      } else {
        fallbackCopy(email);
      }
    });
  });

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
    } catch (err) {
      showToast(`Email: ${text}`, 'info');
    }
    document.body.removeChild(textArea);
  }
}

/* ==========================================================================
   7. Contact Form Handling & Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setFieldError(input, errorElementId, isError) {
    const parent = input.closest('.form-group');
    if (!parent) return;

    if (isError) {
      parent.classList.add('has-error');
      input.classList.add('invalid');
    } else {
      parent.classList.remove('has-error');
      input.classList.remove('invalid');
    }
  }

  // Clear errors on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (field) {
      field.addEventListener('input', () => {
        setFieldError(field, '', false);
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      setFieldError(nameInput, 'name-error', true);
      isValid = false;
    } else {
      setFieldError(nameInput, 'name-error', false);
    }

    // Validate Email
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      setFieldError(emailInput, 'email-error', true);
      isValid = false;
    } else {
      setFieldError(emailInput, 'email-error', false);
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      setFieldError(subjectInput, 'subject-error', true);
      isValid = false;
    } else {
      setFieldError(subjectInput, 'subject-error', false);
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setFieldError(messageInput, 'message-error', true);
      isValid = false;
    } else {
      setFieldError(messageInput, 'message-error', false);
    }

    if (!isValid) {
      showToast('Please correct the highlighted form errors.', 'error');
      return;
    }

    const name = encodeURIComponent(nameInput.value.trim());
    const email = encodeURIComponent(emailInput.value.trim());
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
    const body = encodeURIComponent(
      `Hi Pratik,\n\n${messageInput.value.trim()}\n\n---\nSender Name: ${decodeURIComponent(name)}\nSender Email: ${decodeURIComponent(email)}`
    );

    // Launch mailto link with pre-filled content
    const mailtoUrl = `mailto:pratikpriyadarshiswain19@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    showToast('Opening your email client to send message...', 'success');
    form.reset();
  });
}

/* ==========================================================================
   8. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconSvg = '';
  if (type === 'success') {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
  } else if (type === 'error') {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
  } else {
    iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
  }

  toast.innerHTML = `${iconSvg}<span>${message}</span>`;
  container.appendChild(toast);

  // Trigger smooth entrance
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}
