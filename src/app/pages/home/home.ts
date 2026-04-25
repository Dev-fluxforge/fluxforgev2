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
    <div class="overflow-hidden bg-void">
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <!-- Main Grid -->
          <div class="absolute inset-0 opacity-[0.03]" 
               style="background-image: linear-gradient(#00A86B 1px, transparent 1px), linear-gradient(90deg, #00A86B 1px, transparent 1px); background-size: 60px 60px;">
          </div>
          <!-- Spotlight Orbs -->
          <div class="absolute -top-[10%] left-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse"></div>
          <div class="absolute top-[20%] right-[10%] w-[30%] h-[40%] bg-accent/5 blur-[100px] rounded-full animate-pulse" style="animation-delay: 2s"></div>
        </div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div class="flex flex-col lg:flex-row lg:items-center gap-16">
            <!-- Text Content -->
            <div class="flex-1 space-y-10">
              <div class="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary">
                <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span class="font-mono text-[10px] uppercase tracking-widest font-bold">Systems Architected for 2026</span>
              </div>
              
              <h1 class="text-4xl sm:text-7xl md:text-8xl lg:text-[100px] font-display font-bold text-white leading-none sm:leading-[0.85] tracking-tighter">
                Forging<br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">Digital</span><br/>
                <span class="relative inline-flex items-center min-h-[3em] sm:min-h-[1.2em] overflow-hidden w-full">
                  <span class="relative text-white animate-text-slide whitespace-normal block w-full">
                    {{ rotatingText() }}
                  </span>
                </span>
              </h1>
            
              <p class="text-sage text-base md:text-xl max-w-xl leading-relaxed">
                We specialize in the surgical implementation of high-performance front-end architectures. 
                Precision-built applications for teams that refuse to compromise on quality.
              </p>
            
              <div class="flex flex-wrap items-center gap-8 pt-4">
                <a routerLink="/projects" class="group relative px-8 py-5 bg-primary text-void font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  <span class="relative z-10 flex items-center gap-2">
                    Explore Work
                    <mat-icon class="!text-[20px]">arrow_forward</mat-icon>
                  </span>
                </a>
                <a routerLink="/contact" class="font-mono text-sm uppercase tracking-widest text-sage hover:text-primary transition-colors flex items-center gap-4 group">
                  <span class="w-12 h-[1px] bg-border-forest group-hover:w-16 group-hover:bg-primary transition-all"></span>
                  Start a conversation
                </a>
              </div>
            </div>

            <!-- Abstract Visual Element -->
            <div class="relative hidden lg:flex flex-shrink-0 items-center justify-center w-[450px]">
              <div class="relative w-full aspect-square">
                <!-- Animated Rings -->
                <div class="absolute inset-0 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div class="absolute inset-12 border border-accent/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div class="absolute inset-24 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
                
                <!-- Floating Card -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 p-8 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:-translate-y-6 transition-transform duration-500 group">
                  <div class="flex items-center justify-between mb-10">
                    <div class="flex gap-1.5">
                      <div class="w-3 h-3 rounded-full bg-red-500/20"></div>
                      <div class="w-3 h-3 rounded-full bg-amber-500/20"></div>
                      <div class="w-3 h-3 rounded-full bg-primary/20"></div>
                    </div>
                    <mat-icon class="text-white/20">terminal</mat-icon>
                  </div>
                  <div class="space-y-4">
                    <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div class="h-full bg-primary/40 w-3/4 animate-[shimmer_2s_infinite]"></div>
                    </div>
                    <div class="h-2 w-5/6 bg-white/5 rounded-full"></div>
                    <div class="h-2 w-4/6 bg-white/5 rounded-full"></div>
                    
                    <div class="pt-8 flex items-center justify-between">
                      <span class="font-mono text-[10px] text-primary/60 uppercase group-hover:text-primary transition-colors">Architecture</span>
                      <span class="font-mono text-[10px] text-sage">1.0.42</span>
                    </div>
                  </div>
                  
                  <!-- Corner Decoration -->
                  <div class="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <button 
          class="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 group cursor-pointer border-none bg-transparent" 
          (click)="scrollToStats()"
          aria-label="Scroll to statistics section"
        >
          <span class="text-[10px] font-mono text-sage/40 uppercase tracking-[0.4em] rotate-90 mb-4 group-hover:text-primary transition-colors">Scroll</span>
          <div class="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent relative overflow-hidden">
            <div class="absolute inset-0 bg-primary h-1/2 animate-[scroll-hint_2s_ease-in-out_infinite]"></div>
          </div>
        </button>
      </section>

      <!-- Stats Strip -->
      <section id="stats" class="bg-surface border-y border-white/5 py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            @for (stat of stats; track stat.label; let i = $index) {
              <div class="relative lg:px-12 text-center lg:text-left group">
                <div class="text-4xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">{{ stat.value }}</div>
                <div class="text-[11px] font-mono text-primary uppercase tracking-0.2em opacity-60 group-hover:opacity-100 transition-opacity">{{ stat.label }}</div>
                @if (i < 3) {
                  <div class="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-white/10"></div>
                }
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-32 bg-void relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-6 relative z-10">
          <app-section-header 
            label="TESTIMONIALS" 
            title="What our clients say" 
            description="We build lasting partnerships with visionaries who demand the best."
          ></app-section-header>

          <div class="grid md:grid-cols-3 gap-8 mt-20">
            @for (testimonial of testimonials; track testimonial.name) {
              <div class="group p-8 bg-surface/50 border border-border-forest rounded-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                <!-- Quote Icon Decor -->
                <mat-icon class="absolute -top-4 -right-4 !text-8xl text-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">format_quote</mat-icon>
                
                <div class="flex gap-1 mb-6">
                  @for (star of [1,2,3,4,5]; track star) {
                    <mat-icon class="!text-sm text-accent">star</mat-icon>
                  }
                </div>

                <p class="text-sage text-lg leading-relaxed flex-grow italic mb-8">
                  "{{ testimonial.text }}"
                </p>

                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-void">
                    {{ testimonial.name[0] }}
                  </div>
                  <div>
                    <div class="text-white font-bold">{{ testimonial.name }}</div>
                    <div class="text-primary text-xs font-mono uppercase tracking-widest">{{ testimonial.role }}</div>
                  </div>
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
      0% { transform: translateY(60%); opacity: 0; }
      12% { transform: translateY(0); opacity: 1; }
      88% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-60%); opacity: 0; }
    }

    @keyframes scroll-hint {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(200%); }
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .animate-text-slide {
      animation: text-slide 4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    }

    .animate-gradient {
      animation: gradient 6s linear infinite;
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

  testimonials = [
    {
      name: 'Surv. Alaran Habeeb',
      role: 'CEO, Alaran Geo-Services',
      text: 'The web platform FluxForge built for our geological services has transformed how we present our technical data to clients. The precision and performance are unmatched.'
    },
    {
      name: 'ATIKU WAHEEDAH',
      role: 'Creative Director, Luxury Photography',
      text: 'Our Photography & Videography MVP needed to be visually stunning without sacrificing speed. FluxForge delivered a breathtaking experience that our clients love.'
    },
    {
      name: 'Dr. Ibrahim Yusuf',
      role: 'Project Supervisor, Dervac',
      text: 'The SIWES Project Dashboard has streamlined our student tracking and reporting. It is intuitive, fast, and exactly what we needed for our digital transformation.'
    }
  ];

  scrollToStats() {
    document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
  }

  constructor() {
    this.featuredProjects = this.projectService.getProjects()().filter(p => 
      ['P-002', 'P-003', 'P-009'].includes(p.id)
    );
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.phrases.length;
      this.rotatingText.set(this.phrases[this.index]);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
