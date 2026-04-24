import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {SectionHeader} from '../../components/section-header';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatIconModule, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <!-- Main Content -->
        <div class="lg:col-span-7 space-y-12">
          <app-section-header 
            eyebrow="ABOUT FLUXFORGE"
            title="Engineering with purpose. Designing with intent."
          ></app-section-header>
          
          <div class="space-y-8 text-pale-mint/80 text-lg leading-relaxed">
            <p>
              FluxForge is a front-end software engineering company founded by 
              <span class="text-white font-bold italic">Muhammad Adeniyi Badmus</span> 
              — a developer and designer from Saki, Oyo, Nigeria, studying Computer Science (B.Tech) 
              at Ladoke Akintola University of Technology (LAUTECH).
            </p>
            <p>
              From edtech platforms to luxury client websites, from corporate dashboards to non-profit digital campaigns 
              — FluxForge builds things that work, and things that last. We believe that technology is not the final goal; 
              it's the vehicle for transformation.
            </p>
          </div>

          <!-- Mission Quote -->
          <div class="relative bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
            <mat-icon class="absolute -top-4 -left-4 !w-12 !h-12 !text-[48px] text-primary/20">format_quote</mat-icon>
            <p class="font-display text-xl md:text-2xl text-white italic leading-relaxed relative z-10">
              "Technology is not the goal — transformation is. We build interfaces that serve real people, 
              solve real problems, and create lasting impact."
            </p>
          </div>

          <!-- Community section -->
          <div class="space-y-8 pt-12">
            <app-section-header eyebrow="COMMUNITY IMPACT" title="Beyond the screen."></app-section-header>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              @for (impact of communities; track impact.title) {
                <div class="p-6 bg-surface border border-border-forest rounded-xl group hover:border-primary transition-all">
                  <div class="text-accent font-mono text-[10px] uppercase tracking-widest mb-2">Role: {{ impact.role }}</div>
                  <h4 class="text-white font-display font-bold text-lg mb-3 flex items-center gap-2">
                    <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
                    {{ impact.title }}
                  </h4>
                  <p class="text-sage text-sm leading-relaxed">{{ impact.desc }}</p>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Sticky Sidebar Profile -->
        <div class="lg:col-span-5 relative">
          <div class="sticky top-28 space-y-8">
            <div class="bg-surface border border-border-forest rounded-2xl p-8 space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000">
              <!-- Avatar Area -->
              <div class="flex items-center gap-6">
                <div class="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-void font-display text-3xl font-bold">
                  MA
                </div>
                <div>
                  <h3 class="text-2xl font-display font-bold text-white mb-1">Muhammad A. Badmus</h3>
                  <p class="text-primary font-mono text-xs tracking-wider uppercase">Principal Engineer & Founder</p>
                </div>
              </div>

              <!-- Details -->
              <div class="space-y-4 pt-6 border-t border-border-forest">
                @for (detail of founderDetails; track detail.label) {
                  <div class="flex items-start gap-4 group">
                    <div class="w-8 h-8 rounded-lg bg-border-forest/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-void transition-all">
                      <mat-icon class="!text-[18px]">{{ detail.icon }}</mat-icon>
                    </div>
                    <div class="flex-1">
                      <p class="text-sage text-[10px] uppercase tracking-widest font-mono mb-1">{{ detail.label }}</p>
                      <p class="text-pale-mint text-sm">{{ detail.value }}</p>
                    </div>
                  </div>
                }
              </div>

              <div class="space-y-4 pt-4">
                <a routerLink="/resume" class="block w-full text-center border-1.5 border-primary text-primary py-3 rounded-xl text-sm font-bold hover:bg-primary hover:text-void transition-all flex items-center justify-center gap-2">
                  <mat-icon>description</mat-icon>
                  View / Print Resume
                </a>
                <a href="mailto:badmusa891@gmail.com" class="block w-full text-center border-2 border-primary text-primary py-4 rounded-xl font-bold hover:bg-primary hover:text-void transition-all">
                  Contact Founder
                </a>
              </div>
            </div>

            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-4">
              @for (metric of metrics; track metric.label) {
                <div class="bg-surface border-t-2 border-primary p-6 rounded-xl text-center">
                  <div class="text-2xl font-display font-bold text-accent mb-1">{{ metric.value }}</div>
                  <div class="text-[10px] text-sage tracking-widest uppercase font-mono">{{ metric.label }}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class About {
  founderDetails = [
    { icon: 'location_on', label: 'Location', value: 'Saki, Oyo, Nigeria' },
    { icon: 'school', label: 'Education', value: 'B.Tech Computer Science — LAUTECH' },
    { icon: 'verified', label: 'Professional', value: 'Diploma in Front-End SE — SQI' },
    { icon: 'language', label: 'Languages', value: 'English (Fluent) · Yoruba (Native)' },
    { icon: 'email', label: 'Email', value: 'badmusa891@gmail.com' },
  ];

  metrics = [
    { value: '10+', label: 'Live Projects' },
    { value: '5K+', label: 'Weekly Reach' },
    { value: '98%', label: 'Satisfaction' },
    { value: '6m', label: 'SIWES Training' },
  ];

  communities = [
    { role: 'Designer', title: 'BARHF Foundation', desc: 'Leads creative direction for digital campaigns reaching 5,000+ youth monthly.' },
    { role: 'Legislator', title: 'NAOOS Senate', desc: 'Senate President at LAUTECH Chapter, presiding over legislative proceedings.' },
    { role: 'Honourable', title: 'NUSS LAUTECH', desc: 'Representing Saki indigenous students and organizing academic support sessions.' },
    { role: 'Design Lead', title: 'MSSN LAUTECH', desc: 'Lead designer for major student outreach campaigns like Jihad Week.' },
  ];
}
