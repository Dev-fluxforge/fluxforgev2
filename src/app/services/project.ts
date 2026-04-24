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
      description: 'Official website for FluxForge Software Engineering Company showcasing services, team, and portfolio.',
      github: 'https://github.com/Dev-fluxforge/fluxforgev1.git',
      status: 'In Progress'
    },
    {
      id: 'P-002',
      title: 'Luxury Photography & Videography MVP',
      category: 'Client',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'Full MVP website built for a photography/videography client with luxury editorial aesthetic.',
      github: 'https://github.com/Dev-fluxforge/waheeda.git',
      demo: 'https://classybeauty.vercel.app/'
    },
    {
      id: 'P-003',
      title: 'Metallic Company Website',
      category: 'Business',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS'],
      description: 'Fully functioning corporate website for a metallic company.',
      github: 'https://github.com/Dev-fluxforge/metallicv2.git',
      demo: 'https://metallicv2.vercel.app'
    },
    {
      id: 'P-004',
      title: 'CodSoft Calculator App',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      description: 'Functional calculator with complex math operations and error handling. Built during CodSoft internship.',
      github: 'https://github.com/Dev-fluxforge/codesofttask2.git',
      demo: 'https://dev-fluxforge.github.io/codesofttask2/'
    },
    {
      id: 'P-005',
      title: 'CodSoft Landing Page',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'Responsive landing page with 95%+ Lighthouse performance scores. Developed during CodSoft internship.',
      github: 'https://github.com/Dev-fluxforge/codesoft-landing.git',
      demo: 'https://dev-fluxforge.github.io/codesoft-landing/'
    },
    {
      id: 'P-006',
      title: 'Personal Developer Portfolio',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'Personal portfolio website with modern UI/UX principles and mobile-first approach.',
      github: 'https://github.com/Dev-fluxforge/NEW-ME',
      demo: 'https://dev-fluxforge.github.io/NEW-ME/#resume'
    },
    {
      id: 'P-007',
      title: 'Alaran Geo-Services Website',
      category: 'Client',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Vercel'],
      description: 'Multi-service corporate website for Alaran Geo-Services Limited with professional brand identity.',
      github: 'https://github.com/Dev-fluxforge/alaran.git',
      demo: 'https://agsl.vercel.app'
    },
    {
      id: 'P-008',
      title: 'BARHF Digital Campaign System',
      category: 'Non-Profit',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'Vercel'],
      description: 'Design system for BARHF Foundation — weekly graphics reaching 5,000+ youth users weekly.',
      github: 'https://github.com/Dev-fluxforge/barhf-website.git',
      status: 'In Progress'
    },
    {
      id: 'P-009',
      title: 'DERVAC SIWES Projects Dashboard',
      category: 'Training',
      tech: ['HTML5', 'CSS3', 'JS', 'TypeScript', 'Angular', 'Tailwind', 'Vercel'],
      description: 'Web projects from 6-month SIWES industrial training at Dervac HUB, Palmgroove, Lagos.',
      github: 'https://github.com/Dev-fluxforge/dervacspace.git',
      demo: 'https://dervacspace.vercel.app/'
    },
    {
      id: 'P-010',
      title: 'Islamic Heritage Interactive Timeline',
      category: 'Personal',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git', 'HTML'],
      description: 'Educational experience exploring Islamic scholarship and classical Arabic literary heritage.',
      github: 'https://github.com/TunarshBee/DawahPivot.git',
      demo: 'https://dawah-pivot.vercel.app'
    }
  ]);

  getProjects() {
    return this.projects;
  }
}
