import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {SectionHeader} from '../../components/section-header';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, MatIconModule, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <app-section-header 
        eyebrow="SKILLS & STACK"
        title="Our technology stack."
        subtitle="Built on proven tools. Driven by modern standards."
        align="center"
      ></app-section-header>

      <!-- Skill Groups -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (group of skillGroups; track group.title) {
          <div class="bg-surface border border-border-forest rounded-2xl p-8 space-y-8 group hover:border-primary/50 transition-all duration-500">
            <div class="space-y-2">
              <span class="font-mono text-[10px] text-primary tracking-widest uppercase">{{ group.label }}</span>
              <h3 class="text-2xl font-display font-bold text-white">{{ group.title }}</h3>
            </div>

            <div class="grid grid-cols-3 gap-4">
              @for (skill of group.skills; track skill.name) {
                <div class="group/skill flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 relative">
                  <div class="w-12 h-12 rounded-lg bg-surface-lighter flex items-center justify-center border border-border-forest group-hover/skill:border-primary/50 group-hover/skill:scale-110 transition-all">
                    <img 
                      [src]="getTechIcon(skill.name)" 
                      [alt]="skill.name"
                      class="w-8 h-8 brightness-90 group-hover/skill:brightness-110 transition-all"
                      onerror="this.style.display='none'"
                    >
                  </div>
                  <span class="text-[10px] font-mono text-sage uppercase tracking-tighter text-center group-hover/skill:text-primary transition-colors">
                    {{ skill.name }}
                  </span>
                  
                  <!-- Percentage Tooltip -->
                  <div class="absolute -top-2 right-2 bg-primary/20 border border-primary/20 text-primary text-[8px] font-mono px-1.5 py-0.5 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity">
                    {{ skill.percent }}%
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>

      <!-- Office & Competencies -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-12 border-t border-border-forest">
        <!-- Competencies -->
        <div class="space-y-8">
          <h3 class="text-3xl font-display font-bold text-white">Core Competencies</h3>
          <div class="flex flex-wrap gap-4">
            @for (tag of competencies; track tag) {
              <span class="px-5 py-2.5 bg-primary/5 border border-primary/20 text-primary rounded-lg font-mono text-xs hover:bg-primary hover:text-void transition-all cursor-default">
                {{ tag }}
              </span>
            }
          </div>
        </div>

        <!-- Office Tools -->
        <div class="space-y-8">
          <h3 class="text-3xl font-display font-bold text-white">Office Proficiency</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            @for (tool of officeTools; track tool.name) {
              <div class="p-6 bg-surface border border-border-forest rounded-xl text-center group hover:border-accent transition-all">
                <mat-icon class="!text-accent mb-4 scale-125">{{ tool.icon }}</mat-icon>
                <div class="text-white font-bold">{{ tool.name }}</div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class Skills {
  skillGroups = [
    {
      label: 'GROUP 1',
      title: 'Core Languages',
      skills: [
        { name: 'HTML5', percent: 97 },
        { name: 'CSS3', percent: 95 },
        { name: 'JavaScript', percent: 88 },
        { name: 'TypeScript', percent: 80 },
        { name: 'PHP', percent: 55 },
        { name: 'MySQL', percent: 50 },
      ]
    },
    {
      label: 'GROUP 2',
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Angular', percent: 85 },
        { name: 'Tailwind CSS', percent: 90 },
        { name: 'Bootstrap', percent: 78 },
        { name: 'Git', percent: 82 },
        { name: 'GitHub', percent: 85 },
        { name: 'Vercel', percent: 88 },
      ]
    },
    {
      label: 'GROUP 3',
      title: 'Design Tools',
      skills: [
        { name: 'Photoshop', percent: 92 },
        { name: 'Illustrator', percent: 85 },
        { name: 'Canva', percent: 95 },
        { name: 'Figma', percent: 65 },
        { name: 'Node.js', percent: 45 },
        { name: 'Firebase', percent: 40 },
      ]
    }
  ];

  getTechIcon(tech: string): string {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
    const maps: Record<string, string> = {
      'Angular': 'angularjs/angularjs-original.svg',
      'TypeScript': 'typescript/typescript-original.svg',
      'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
      'Tailwind': 'tailwindcss/tailwindcss-original.svg',
      'Vercel': 'vercel/vercel-original.svg',
      'HTML5': 'html5/html5-original.svg',
      'HTML': 'html5/html5-original.svg',
      'CSS3': 'css3/css3-original.svg',
      'JavaScript': 'javascript/javascript-original.svg',
      'JS': 'javascript/javascript-original.svg',
      'Git': 'git/git-original.svg',
      'GitHub': 'github/github-original.svg',
      'PHP': 'php/php-original.svg',
      'Node.js': 'nodejs/nodejs-original.svg',
      'Firebase': 'firebase/firebase-plain.svg',
      'MySQL': 'mysql/mysql-original.svg',
      'Bootstrap': 'bootstrap/bootstrap-original.svg',
      'Photoshop': 'photoshop/photoshop-plain.svg',
      'Illustrator': 'illustrator/illustrator-plain.svg',
      'Figma': 'figma/figma-original.svg',
      'Canva': 'canva/canva-original.svg'
    };
    
    const normalized = tech.trim();
    const iconPath = maps[normalized] || 'javascript/javascript-original.svg';
    return `${baseUrl}${iconPath}`;
  }

  competencies = [
    'Responsive Web Design',
    'Full-Stack Web Apps',
    'UI/UX Implementation',
    'Brand Identity Design',
    'Client Communication',
    'Agile Collaboration',
    'Mobile-First Development'
  ];

  officeTools = [
    { name: 'MS Word', icon: 'description' },
    { name: 'MS Excel', icon: 'table_chart' },
    { name: 'MS PowerPoint', icon: 'article' },
  ];
}
