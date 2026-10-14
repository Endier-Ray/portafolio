import { navigation } from '../data/navigation';

const header = document.querySelector<HTMLElement>('[data-navigation]');
const button = header?.querySelector<HTMLButtonElement>('.menu-button');
const nav = header?.querySelector<HTMLElement>('#main-navigation');
if (!header || !button || !nav) throw new Error('No se pudo inicializar la navegacion del portafolio.');

const links = nav.querySelectorAll<HTMLAnchorElement>('[data-section-link]');
const mobile = window.matchMedia('(max-width: 1050px)');

const openLabel = button.dataset.openLabel;
const closeLabel = button.dataset.closeLabel;
if (!openLabel || !closeLabel) throw new Error('Faltan las etiquetas traducidas del menu.');
const setMenu = (open: boolean) => {
  nav.classList.toggle('is-open', open);
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? closeLabel : openLabel);
};

button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
  if (open) links[0]?.focus();
});
header.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Escape devuelve el foco; Tab no se pierde detras del menu movil abierto.
document.addEventListener('keydown', (event) => {
  if (button.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') {
    setMenu(false);
    button.focus();
  } else if (event.key === 'Tab') {
    const focusable = Array.from(header.querySelectorAll<HTMLElement>('a, button'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
});
mobile.addEventListener('change', () => {
  const focusWasInNav = nav.contains(document.activeElement);
  setMenu(false);
  if (mobile.matches && focusWasInNav) button.focus();
});

// El selector conserva la seccion actual al cambiar de idioma.
const languageLinks = nav.querySelectorAll<HTMLAnchorElement>('[data-language-link]');
function updateLanguageLinks() {
  languageLinks.forEach((link) => { link.hash = window.location.hash; });
}
window.addEventListener('hashchange', updateLanguageLinks);
updateLanguageLinks();

let animationFrame = 0;
function updateActiveSection() {
  animationFrame = 0;
  const readingLine = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
  let currentSection = '';
  navigation.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= readingLine) currentSection = id;
  });
  links.forEach((link) => {
    const active = link.hash === `#${currentSection}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function scheduleUpdate() {
  if (!animationFrame) animationFrame = window.requestAnimationFrame(updateActiveSection);
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
document.documentElement.classList.add('nav-ready');
updateActiveSection();
