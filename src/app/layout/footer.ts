import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-surface border-t border-primary/20 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 mb-16">
          <!-- Brand -->
          <div class="space-y-6 col-span-2 lg:col-span-1">
            <a routerLink="/" class="flex items-center gap-1 group">
              <span class="font-display text-2xl font-bold text-white tracking-tight">Flux</span>
              <span class="font-display text-2xl font-bold text-primary tracking-tight">Forge</span>
            </a>
            <p class="text-sage leading-relaxed max-w-xs text-sm">
              Engineering with purpose. Designing with intent. We build interfaces that matter and experiences that stay.
            </p>
            <div class="flex items-center gap-3">
              @for (social of socialLinks; track social.icon) {
                <a 
                  [href]="social.url" 
                  target="_blank"
                  class="w-10 h-10 flex items-center justify-center rounded-lg bg-border-forest/50 border border-border-forest text-primary hover:border-primary hover:bg-primary/10 transition-all"
                  [attr.aria-label]="social.label"
                >
                  <mat-icon class="!text-[20px]">{{ social.icon }}</mat-icon>
                </a>
              }
            </div>
          </div>

          <!-- Quick Links -->
          <div class="space-y-6">
            <h4 class="text-white font-display font-bold text-lg">Navigation</h4>
            <div class="grid grid-cols-1 gap-4">
              @for (link of quickLinks; track link.path) {
                <a [routerLink]="link.path" class="text-sage hover:text-accent text-sm transition-colors">{{ link.label }}</a>
              }
            </div>
          </div>

          <!-- Services -->
          <div class="space-y-6">
            <h4 class="text-white font-display font-bold text-lg">Services</h4>
            <ul class="space-y-4 text-sage text-sm">
              <li>Front-End Engineering</li>
              <li>UI/UX Implementation</li>
              <li>Design Systems</li>
              <li>Figma to Code</li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="space-y-6 col-span-2 lg:col-span-1">
            <h4 class="text-white font-display font-bold text-lg">Get in Touch</h4>
            <ul class="space-y-4 text-sage text-sm">
              <li class="flex items-start gap-3">
                <mat-icon class="!text-primary !text-[18px] mt-0.5">email</mat-icon>
                <span class="break-all font-mono">badmusa891&#64;gmail.com</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="!text-primary !text-[18px] mt-0.5">call</mat-icon>
                <span>+234 813 749 6961</span>
              </li>
              <li class="flex items-start gap-3">
                <mat-icon class="!text-primary !text-[18px] mt-0.5">location_on</mat-icon>
                <span>Saki, Oyo, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom -->
        <div class="pt-8 border-t border-border-forest flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p class="text-sage text-xs order-2 sm:order-1">
            © 2026 FluxForge Software Engineering Company · All rights reserved.
          </p>
          <p class="text-sage text-[10px] tracking-widest uppercase flex items-center gap-2 order-1 sm:order-2">
            Built with 
            <span class="text-primary animate-pulse italic">Angular</span> 
            by FluxForge
          </p>
        </div>
      </div>
    </footer>
  `
})
export class Footer {
  socialLinks = [
    { label: 'GitHub', icon: 'code', url: 'https://github.com/Dev-fluxforge' },
    { label: 'LinkedIn', icon: 'person', url: 'https://linkedin.com/in/muhammad-adeniyi-badmus-125692288' },
    { label: 'Email', icon: 'email', url: 'mailto:badmusa891@gmail.com' },
  ];

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];
}
