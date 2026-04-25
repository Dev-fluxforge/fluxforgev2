import {Injectable, signal} from '@angular/core';

export interface Project {
  id: string;
  title: string;
  category: 'Company' | 'Client' | 'Business' | 'Internship' | 'Non-Profit' | 'Training' | 'Personal';
  tech: string[];
  description: string;
  github: string;
  demo?: string;
  status?: string;
  fullDescription?: string;
  screenshots?: string[];
  videoUrl?: string;
  features?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = signal<Project[]>([
    {
      id: 'P-001',
      title: 'FluxForge Company Website',
      category: 'Company',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      description: 'Developing a high-performance, visually striking digital identity for a new software engineering startup.',
      fullDescription: 'The FluxForge Company Website is a flagship project designed to demonstrate the cutting-edge capabilities of our studio. Built using zoneless Angular, it features extreme performance with near-instant load times. The design language is "Modern Brutalist" combined with "High-Contrast Forest" themes, emphasizing precision and technical depth. We implemented advanced scroll animations, complex SVG patterns, and a custom cursor following system to create a truly immersive experience.',
      github: 'https://github.com/Dev-fluxforge/fluxforgev1.git',
      status: 'In Progress',
      features: [
        'Zoneless Angular Architecture for peak performance',
        'Advanced Tailwind CSS 4+ styling system',
        'Custom interactive background grid and ORB effects',
        'Responsive layout optimized for all screen sizes',
        'Dynamic SEO and meta-tag management'
      ],
      screenshots: [
        'https://picsum.photos/seed/p1-1/1200/800',
        'https://picsum.photos/seed/p1-2/1200/800'
      ]
    },
    {
      id: 'P-002',
      title: 'Luxury Photography & Videography MVP',
      category: 'Client',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'The primary challenge was balancing high-resolution asset loading with site performance to maintain a luxury, editorial aesthetic.',
      fullDescription: 'For this MVP, we focused on "The Art of Presentation". High-end photography requires high-resolution assets, which typically slow down websites. We engineered a proprietary lazy-loading sequence that prioritizes visual impact without sacrificing speed. The UI is minimal and editorial, allowing the photography to be the primary focus. We also integrated a smooth parallax scroll system that gives depth to the static image galleries.',
      github: 'https://github.com/Dev-fluxforge/waheeda.git',
      demo: 'https://classybeauty.vercel.app/',
      features: [
        'High-resolution asset optimization',
        'Editorial-inspired layout and typography',
        'Smooth parallax scroll galleries',
        'Mobile-optimized viewing experience',
        'Integrated inquiry and contact system'
      ],
      screenshots: [
        'https://picsum.photos/seed/p2-1/1200/800',
        'https://picsum.photos/seed/p2-2/1200/800'
      ]
    },
    {
      id: 'P-003',
      title: 'Metallic Company Website',
      category: 'Business',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS'],
      description: 'Aimed at modernizing the online presence of a traditional industrial company without compromising its established professional tone.',
      fullDescription: 'The Metallic project was about digital transformation for a heavy industry client. We took a traditional business model and gave it a modern, efficient digital presence. The core feature is a dynamic product catalog that allows users to find technical specifications quickly. We used Angular signals for state management, ensuring that the UI remains reactive and fast even when browsing thousands of product variations.',
      github: 'https://github.com/Dev-fluxforge/metallicv2.git',
      demo: 'https://metallicv2.vercel.app',
      features: [
        'Advanced product catalog with dynamic filtering',
        'Technical data visualization modules',
        'Lead generation forms integrated with CRM',
        'Optimized for industrial-sector SEO',
        'Responsive design for on-site field access'
      ],
      screenshots: [
        'https://picsum.photos/seed/p3-1/1200/800',
        'https://picsum.photos/seed/p3-2/1200/800'
      ]
    },
    {
      id: 'P-004',
      title: 'CodSoft Calculator App',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      description: 'Focused on handling complex mathematical operations and edge cases like division by zero while maintaining a clean user interface.',
      github: 'https://github.com/Dev-fluxforge/codesofttask2.git',
      demo: 'https://dev-fluxforge.github.io/codesofttask2/'
    },
    {
      id: 'P-005',
      title: 'CodSoft Landing Page',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'The goal was achieving exceptional performance and SEO scores for a content-rich landing page under strict development timelines.',
      github: 'https://github.com/Dev-fluxforge/codesoft-landing.git',
      demo: 'https://dev-fluxforge.github.io/codesoft-landing/'
    },
    {
      id: 'P-006',
      title: 'Personal Developer Portfolio',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'Designed to create a unique personal brand that stands out while showcasing a diverse range of technical skills and projects.',
      github: 'https://github.com/Dev-fluxforge/NEW-ME',
      demo: 'https://dev-fluxforge.github.io/NEW-ME/#resume'
    },
    {
      id: 'P-007',
      title: 'Alaran Geo-Services Website',
      category: 'Client',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Vercel'],
      description: 'This project involved integrating multiple service categories into a cohesive multi-page platform for a geo-services firm.',
      github: 'https://github.com/Dev-fluxforge/alaran.git',
      demo: 'https://agsl.vercel.app'
    },
    {
      id: 'P-008',
      title: 'BARHF Digital Campaign System',
      category: 'Non-Profit',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'Vercel'],
      description: 'Creating a system to reach a large, diverse youth audience weekly with high-impact digital graphics and campaign updates.',
      github: 'https://github.com/Dev-fluxforge/barhf-website.git',
      status: 'In Progress'
    },
    {
      id: 'P-009',
      title: 'DERVAC SIWES Projects Dashboard',
      category: 'Training',
      tech: ['HTML5', 'CSS3', 'JS', 'TypeScript', 'Angular', 'Tailwind', 'Vercel'],
      description: 'Organizing and presenting a large volume of disparate web projects accumulated during a 6-month intensive training program.',
      github: 'https://github.com/Dev-fluxforge/dervacspace.git',
      demo: 'https://dervacspace.vercel.app/'
    },
    {
      id: 'P-010',
      title: 'Islamic Heritage Interactive Timeline',
      category: 'Personal',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git', 'HTML'],
      description: 'The challenge was transforming complex historical and literary data into an engaging and accessible educational experience.',
      github: 'https://github.com/TunarshBee/DawahPivot.git',
      demo: 'https://dawah-pivot.vercel.app'
    }
  ]);

  getProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    return this.projects().find(p => p.id === id);
  }
}
