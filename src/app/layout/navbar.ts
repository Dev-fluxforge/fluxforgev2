import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 h-16 bg-surface/80 backdrop-blur-xl border-b border-border-forest transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-1 group">
          <span class="font-display text-2xl font-bold text-white tracking-tight">Flux</span>
          <span class="font-display text-2xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors">Forge</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          @for (link of navLinks; track link.path) {
            <a 
              [routerLink]="link.path"
              routerLinkActive="bg-primary/10 text-primary"
              [routerLinkActiveOptions]="{exact: link.path === '/'}"
              class="px-4 py-2 text-sm font-medium text-pale-mint/80 hover:text-accent rounded-lg transition-all"
            >
              {{ link.label }}
            </a>
          }
        </div>

        <!-- Right Action -->
        <div class="flex items-center gap-4">
          <a routerLink="/contact" class="hidden md:block bg-primary hover:bg-accent text-void px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105 glow-primary">
            Hire Us
          </a>
          
          <!-- Mobile Menu Toggle -->
          <button 
            (click)="toggleMenu()"
            class="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            <mat-icon>{{ isMenuOpen() ? 'close' : 'menu' }}</mat-icon>
          </button>
        </div>
      </div>

      <!-- Mobile Nav -->
      @if (isMenuOpen()) {
        <div 
          class="absolute top-16 left-0 right-0 bg-surface border-b border-border-forest md:hidden animate-in slide-in-from-top duration-300"
        >
          <div class="flex flex-col p-6 gap-2">
            @for (link of navLinks; track link.path) {
              <a 
                [routerLink]="link.path"
                (click)="isMenuOpen.set(false)"
                routerLinkActive="bg-primary/10 text-primary border-l-4 border-primary pl-4"
                [routerLinkActiveOptions]="{exact: link.path === '/'}"
                class="px-4 py-3 text-lg font-medium text-pale-mint hover:text-accent hover:bg-primary/5 rounded-lg transition-all"
              >
                {{ link.label }}
              </a>
            }
            <a routerLink="/contact" (click)="isMenuOpen.set(false)" class="mt-4 bg-primary text-void text-center py-4 rounded-xl font-bold text-lg glow-primary">
              Hire Us
            </a>
          </div>
        </div>
      }
    </nav>
  `
})
export class Navbar {
  isMenuOpen = signal(false);

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }
}
