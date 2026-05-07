const container = document.getElementById('particles');

for (let i = 0; i < 20; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${40 + Math.random() * 50}%`;
  p.style.animationDelay = `${Math.random() * 8}s`;
  container.appendChild(p);
}

const particles2 = document.getElementById('particles2');
if (particles2) {
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${30 + Math.random() * 60}%`;
    p.style.animationDelay = `${Math.random() * 8}s`;
    p.style.opacity = '0.4';
    particles2.appendChild(p);
  }
}

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

document.querySelectorAll('.support-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    const section = card.dataset.section;
    const modal = document.getElementById(section + 'Modal');
    if (modal) {
      document.getElementById('modalOverlay').classList.add('active');
      modal.classList.add('active');
    }
  });
});

document.getElementById('modalOverlay').addEventListener('click', closeAllModals);

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => e.stopPropagation());
});

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  document.getElementById('modalOverlay').classList.remove('active');
}

document.querySelectorAll('.contact-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent! ✓';
    btn.style.background = '#22c55e';
    setTimeout(() => {
      closeAllModals();
      form.reset();
      btn.textContent = form.id === 'bugForm' ? 'Submit Report' : 'Send Message';
      btn.style.background = '';
    }, 1500);
  });
});