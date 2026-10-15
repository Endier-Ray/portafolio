import type { Localized } from '../i18n';

interface ProjectCopy {
  title: string;
  shortTitle: string;
  type: string;
  role: string;
  description: string;
}
export interface Project {
  id: string;
  url: string;
  practice?: boolean;
  number: string;
  color: string;
  tech: string[];
  copy: Localized<ProjectCopy>;
}

// Agregar un proyecto aqui actualiza ambas paginas sin modificar componentes.
export const projects: Project[] = [
  {
    id: 'ficg', number: '01', color: 'bg-brand-blue',
    url: 'https://ficg.mx/',
    tech: ['PHP', 'WordPress', 'Tailwind CSS', 'Asset optimization'],
    copy: {
      es: {
        title: 'FICG (Festival Internacional de Cine en Guadalajara)', shortTitle: 'FICG',
        type: 'Plataforma cultural', role: 'Liderazgo web y seguridad',
        description: 'Reconstrucción técnica, desarrollo a medida para WordPress y hardening de seguridad para mejorar la velocidad y resistencia de la plataforma oficial.',
      },
      en: {
        title: 'FICG (Guadalajara International Film Festival)', shortTitle: 'FICG',
        type: 'Cultural platform', role: 'Web leadership and security',
        description: 'Technical rebuilding, custom WordPress development and security hardening to improve the speed and resilience of the official platform.',
      },
    },
  },
  {
    id: 'oz-leasing', number: '02', color: 'bg-brand-lilac',
    url: 'https://clickanddrive.ozleasing.mx/',
    tech: ['Vue.js', 'TypeScript', 'REST APIs', 'PDF generation'],
    copy: {
      es: {
        title: 'OZ Leasing (Click & Drive)', shortTitle: 'OZ Leasing',
        type: 'Plataforma financiera', role: 'Frontend y backend integration',
        description: 'Interfaces interactivas, cotizadores en tiempo real, conexión con APIs externas y generación automatizada de documentos para contratos de arrendamiento.',
      },
      en: {
        title: 'OZ Leasing (Click & Drive)', shortTitle: 'OZ Leasing',
        type: 'Financial platform', role: 'Frontend and backend integration',
        description: 'Interactive interfaces, real-time quotes, external API integration and automated document generation for leasing agreements.',
      },
    },
  },
  {
    id: 'pass-generator', number: '03', color: 'bg-brand-cyan',
    url: 'https://password.raydev.com.mx/',
    practice: true,
    tech: ['TypeScript', 'Astro'],
    copy: {
      es: {
        title: 'Pass Generator', shortTitle: 'Pass Generator',
        type: 'Proyecto de práctica', role: 'Desarrollo web',
        description: 'Generador de contraseñas desarrollado como práctica con TypeScript y Astro.',
      },
      en: {
        title: 'Pass Generator', shortTitle: 'Pass Generator',
        type: 'Practice project', role: 'Web development',
        description: 'Password generator built as a practice project with TypeScript and Astro.',
      },
    },
  },
];
