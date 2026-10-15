import type { Localized } from '../i18n';
import type { TechnologyName } from './tooltips';

export interface Technology {
  name: TechnologyName;
  icon: string | null;
}
export interface SkillGroup {
  number: string;
  accent: string;
  copy: Localized<{ title: string; description: string }>;
  items: Technology[];
}

// Clases completas para que Tailwind detecte los colores durante la compilacion.
export const skillGroups: SkillGroup[] = [
  {
    number: '01', accent: 'before:bg-brand-blue',
    copy: {
      es: { title: 'Frontend & UI/UX', description: 'Interfaces accesibles, responsive y optimizadas desde Figma hasta producción.' },
      en: { title: 'Frontend & UI/UX', description: 'Accessible, responsive and optimized interfaces, from Figma to production.' },
    },
    items: [
      { name: 'Vue.js', icon: 'vuedotjs' }, { name: 'React', icon: 'react' },
      { name: 'Astro', icon: 'astro' }, { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'CSS', icon: 'css' }, { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' }, { name: 'Figma', icon: 'figma' },
    ],
  },
  {
    number: '02', accent: 'before:bg-brand-lilac',
    copy: {
      es: { title: 'Backend & datos', description: 'APIs, lógica de negocio y persistencia con arquitecturas mantenibles.' },
      en: { title: 'Backend & data', description: 'APIs, business logic and persistence with maintainable architectures.' },
    },
    items: [
      { name: 'PHP', icon: 'php' }, { name: 'Laravel', icon: 'laravel' },
      { name: 'CodeIgniter 4', icon: 'codeigniter' }, { name: 'Python', icon: 'python' },
      { name: 'FastAPI', icon: 'fastapi' }, { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MySQL', icon: 'mysql' }, { name: 'Bruno', icon: 'bruno' },
      { name: 'Postman', icon: 'postman' }, { name: 'DBeaver', icon: 'dbeaver' },
    ],
  },
  {
    number: '03', accent: 'before:bg-brand-cyan',
    copy: {
      es: { title: 'Data & performance', description: 'Análisis de datos y optimización de recursos para productos más rápidos.' },
      en: { title: 'Data & performance', description: 'Data analysis and resource optimization for faster products.' },
    },
    items: [
      { name: 'Pandas', icon: 'pandas' }, { name: 'NumPy', icon: 'numpy' },
      { name: 'SQL', icon: null }, { name: 'Squoosh', icon: null },
      { name: 'pyftsubset', icon: null }, { name: 'Benchmarking', icon: null },
    ],
  },
  {
    number: '04', accent: 'before:bg-brand-coral',
    copy: {
      es: { title: 'Infraestructura & DevOps', description: 'Despliegues, servidores y redes para llevar cada solución a un entorno estable.' },
      en: { title: 'Infrastructure & DevOps', description: 'Deployments, servers and networks to bring every solution to a stable environment.' },
    },
    items: [
      { name: 'Linux', icon: 'linux' }, { name: 'Proxmox VE', icon: 'proxmox' },
      { name: 'Coolify', icon: 'coolify' }, { name: 'Nixpacks', icon: null },
      { name: 'Cloudflare', icon: 'cloudflare' }, { name: 'GNS3', icon: null },
      { name: 'Podman', icon: 'podman' }, { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' }, { name: 'Docker', icon: 'docker' },
      { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg' },
    ],
  },
  {
    number: '05', accent: 'before:bg-brand-blue',
    copy: {
      es: { title: 'Desarrollo asistido por IA', description: 'Uso GitHub Copilot y Gemini para explorar soluciones, apoyar la escritura de código y agilizar la documentación, con revisión y validación propias.' },
      en: { title: 'AI-assisted development', description: 'I use GitHub Copilot and Gemini to explore solutions, assist with coding and streamline documentation, reviewing and validating the results myself.' },
    },
    items: [
      { name: 'GitHub Copilot', icon: 'githubcopilot' },
      { name: 'Gemini', icon: 'googlegemini' },
    ],
  },
];
