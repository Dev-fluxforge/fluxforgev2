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
      description: 'Developing a high-performance, visually striking digital identity for a new software engineering startup. I implemented a zoneless Angular architecture combined with Tailwind CSS for rapid styling and optimized rendering. This created a strong brand foundation that effectively showcases technical expertise and service offerings to potential clients.',
      github: 'https://github.com/Dev-fluxforge/fluxforgev1.git',
      status: 'In Progress'
    },
    {
      id: 'P-002',
      title: 'Luxury Photography & Videography MVP',
      category: 'Client',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'The primary challenge was balancing high-resolution asset loading with site performance to maintain a luxury, editorial aesthetic. I utilized lazy-loading techniques and optimized image formats to ensure smooth transitions and fast initial load times. This delivered a sophisticated MVP that successfully attracted high-end photography clients during initial market testing.',
      github: 'https://github.com/Dev-fluxforge/waheeda.git',
      demo: 'https://classybeauty.vercel.app/'
    },
    {
      id: 'P-003',
      title: 'Metallic Company Website',
      category: 'Business',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS'],
      description: 'Aimed at modernizing the online presence of a traditional industrial company without compromising its established professional tone. I built a robust corporate platform with clear information architecture and interactive service modules using Angular. This significantly improved user engagement and streamlined the inquiry process for the company\'s products.',
      github: 'https://github.com/Dev-fluxforge/metallicv2.git',
      demo: 'https://metallicv2.vercel.app'
    },
    {
      id: 'P-004',
      title: 'CodSoft Calculator App',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      description: 'Focused on handling complex mathematical operations and edge cases like division by zero while maintaining a clean user interface. I engineered a custom logic engine with robust error checking and a responsive design that works across all devices. This project demonstrated proficiency in core JavaScript and user-centric design during my internship.',
      github: 'https://github.com/Dev-fluxforge/codesofttask2.git',
      demo: 'https://dev-fluxforge.github.io/codesofttask2/'
    },
    {
      id: 'P-005',
      title: 'CodSoft Landing Page',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'The goal was achieving exceptional performance and SEO scores for a content-rich landing page under strict development timelines. I focused on semantic HTML, efficient asset management, and critical path CSS optimization to meet performance targets. The project attained a 95%+ Lighthouse score, validating best practices in modern web development.',
      github: 'https://github.com/Dev-fluxforge/codesoft-landing.git',
      demo: 'https://dev-fluxforge.github.io/codesoft-landing/'
    },
    {
      id: 'P-006',
      title: 'Personal Developer Portfolio',
      category: 'Internship',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
      description: 'Designed to create a unique personal brand that stands out while showcasing a diverse range of technical skills and projects. I adopted a mobile-first, dark-themed aesthetic with custom typography and subtle animations to enhance the overall narrative. It has successfully increased professional inquiries and provided a structured overview of my growth.',
      github: 'https://github.com/Dev-fluxforge/NEW-ME',
      demo: 'https://dev-fluxforge.github.io/NEW-ME/#resume'
    },
    {
      id: 'P-007',
      title: 'Alaran Geo-Services Website',
      category: 'Client',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Vercel'],
      description: 'This project involved integrating multiple service categories into a cohesive multi-page platform for a geo-services firm. I developed a scalable Angular architecture with a unified design system that reflects the professional identity of Alaran. It effectively expanded the company\'s digital reach and provided a reliable platform for technical services selection.',
      github: 'https://github.com/Dev-fluxforge/alaran.git',
      demo: 'https://agsl.vercel.app'
    },
    {
      id: 'P-008',
      title: 'BARHF Digital Campaign System',
      category: 'Non-Profit',
      tech: ['HTML5', 'CSS3', 'Tailwind CSS', 'Vercel'],
      description: 'Creating a system to reach a large, diverse youth audience weekly with high-impact digital graphics and campaign updates. I built a streamlined campaign system using Tailwind CSS for rapid prototyping and consistent branding across all digital touchpoints. This empowered the BARHF Foundation to reach over 5,000 active users weekly for awareness.',
      github: 'https://github.com/Dev-fluxforge/barhf-website.git',
      status: 'In Progress'
    },
    {
      id: 'P-009',
      title: 'DERVAC SIWES Projects Dashboard',
      category: 'Training',
      tech: ['HTML5', 'CSS3', 'JS', 'TypeScript', 'Angular', 'Tailwind', 'Vercel'],
      description: 'Organizing and presenting a large volume of disparate web projects accumulated during a 6-month intensive training program. I designed a centralized dashboard using Angular that allows for easy navigation and live demonstration of individual project modules. It serves as a comprehensive record of technical growth bridging training and real-world application.',
      github: 'https://github.com/Dev-fluxforge/dervacspace.git',
      demo: 'https://dervacspace.vercel.app/'
    },
    {
      id: 'P-010',
      title: 'Islamic Heritage Interactive Timeline',
      category: 'Personal',
      tech: ['Angular', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Git', 'HTML'],
      description: 'The challenge was transforming complex historical and literary data into an engaging and accessible educational experience. I developed an interactive timeline using Angular and Tailwind, focusing on clear typography and historical accuracy for scholarly content. This provided a unique digital exploration of Islamic scholarship for modern learners.',
      github: 'https://github.com/TunarshBee/DawahPivot.git',
      demo: 'https://dawah-pivot.vercel.app'
    }
  ]);

  getProjects() {
    return this.projects;
  }
}
