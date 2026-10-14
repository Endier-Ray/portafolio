// Desplazamiento horizontal basado en geometria estable, sin medir la animacion.
export function getTooltipShift(left: number, itemWidth: number, tooltipWidth: number, viewportWidth: number) {
  const tooltipLeft = left + itemWidth / 2 - tooltipWidth / 2;
  const tooltipRight = tooltipLeft + tooltipWidth;
  return Math.max(0, 24 - tooltipLeft) - Math.max(0, tooltipRight - viewportWidth + 24);
}
