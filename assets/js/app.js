document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('[data-nav]');
  const here = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === here || href.endsWith('/' + here)) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
