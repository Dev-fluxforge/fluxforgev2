import {ChangeDetectionStrategy, Component, inject, signal, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {ProjectService, Project} from '../../services/project';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-6 py-24 space-y-16">
      @if (project()) {
        <div class="flex flex-col gap-12">
          <!-- Back Button -->
          <a routerLink="/projects" class="flex items-center gap-2 text-sage hover:text-primary transition-colors group w-fit">
            <mat-icon class="transition-transform group-hover:-translate-x-1">arrow_back</mat-icon>
            <span class="font-mono text-xs uppercase tracking-widest">Back to Projects</span>
          </a>

          <!-- Header -->
          <div class="space-y-6">
            <div class="flex flex-wrap items-center gap-4">
              <span class="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                {{ project()?.category }}
              </span>
            </div>
            <h1 class="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
              {{ project()?.title }}
            </h1>
            <p class="text-sage text-lg md:text-xl max-w-3xl leading-relaxed">
              {{ project()?.description }}
            </p>
          </div>

          <!-- Main Image / Video -->
          <div class="relative aspect-video rounded-3xl overflow-hidden border border-border-forest bg-surface/50 group">
            @if (project()?.videoUrl) {
              <iframe 
                [src]="project()?.videoUrl" 
                class="w-full h-full" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            } @else if (project()?.screenshots?.length) {
              <img 
                [src]="project()?.screenshots?.[0]" 
                [alt]="project()?.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerpolicy="no-referrer"
              >
            } @else {
              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-void">
                <mat-icon class="!w-24 !h-24 !text-[96px] text-border-forest/30">dvr</mat-icon>
              </div>
            }
          </div>

          <!-- Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <!-- Details -->
            <div class="lg:col-span-2 space-y-12">
              <section class="space-y-6">
                <h2 class="text-2xl font-display font-bold text-white flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <mat-icon>description</mat-icon>
                  </div>
                  Project Overview
                </h2>
                <div class="prose prose-invert max-w-none text-sage leading-loose">
                  <p class="text-lg">
                    {{ project()?.fullDescription || project()?.description }}
                  </p>
                </div>
              </section>

              @if (project()?.features?.length) {
                <section class="space-y-6">
                  <h2 class="text-2xl font-display font-bold text-white flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <mat-icon>task_alt</mat-icon>
                    </div>
                    Key Features
                  </h2>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    @for (feature of project()?.features; track feature) {
                      <li class="flex items-start gap-3 p-4 bg-surface/50 border border-border-forest rounded-xl">
                        <mat-icon class="text-primary mt-0.5">check_circle</mat-icon>
                        <span class="text-sage text-sm">{{ feature }}</span>
                      </li>
                    }
                  </ul>
                </section>
              }

              @if (project()?.screenshots && project()!.screenshots!.length > 1) {
                <section class="space-y-6">
                  <h2 class="text-2xl font-display font-bold text-white flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <mat-icon>auto_awesome_motion</mat-icon>
                    </div>
                    Visual Journey
                  </h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    @for (shot of project()?.screenshots?.slice(1); track shot) {
                      <div class="aspect-video rounded-2xl overflow-hidden border border-border-forest bg-surface group hover:border-primary transition-all duration-300">
                        <img [src]="shot" class="w-full h-full object-cover transition-transform group-hover:scale-110" [alt]="project()?.title" referrerpolicy="no-referrer">
                      </div>
                    }
                  </div>
                </section>
              }
            </div>

            <!-- Sidebar -->
            <div class="space-y-8">
              <!-- Project Status -->
              @if (project()?.status) {
                <div class="p-8 bg-surface border border-border-forest rounded-3xl space-y-6">
                  <h3 class="text-sm font-mono uppercase tracking-[0.2em] text-white flex items-center gap-2">
                    <mat-icon class="!text-sm">info</mat-icon>
                    Status
                  </h3>
                  <div class="flex items-center gap-3 p-4 rounded-2xl bg-void/50 border border-border-forest">
                    <div class="w-3 h-3 rounded-full animate-pulse" 
                         [class.bg-accent]="project()?.status === 'In Progress'"
                         [class.bg-primary]="project()?.status === 'Completed' || !project()?.status?.includes('Progress')"></div>
                    <span class="text-sm font-bold tracking-wide"
                          [class.text-accent]="project()?.status === 'In Progress'"
                          [class.text-primary]="project()?.status === 'Completed' || !project()?.status?.includes('Progress')">
                      {{ project()?.status }}
                    </span>
                  </div>
                </div>
              }

              <!-- Tech Stack -->
              <div class="p-8 bg-surface border border-border-forest rounded-3xl space-y-6">
                <h3 class="text-sm font-mono uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  <mat-icon class="!text-sm">code</mat-icon>
                  Technologies
                </h3>
                <div class="grid grid-cols-4 gap-3">
                  @for (t of project()?.tech; track t) {
                    <div class="group relative flex flex-col items-center gap-2 p-3 rounded-xl bg-void/50 border border-border-forest hover:border-primary transition-all cursor-help"
                         [title]="t">
                      <div class="w-8 h-8 flex items-center justify-center">
                        <img [src]="getTechIcon(t)" 
                             class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" 
                             [alt]="t"
                             (error)="$any($event.target).style.display = 'none'">
                        <!-- Fallback for icons not found -->
                        <span class="text-[10px] font-mono font-bold text-sage group-hover:text-primary transition-colors tech-fallback">
                          {{ t.slice(0, 2).toUpperCase() }}
                        </span>
                      </div>
                    </div>
                  }
                </div>
              </div>

              <!-- Links -->
              <div class="p-8 bg-surface border border-border-forest rounded-3xl space-y-6">
                <h3 class="text-sm font-mono uppercase tracking-[0.2em] text-white">Links</h3>
                <div class="flex flex-col gap-4">
                  <a [href]="project()?.github" target="_blank" class="w-full py-4 bg-primary text-void rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-accent transition-all group">
                    <div class="w-5 h-5 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-full h-full brightness-0" alt="GitHub">
                    </div>
                    View Repository
                  </a>
                  @if (project()?.demo) {
                    <a [href]="project()?.demo" target="_blank" class="w-full py-4 border border-border-forest text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-all">
                      <mat-icon>open_in_new</mat-icon>
                      Launch Live App
                    </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      } @else {
        <div class="py-40 text-center space-y-8">
          <mat-icon class="!w-24 !h-24 !text-[96px] text-border-forest">error_outline</mat-icon>
          <div class="space-y-2">
            <h2 class="text-4xl font-display font-bold text-white">Project Not Found</h2>
            <p class="text-sage">The project you are looking for doesn't exist or has been removed.</p>
          </div>
          <a routerLink="/projects" class="inline-flex py-4 px-8 bg-primary text-void rounded-xl font-bold hover:bg-accent transition-all">
            Return to Portfolio
          </a>
        </div>
      }
    </div>
  `,
  host: {
    'class': 'block bg-void min-h-screen'
  },
  styles: [`
    img:not([style*="display: none"]) + .tech-fallback {
      display: none;
    }
  `]
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);
  
  project = signal<Project | undefined>(undefined);

  getTechIcon(tech: string): string {
    const map: Record<string, string> = {
      'Angular': 'angular/angular-original.svg',
      'TypeScript': 'typescript/typescript-original.svg',
      'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
      'Tailwind': 'tailwindcss/tailwindcss-original.svg',
      'HTML5': 'html5/html5-original.svg',
      'HTML': 'html5/html5-original.svg',
      'CSS3': 'css3/css3-original.svg',
      'JavaScript': 'javascript/javascript-original.svg',
      'JS': 'javascript/javascript-original.svg',
      'Git': 'git/git-original.svg',
      'Node.js': 'nodejs/nodejs-original.svg',
      'Firebase': 'firebase/firebase-plain.svg',
      'Vercel': 'vercel/vercel-original.svg'
    };
    const key = tech;
    const path = map[key] || `${key.toLowerCase()}/${key.toLowerCase()}-original.svg`;
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.project.set(this.projectService.getProjectById(id));
      }
    });
  }
}
