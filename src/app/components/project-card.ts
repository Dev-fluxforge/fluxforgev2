import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {Project} from '../services/project';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'flex flex-col h-full'
  },
  template: `
    <div class="group flex flex-col h-full bg-surface border border-border-forest rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_16px_48px_rgba(0,168,107,0.12)]">
      <!-- Thumbnail -->
      <div 
        class="h-44 relative flex-shrink-0 flex items-center justify-center overflow-hidden"
        [ngClass]="getGradient(project.category)"
      >
        <div class="font-display text-5xl font-bold text-white/20 select-none group-hover:scale-110 group-hover:text-white/40 transition-all duration-700">
          {{ project.id }}
        </div>
        
        <!-- Category Badge -->
        <span 
          class="absolute top-4 left-4 font-mono text-[9px] px-3 py-1 rounded-full uppercase tracking-widest font-bold shadow-lg"
          [ngClass]="getBadgeColor(project.category)"
        >
          {{ project.category }}
        </span>

        @if (project.status === 'In Progress') {
          <span class="absolute top-4 right-4 bg-void/80 backdrop-blur-md text-sage px-3 py-1 rounded-full text-[10px] font-bold border border-border-forest">
            In Progress
          </span>
        }
      </div>

      <!-- Content -->
      <div class="p-6 flex flex-col flex-grow space-y-4">
        <div class="space-y-4 flex-grow">
          <h3 class="text-xl font-display font-bold text-white group-hover:text-accent transition-colors min-h-[56px] line-clamp-2">
            {{ project.title }}
          </h3>
          <p class="text-sage text-sm leading-relaxed line-clamp-3">
            {{ project.description }}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-3 pt-2">
            @for (t of project.tech; track t) {
              <div class="group/tech relative flex items-center justify-center w-8 h-8 rounded-lg bg-void/30 border border-border-forest/50 hover:border-primary/50 transition-all duration-300" [title]="t">
                <img 
                  [src]="getTechIcon(t)" 
                  [alt]="t"
                  class="w-5 h-5 brightness-90 group-hover/tech:brightness-110 group-hover/tech:scale-110 transition-all"
                  onerror="this.style.display='none'"
                >
                <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-void/90 text-white text-[9px] font-mono rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-primary/20 z-20">
                  {{ t }}
                </span>
              </div>
            }
          </div>
        </div>

        <!-- Actions -->
        <div class="flex gap-4 pt-4 mt-auto">
          <a 
            [href]="project.github" 
            target="_blank" 
            class="flex-1 bg-primary hover:bg-accent text-void py-2.5 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
          >
            <mat-icon class="!text-[16px]">code</mat-icon>
            GitHub
          </a>
          @if (project.demo) {
            <a 
              [href]="project.demo" 
              target="_blank" 
              class="flex-1 border border-border-forest hover:border-primary hover:text-primary text-sage py-2.5 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-2"
            >
              <mat-icon class="!text-[16px]">visibility</mat-icon>
              Live Demo
            </a>
          } @else {
            <div class="flex-1 border border-border-forest/30 text-sage/30 py-2.5 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-2 cursor-not-allowed">
              <mat-icon class="!text-[16px]">visibility_off</mat-icon>
              No Demo
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ProjectCard {
  @Input() project!: Project;

  getGradient(category: string) {
    const maps: Record<string, string> = {
      'Company': 'bg-gradient-to-br from-[#002D62] to-[#1a4ab5]',
      'Client': 'bg-gradient-to-br from-[#3a1500] to-[#5a2a1a]',
      'Business': 'bg-gradient-to-br from-[#1a1a2e] to-[#2a2a4e]',
      'Internship': 'bg-gradient-to-br from-[#0c1a4a] to-[#1565a0]',
      'Non-Profit': 'bg-gradient-to-br from-[#2a0a25] to-[#4a1a6a]',
      'Training': 'bg-gradient-to-br from-[#002a2a] to-[#003d82]',
      'Personal': 'bg-gradient-to-br from-[#1a1030] to-[#2a1a50]'
    };
    return maps[category] || 'bg-surface';
  }

  getBadgeColor(category: string) {
    const maps: Record<string, string> = {
      'Company': 'bg-[#002D62] text-[#60A5FA]',
      'Client': 'bg-[#3a1500] text-[#FB923C]',
      'Business': 'bg-[#2a1f00] text-[#FBBF24]',
      'Internship': 'bg-[#0c1a4a] text-[#818CF8]',
      'Non-Profit': 'bg-[#2a0a25] text-[#F472B6]',
      'Training': 'bg-[#002a2a] text-[#22D3EE]',
      'Personal': 'bg-[#1a0a2a] text-[#C084FC]'
    };
    return maps[category] || 'bg-sage text-white';
  }

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
      'Firebase': 'firebase/firebase-plain.svg'
    };
    
    // Normalize string to match keys
    const normalized = tech.trim();
    const iconPath = maps[normalized] || 'javascript/javascript-original.svg';
    return `${baseUrl}${iconPath}`;
  }
}
