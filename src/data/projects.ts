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
  number: string;
  color: string;
  tech: string[];
  copy: Localized<ProjectCopy>;
}

// Agregar un proyecto aqui actualiza ambas paginas sin modificar componentes.
export const projects: Project[] = [
  {
    id: 'ficg', number: '01', color: 'bg-brand-blue',
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
    id: 'white-label', number: '03', color: 'bg-brand-cyan',
    tech: ['React', 'Vue', 'TypeScript', 'Tailwind CSS'],
    copy: {
      es: {
        title: 'White-label UI (Sistemas Multi-Marca)', shortTitle: 'White-label UI',
        type: 'Arquitectura de producto', role: 'Frontend engineer',
        description: 'Sistemas de temas para Mikrosystem, WispHub y BrandUp con conmutación dinámica de marcas y una base visual escalable.',
      },
      en: {
        title: 'White-label UI (Multi-Brand Systems)', shortTitle: 'White-label UI',
        type: 'Product architecture', role: 'Frontend engineer',
        description: 'Theming systems for Mikrosystem, WispHub and BrandUp with dynamic brand switching and a scalable visual foundation.',
      },
    },
  },
];
