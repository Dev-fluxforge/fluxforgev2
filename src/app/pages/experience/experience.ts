import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {SectionHeader} from '../../components/section-header';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, MatIconModule, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-6 py-24 space-y-32">
      <!-- Work Experience -->
      <section class="space-y-16">
        <app-section-header 
          eyebrow="EXPERIENCE"
          title="Built through doing, not just learning."
          subtitle="A timeline of professional growth, technical leadership, and community impact."
        ></app-section-header>

        <div class="relative max-w-4xl">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-accent to-sage opacity-30 md:-translate-x-px"></div>

          <!-- Experience Items -->
          <div class="space-y-16">
            @for (item of experiences; track item.id; let i = $index) {
              <div class="relative flex flex-col md:flex-row gap-8 md:gap-0" [ngClass]="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-left md:text-right'">
                <!-- Dot -->
                <div class="absolute left-[-7px] md:left-1/2 top-2 w-3.5 h-3.5 rounded-full bg-void border-2 border-primary z-10 md:-translate-x-[7px]"></div>

                <!-- Spacer for layout -->
                <div class="hidden md:block w-1/2"></div>
                
                <!-- Content Card -->
                <div class="w-full md:w-1/2 px-8 group">
                  <div class="bg-surface border border-border-forest p-8 rounded-2xl transition-all duration-300 hover:border-primary hover:-translate-y-1">
                    <span class="font-mono text-[10px] text-primary tracking-widest uppercase mb-2 block">{{ item.date }}</span>
                    <h3 class="text-xl font-display font-bold text-white mb-1">{{ item.role }}</h3>
                    <p class="text-sage text-sm font-medium mb-6">{{ item.company }} · <span class="italic text-sage/60">{{ item.location }}</span></p>
                    
                    <ul class="space-y-3" [ngClass]="i % 2 === 0 ? '' : 'md:items-end flex flex-col'">
                      @for (point of item.points; track point) {
                        <li class="flex items-start gap-3 text-sm text-pale-mint/70 leading-relaxed">
                          <span class="text-primary mt-1 select-none">→</span>
                          {{ point }}
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="space-y-16">
        <app-section-header eyebrow="ACADEMIC BACKGROUND" title="Education & Training"></app-section-header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (edu of education; track edu.title) {
            <div class="p-8 bg-surface border border-border-forest rounded-2xl group hover:border-accent transition-all">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <span class="px-3 py-1 bg-border-forest/50 text-sage text-[10px] font-mono rounded-full self-start">{{ edu.date }}</span>
                @if (edu.cert) {
                   <a [href]="edu.cert" target="_blank" class="text-primary text-xs flex items-center gap-1 hover:underline">
                     View Certificate <mat-icon class="!text-[14px]">open_in_new</mat-icon>
                   </a>
                }
              </div>
              <h4 class="text-xl font-display font-bold text-white mb-1">{{ edu.title }}</h4>
              <p class="text-sage text-sm">{{ edu.org }}</p>
            </div>
          }
        </div>
      </section>

      <!-- Certifications -->
      <section class="space-y-12">
        <h3 class="text-3xl font-display font-bold text-white">Select Certifications</h3>
        <div class="flex flex-wrap gap-4">
          @for (c of certs; track c) {
            <div class="px-6 py-4 bg-void border border-border-forest rounded-xl flex items-center gap-4 group hover:border-primary transition-all">
              <mat-icon class="text-primary">workspace_premium</mat-icon>
              <span class="text-pale-mint text-sm">{{ c }}</span>
            </div>
          }
        </div>
      </section>
    </div>
  `
})
export class Experience {
  experiences = [
    {
      id: 1,
      date: 'Aug 2025 – Dec 2025',
      role: 'SIWES Industrial Trainee',
      company: 'Dervac HUB',
      location: 'Lagos',
      points: [
        '6-month hands-on training in IT operations, digital innovation, and technical support.',
        'Built and deployed Angular + Tailwind projects under professional supervision.',
        'Developed internal tools and dashboards for streamlined resource management.'
      ]
    },
    {
      id: 2,
      date: 'Jan 2025 – Feb 2025',
      role: 'Software Engineering Intern',
      company: 'CodSoft',
      location: 'Remote, India',
      points: [
        'Completed 3 production-ready web projects within tight 2-month timeline.',
        'Achieved 95%+ Lighthouse performance scores on responsive landing pages.',
        'Mastered responsive development across all major browser engines.'
      ]
    },
    {
      id: 3,
      date: 'May 2022 – Apr 2025',
      role: 'Graphic Designer',
      company: 'Okitech Cybercafe',
      location: 'Saki, Oyo',
      points: [
        'Managed 40+ client projects monthly with 98% satisfaction rate.',
        'Reduced project turnaround time by 25% through workflow improvements.',
        'Mentored junior designers in industry-standard design software.'
      ]
    },
    {
      id: 4,
      date: 'Sep 2023 – Present',
      role: 'Lead Graphic Designer',
      company: 'BARHF Foundation',
      location: 'Volunteer',
      points: [
        'Visual content reaching 5,000+ youth weekly via social media platforms.',
        'Creative direction for annual December Seminar with 500+ attendees.',
        'Contributed 15+ volunteer hours monthly to youth empowerment mission.'
      ]
    }
  ];

  education = [
    {
      date: 'Dec 2023 – Apr 2028',
      title: 'B.Tech Computer Science',
      org: 'LAUTECH, Ogbomosho · Matric: 2023003609',
    },
    {
      date: 'Aug 2024 – Present',
      title: 'Professional Diploma, Front-End SE',
      org: 'SQI College of ICT',
    },
    {
      date: 'Jan 2025 – Feb 2025',
      title: 'Internship Certificate',
      org: 'CodSoft Internship Program',
      cert: '#'
    },
    {
      date: 'May 2023 – Jul 2023',
      title: 'HTML Course Certificate',
      org: 'CODELIBER Academy',
      cert: '#'
    }
  ];

  certs = [
    'SIWES Letter of Completion — Dervac HUB (2025)',
    'CodSoft Internship Certificate (2025)',
    'Graphic Design Certification — Okitech (2022)',
    'Codeliber HTML Certificate (2023)',
    'MSSN Jihad Week Design Lead (2025)'
  ];
}
