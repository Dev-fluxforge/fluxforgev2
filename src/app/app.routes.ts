import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    data: {
      title: 'Home',
      description: 'Expert Digital Solutions for the Modern Web. We forge high-performance interfaces that matter.',
      keywords: 'FluxForge, Home, Web Design, Angular Expert, Adeniyi Badmus'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
    data: {
      title: 'About',
      description: 'The Engineer behind the code. Learn more about Adeniyi Badmus and the FluxForge vision.',
      keywords: 'Adeniyi Badmus, Biography, Web Engineer, Saki, Nigeria'
    }
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then(m => m.Skills),
    data: {
      title: 'Skills',
      description: 'A technical toolkit focused on performance and design. Masteries in Angular, TypeScript, and more.',
      keywords: 'Technical Skills, Angular Mastery, CSS Architecture, JavaScript, DevOps'
    }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
    data: {
      title: 'Projects',
      description: 'A curated showcase of precision-engineered web applications and digital products.',
      keywords: 'Portfolio, Case Studies, Angular Projects, Web Apps, UI/UX'
    }
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/projects/project-detail').then(m => m.ProjectDetail),
    data: {
      title: 'Project Detail',
      description: 'Deep dive into FluxForge project results and technical architecture.',
      keywords: 'Project Detail, Technical Architecture, Case Study'
    }
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience').then(m => m.Experience),
    data: {
      title: 'Experience',
      description: 'Professional journey and milestones. Lead Developer at FluxForge and industry contributions.',
      keywords: 'Work Experience, Career, Lead Developer, FluxForge, Internship'
    }
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then(m => m.ResumePage),
    data: {
      title: 'Resume',
      description: 'Detailed professional resume of Adeniyi Badmus, Lead Developer & Founder.',
      keywords: 'Resume, CV, Adeniyi Badmus Resume'
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
    data: {
      title: 'Contact',
      description: 'Get in touch for specialized development or consulting. Let’s forge something great together.',
      keywords: 'Contact, Hire Web Developer, Project Inquiry'
    }
  },
  {
    path: '**',
    redirectTo: '',
  },
];
