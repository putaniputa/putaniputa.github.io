// Theme toggle (remembers choice)
const initTheme = () => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  if (!toggle) {
    return;
  }

  const saved = localStorage.getItem('data-theme');
  if (saved) {
    root.setAttribute('data-theme', saved);
  }

  const syncIcon = () => {
    toggle.textContent = root.getAttribute('data-theme') === 'light' ? '☀️' : '🌙';
  };
  syncIcon();

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('data-theme', next);
    syncIcon();
  });
};

// Scroll reveal using IntersectionObserver
const initScrollReveal = () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
       initTheme();
       initScrollReveal();
   });

