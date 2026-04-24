import {ChangeDetectionStrategy, Component, signal, OnDestroy, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {ProjectService, Project} from '../../services/project';
import {SectionHeader} from '../../components/section-header';
import {ProjectCard} from '../../components/project-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, MatIconModule, SectionHeader, ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative min-h-[calc(100vh-64px)] flex flex-col justify-center items-center px-6 py-20 text-center bg-[radial-gradient(circle_at_50%_0%,rgba(0,168,107,0.05)_0%,transparent_50%)]">
        <!-- Dot Grid Pattern -->
        <div class="absolute inset-0 z-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(circle, #00A86B 1px, transparent 1px); background-size: 40px 40px;"></div>
        
        <div class="relative z-10 max-w-5xl mx-auto space-y-10">
          <span class="font-mono text-xs md:text-sm tracking-[0.3em] text-accent uppercase block animate-in fade-in zoom-in duration-1000">
            FRONT-END SOFTWARE ENGINEERING
          </span>
          
          <h1 class="text-6xl md:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
            We build<br/>
            <span class="text-primary inline-block min-w-[320px] sm:min-w-[480px] lg:min-w-[580px] relative h-[1.1em] overflow-hidden">
              <span class="absolute inset-0 text-glow animate-text-slide">
                {{ rotatingText() }}
              </span>
            </span>
          </h1>
          
          <p class="text-pale-mint/80 text-base md:text-lg max-w-[580px] mx-auto leading-[1.7] font-medium">
            FluxForge is a front-end engineering company crafting precision-built, 
            user-centered web applications with Angular, TypeScript, and a designer's eye for detail.
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <a routerLink="/projects" class="w-full sm:w-auto bg-primary text-void px-10 py-5 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:bg-accent glow-primary">
              View Our Work
            </a>
            <a routerLink="/contact" class="w-full sm:w-auto border-1.5 border-primary text-primary px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-primary/10">
              Get in Touch
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-0 pt-24 mt-24">
            @for (stat of stats; track stat.label; let i = $index) {
              <div class="px-8 py-6 text-center group border-border-forest" [class.border-r]="i < 3 && i !== 1" [class.lg:border-r]="i < 3" [class.border-b]="i < 2" [class.lg:border-b-0]="true">
                <div class="text-3xl md:text-4xl font-display font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {{ stat.value }}
                </div>
                <div class="text-sage text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
                  {{ stat.label }}
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="max-w-7xl mx-auto px-6 py-24">
        <app-section-header 
          eyebrow="WHAT WE DO"
          title="Built to perform. Designed to impress."
          subtitle="We specialize in deep technical implementation of modern web interfaces."
          align="center"
        ></app-section-header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          @for (service of services; track service.title) {
            <div class="group h-full p-8 rounded-2xl bg-surface border border-border-forest border-t-4 border-t-primary hover:border-primary transition-all duration-300 hover:-translate-y-2">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <mat-icon class="text-accent">{{ service.icon }}</mat-icon>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-4">{{ service.title }}</h3>
              <p class="text-pale-mint/70 text-sm leading-relaxed">{{ service.desc }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Featured Projects Strip -->
      <section class="max-w-7xl mx-auto px-6 py-24 border-t border-border-forest">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div class="space-y-4">
            <span class="font-mono text-xs tracking-[0.3em] text-accent uppercase block">RECENT WORK</span>
            <h2 class="text-3xl md:text-5xl font-display font-bold text-white">Featured Case Studies</h2>
          </div>
          <a routerLink="/projects" class="group flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
            See All Projects
            <mat-icon class="transition-transform group-hover:translate-x-1">arrow_forward</mat-icon>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (project of featuredProjects; track project.id) {
            <app-project-card [project]="project"></app-project-card>
          }
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="relative bg-gradient-to-r from-surface to-void border-l-4 border-primary p-12 md:p-20 rounded-2xl overflow-hidden group">
          <!-- Decorative glow -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
          
          <div class="max-w-xl space-y-6">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
              Ready to build something remarkable?
            </h2>
            <p class="text-pale-mint/80 text-lg">Let's talk about your project and how we can bring your ideas to life.</p>
            <a routerLink="/contact" class="inline-flex items-center gap-2 bg-primary text-void px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-accent glow-primary group">
              Start a Project
              <mat-icon class="transition-transform group-hover:translate-x-1">arrow_forward</mat-icon>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    @keyframes text-slide {
      0%, 20% { transform: translateY(0); opacity: 1; }
      25%, 45% { transform: translateY(-1.1em); opacity: 0; }
      50% { transform: translateY(1.1em); opacity: 0; }
      55%, 75% { transform: translateY(0); opacity: 1; }
      80%, 100% { transform: translateY(0); opacity: 1; }
    }
  `]
})
export class Home implements OnDestroy {
  private projectService = inject(ProjectService);
  rotatingText = signal('interfaces that matter.');
  private phrases = [
    'interfaces that matter.',
    'products that ship.',
    'experiences that stay.',
    'Angular apps that scale.',
    'ideas that become real.'
  ];
  private index = 0;
  private intervalId: ReturnType<typeof setInterval>;

  stats = [
    { value: '10+', label: 'Projects Shipped' },
    { value: '3+', label: 'Years Experience' },
    { value: '5K+', label: 'Weekly Users' },
    { value: '100%', label: 'Delivery Record' }
  ];

  services = [
    { icon: 'code', title: 'Front-End Engineering', desc: 'Angular SPAs, TypeScript, Tailwind CSS, and performance-first development for modern enterprises.' },
    { icon: 'view_quilt', title: 'UI/UX Implementation', desc: 'Mobile-first layouts and accessible interfaces that translate brand identity into functional code.' },
    { icon: 'architecture', title: 'Design Systems', desc: 'Consistent visual identities, graphic campaigns, and precise Figma-to-code components.' }
  ];

  featuredProjects: Project[] = [];

  constructor() {
    this.featuredProjects = this.projectService.getProjects()().filter(p => 
      ['P-002', 'P-003', 'P-009'].includes(p.id)
    );
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.phrases.length;
      this.rotatingText.set(this.phrases[this.index]);
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
