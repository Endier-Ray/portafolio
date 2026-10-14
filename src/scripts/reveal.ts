const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Sin soporte o con movimiento reducido, el contenido permanece visible.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 40px' });
  document.documentElement.classList.add('reveal-ready');
  elements.forEach((element) => observer.observe(element));
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    }
  });
}
