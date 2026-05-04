document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.innerHTML = '<img id="lightbox-img" /><button id="lightbox-close">&times;</button>';
  document.body.appendChild(overlay);

  const img = document.getElementById('lightbox-img');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 300);
  }

  document.querySelectorAll('.screenshot-item img, .code-item img').forEach(el => {
    el.addEventListener('click', () => open(el.src, el.alt));
  });

  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.getElementById('lightbox-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
});
