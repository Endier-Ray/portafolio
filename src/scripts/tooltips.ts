import { getTooltipShift } from './tooltip-position';

// Se mide el nombre, no el transform animado del tooltip, para evitar posiciones obsoletas.
function positionTooltip(item: HTMLElement) {
  const tooltip = item.querySelector<HTMLElement>('[role="tooltip"]');
  if (!tooltip) throw new Error('Tecnologia sin tooltip asociado.');
  const bounds = item.getBoundingClientRect();
  const shift = getTooltipShift(bounds.left, bounds.width, tooltip.offsetWidth, document.documentElement.clientWidth);
  tooltip.style.setProperty('--tooltip-shift', `${shift}px`);
}

document.querySelectorAll<HTMLElement>('.technology-item').forEach((item) => {
  item.addEventListener('pointerenter', () => {
    item.classList.remove('tooltip-dismissed');
    positionTooltip(item);
  });
  item.addEventListener('focus', () => {
    item.classList.remove('tooltip-dismissed');
    positionTooltip(item);
  });
  item.addEventListener('pointerleave', () => {
    if (!item.matches(':focus-within')) item.classList.remove('tooltip-dismissed');
  });
  item.addEventListener('blur', () => item.classList.remove('tooltip-dismissed'));
  if (item.matches(':hover, :focus-within')) positionTooltip(item);
});

window.addEventListener('resize', () => {
  document.querySelectorAll<HTMLElement>('.technology-item:is(:hover, :focus-within)').forEach(positionTooltip);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll<HTMLElement>('.technology-item:is(:hover, :focus-within)').forEach((item) => {
      item.classList.add('tooltip-dismissed');
    });
  }
});
