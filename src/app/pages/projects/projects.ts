import {ChangeDetectionStrategy, Component, signal, computed} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {SectionHeader} from '../../components/section-header';
import {ProjectCard} from '../../components/project-card';
import {ProjectService} from '../../services/project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, MatIconModule, SectionHeader, ProjectCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <app-section-header 
        eyebrow="PROJECT CATALOGUE"
        title="10 projects. Real code. Live demos."
        subtitle="Explore our curated selection of high-impact web applications across various sectors."
        align="center"
      ></app-section-header>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3">
        @for (category of categories; track category) {
          <button 
            (click)="activeFilter.set(category)"
            class="px-6 py-2.5 rounded-full font-mono text-xs uppercase tracking-widest transition-all border"
            [ngClass]="activeFilter() === category ? 'bg-primary border-primary text-void glow-primary' : 'bg-surface border-border-forest text-sage hover:border-primary hover:text-accent'"
          >
            {{ category }}
          </button>
        }
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of filteredProjects(); track project.id) {
          <app-project-card [project]="project" class="animate-in fade-in slide-in-from-bottom-8 duration-700"></app-project-card>
        }
      </div>

      <!-- Empty State -->
      @if (filteredProjects().length === 0) {
        <div class="py-20 text-center space-y-4">
          <mat-icon class="!w-16 !h-16 !text-[64px] text-border-forest">inventory_2</mat-icon>
          <p class="text-sage font-display text-xl">No projects found in this category.</p>
          <button (click)="activeFilter.set('All')" class="text-primary hover:underline">View all projects</button>
        </div>
      }
    </div>
  `
})
export class Projects {
  private projectService = new ProjectService(); // Injected via constructor normally but standalone signals context is fine here
  // Actually, I should use inject() or constructor. 
  // Let's use constructor.
  
  categories = ['All', 'Company', 'Client', 'Business', 'Internship', 'Non-Profit', 'Training', 'Personal'];
  activeFilter = signal('All');

  allProjects = this.projectService.getProjects();

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    const projects = this.allProjects();
    if (filter === 'All') return projects;
    return projects.filter(p => p.category === filter);
  });
}
