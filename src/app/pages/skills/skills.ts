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
          <div class="bg-surface border border-border-forest rounded-2xl p-8 space-y-10 group hover:border-primary/50 transition-all duration-500">
            <div class="space-y-2">
              <span class="font-mono text-[10px] text-primary tracking-widest uppercase">{{ group.label }}</span>
              <h3 class="text-2xl font-display font-bold text-white">{{ group.title }}</h3>
            </div>

            <div class="space-y-8">
              @for (skill of group.skills; track skill.name) {
                <div class="space-y-3">
                  <div class="flex justify-between items-end">
                    <span class="text-pale-mint text-sm font-medium">{{ skill.name }}</span>
                    <span class="font-mono text-xs text-sage">{{ skill.percent }}%</span>
                  </div>
                  <!-- Progress Bar -->
                  <div class="h-1.5 w-full bg-border-forest rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-progress"
                      [style.width.%]="skill.percent"
                    ></div>
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
  styles: [`
    @keyframes progress-anim {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    .animate-progress {
      animation: progress-anim 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
  `]
})
export class Skills {
  skillGroups = [
    {
      label: 'GROUP 1',
      title: 'Core Languages',
      skills: [
        { name: 'HTML5 / CSS3', percent: 97 },
        { name: 'JavaScript', percent: 88 },
        { name: 'TypeScript', percent: 80 },
        { name: 'PHP', percent: 55 },
        { name: 'MySQL / Oracle', percent: 50 },
      ]
    },
    {
      label: 'GROUP 2',
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Angular', percent: 85 },
        { name: 'Tailwind CSS', percent: 90 },
        { name: 'Bootstrap', percent: 78 },
        { name: 'Git / GitHub', percent: 82 },
        { name: 'Vercel', percent: 88 },
      ]
    },
    {
      label: 'GROUP 3',
      title: 'Design Tools',
      skills: [
        { name: 'Adobe Photoshop', percent: 92 },
        { name: 'CorelDRAW', percent: 90 },
        { name: 'Canva', percent: 95 },
        { name: 'Figma', percent: 65 },
        { name: 'PixelLab', percent: 80 },
      ]
    }
  ];

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
