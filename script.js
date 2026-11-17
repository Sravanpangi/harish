/**
 * Sravan's Portfolio - Core Interactive Features
 * Vanilla JavaScript (ES6+)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initThemeToggle();
  initMobileNavigation();
  initTypingEffect();
  initNavbarScroll();
  initScrollSpy();
  initProjectFilters();
  initSkillProgressAnimation();
  initContactForm();
  initScrollToTop();
  initFooterYear();
});

/* ===================================================================
   1. THEME TOGGLE (Dark / Light Mode)
   =================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const themeIcon = themeToggleBtn.querySelector('i');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');
  applyTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = htmlElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
      themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
    }
  }
}

/* ===================================================================
   2. MOBILE NAVIGATION
   =================================================================== */
function initMobileNavigation() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ===================================================================
   3. TYPEWRITER EFFECT
   =================================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const words = [
    'Full Stack Developer',
    'Frontend Specialist',
    'Clean Code Enthusiast',
    'Problem Solver'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const delayBetweenWords = 1800;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let timeoutSpeed = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      timeoutSpeed = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      timeoutSpeed = 400;
    }

    setTimeout(type, timeoutSpeed);
  }

  type();
}

/* ===================================================================
   4. NAVBAR SCROLL EFFECT
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ===================================================================
   5. SCROLL SPY (Active Nav Link)
   =================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ===================================================================
   6. PROJECT FILTERS
   =================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ===================================================================
   7. SKILL BAR ANIMATION ON VIEW
   =================================================================== */
function initSkillProgressAnimation() {
  const progressBars = document.querySelectorAll('.progress');
  if (!progressBars.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
          obs.disconnect(); // Trigger once
        }
      });
    },
    { threshold: 0.25 }
  );

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
}

/* ===================================================================
   8. CONTACT FORM VALIDATION & SUBMISSION
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Field references
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      showError('name-error', 'Please enter your name.');
      isValid = false;
    } else {
      hideError('name-error');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      showError('email-error', 'Please enter your email.');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError('email-error', 'Please enter a valid email address.');
      isValid = false;
    } else {
      hideError('email-error');
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      showError('subject-error', 'Please enter a subject.');
      isValid = false;
    } else {
      hideError('subject-error');
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError('message-error', 'Please enter a message.');
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError('message-error', 'Message should be at least 10 characters.');
      isValid = false;
    } else {
      hideError('message-error');
    }

    if (!isValid) return;

    // Simulate sending state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();

      // Show success toast
      showToast('🎉 Thank you! Your message has been sent successfully.');
    }, 1200);
  });

  function showError(elementId, message) {
    const errorElem = document.getElementById(elementId);
    if (errorElem) {
      errorElem.textContent = message;
      errorElem.classList.add('visible');
    }
  }

  function hideError(elementId) {
    const errorElem = document.getElementById(elementId);
    if (errorElem) {
      errorElem.textContent = '';
      errorElem.classList.remove('visible');
    }
  }
}

/* ===================================================================
   9. TOAST NOTIFICATION
   =================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ===================================================================
   10. SCROLL TO TOP BUTTON
   =================================================================== */
function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ===================================================================
   11. DYNAMIC FOOTER YEAR
   =================================================================== */
function initFooterYear() {
  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
