const container = document.getElementById('particles');

for (let i = 0; i < 20; i++) {

  const p = document.createElement('div');

  p.className = 'particle';

  p.style.left = `${Math.random() * 100}%`;
  p.style.top = `${40 + Math.random() * 50}%`;

  p.style.animationDelay = `${Math.random() * 8}s`;

  container.appendChild(p);
}