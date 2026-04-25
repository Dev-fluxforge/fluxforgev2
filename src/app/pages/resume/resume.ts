import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-resume-page',
  imports: [CommonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen bg-white text-slate-900 p-8 md:p-20 print:p-0 print:bg-white">
      <!-- Actions (Hidden on Print) -->
      <div class="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <button (click)="goBack()" class="text-slate-500 hover:text-slate-900 flex items-center gap-2">
          <mat-icon class="!text-base flex items-center justify-center !w-4 !h-4">arrow_back</mat-icon>
          <span class="leading-none">Back to Portfolio</span>
        </button>
        <a 
          href="https://docs.google.com/document/d/1MavfX3SyVgdmQwTbfl8TtL4GnCLGZDkJTYOVOK7a_uo/export?format=pdf" 
          target="_blank"
          class="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-indigo-700 transition-colors"
        >
          <mat-icon class="!text-base flex items-center justify-center !w-4 !h-4">download</mat-icon>
          <span class="leading-none">Download Live PDF</span>
        </a>
      </div>

      <!-- Resume Paper -->
      <article class="max-w-4xl mx-auto bg-white shadow-2xl p-12 md:p-16 border border-slate-100 print:shadow-none print:border-none print:p-0">
        <!-- Header -->
        <header class="border-b-2 border-indigo-600 pb-8 mb-10">
          <h1 class="text-4xl font-display font-black tracking-tight text-slate-900 mb-2 uppercase">Muhammad Adeniyi Badmus</h1>
          <p class="text-lg text-indigo-600 font-bold mb-4 uppercase tracking-widest">Aspiring Software Engineer | Front-End Development Specialist</p>
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 font-medium">
            <span class="flex items-center gap-1"><mat-icon class="!text-sm flex items-center justify-center !w-4 !h-4">location_on</mat-icon> <span class="leading-none">Saki, Oyo, Nigeria</span></span>
            <span class="flex items-center gap-1"><mat-icon class="!text-sm flex items-center justify-center !w-4 !h-4">phone</mat-icon> <span class="leading-none">+2348137496961</span></span>
            <span class="flex items-center gap-1"><mat-icon class="!text-sm flex items-center justify-center !w-4 !h-4">email</mat-icon> <span class="leading-none">badmusa891&#64;gmail.com</span></span>
            <span class="flex items-center gap-1"><mat-icon class="!text-sm flex items-center justify-center !w-4 !h-4">link</mat-icon> <span class="leading-none">linkedin.com/in/muhammad-adeniyi-badmus-125692288</span></span>
          </div>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Left Column (Sidebar) -->
          <aside class="md:col-span-1 space-y-10">
            <section>
              <h2 class="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4 border-b border-indigo-100 pb-2">Technical Skills</h2>
              <div class="space-y-4">
                <div>
                  <h3 class="text-xs font-bold text-slate-400 uppercase mb-2">Programming</h3>
                  <p class="text-sm text-slate-700 leading-relaxed">HTML5, CSS3, JavaScript, Angular.js, PHP, Oracle, TypeScript</p>
                </div>
                <div>
                  <h3 class="text-xs font-bold text-slate-400 uppercase mb-2">Design Tools</h3>
                  <p class="text-sm text-slate-700 leading-relaxed">Adobe Photoshop, CorelDRAW, Adobe Illustrator, Canva, Inkscape, PixelLab</p>
                </div>
                <div>
                  <h3 class="text-xs font-bold text-slate-400 uppercase mb-2">Competencies</h3>
                  <p class="text-sm text-slate-700 leading-relaxed">Responsive Web Design, UI/UX Implementation, Brand Identity, Agile Collaboration</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4 border-b border-indigo-100 pb-2">Languages</h2>
              <ul class="text-sm text-slate-700 space-y-1">
                <li>English (Fluent)</li>
                <li>Yoruba (Native)</li>
              </ul>
            </section>

            <section>
              <h2 class="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4 border-b border-indigo-100 pb-2">Soft Skills</h2>
              <p class="text-sm text-slate-700 leading-relaxed">Communication, Critical Thinking, Team Collaboration, Leadership, Parliamentary Governance</p>
            </section>
          </aside>

          <!-- Right Column (Main) -->
          <div class="md:col-span-2 space-y-10">
            <section>
              <h2 class="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-4 border-b border-indigo-100 pb-2">Profile Summary</h2>
              <p class="text-sm text-slate-700 leading-relaxed">
                Self-taught software engineer with proven front-end development expertise demonstrated through professional internships, 
                six months of SIWES industrial training, and impactful community work. Currently pursuing a B.Tech in Computer Science 
                at LAUTECH, seeking to drive innovation in user-centered web applications.
              </p>
            </section>

            <section>
              <h2 class="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-6 border-b border-indigo-100 pb-2">Professional Experience</h2>
              <div class="space-y-8">
                <div>
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-slate-900">Lead Developer & Founder</h3>
                    <span class="text-[10px] font-bold bg-indigo-50 px-2 py-1 rounded text-indigo-600 uppercase tracking-wider">2024 - Present</span>
                  </div>
                  <p class="text-xs text-indigo-600 font-bold mb-3">FluxForge | Saki, Nigeria</p>
                  <ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
                    <li>Architecting high-performance zoneless Angular applications for startups and local businesses.</li>
                    <li>Successfully delivered specialized MVPs including a high-end photography platform and a geological services website.</li>
                    <li>Translating complex business requirements into scalable, design-centric front-end code with optimized SEO.</li>
                  </ul>
                </div>

                <div>
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-slate-900">IT Industrial Trainee (SIWES)</h3>
                    <span class="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">Aug 2025 - Dec 2025</span>
                  </div>
                  <p class="text-xs text-indigo-600 font-bold mb-3">Dervac HUB | Lagos, Nigeria</p>
                  <ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
                    <li>Engineered a centralized training dashboard to showcase 10+ web modules using Angular and Tailwind CSS.</li>
                    <li>Collaborated in a fast-paced development hub environment, gaining hands-on exposure to professional dev-ops.</li>
                    <li>Demonstrated technical adaptability by mastering modern JS frameworks and state management patterns.</li>
                  </ul>
                </div>

                <div>
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-slate-900">Software Engineering Intern</h3>
                    <span class="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">Jan 2025 - Feb 2025</span>
                  </div>
                  <p class="text-xs text-indigo-600 font-bold mb-3">CodSoft | Remote, India</p>
                  <ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
                    <li>Engineered production-ready web applications focusing on semantic HTML and responsive architecture.</li>
                    <li>Developed a custom logic engine for a web-based calculator with robust error handling.</li>
                    <li>Maintained 100% adherence to project milestones and technical specifications throughout the program.</li>
                  </ul>
                </div>

                <div>
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-slate-900">Digital Strategy Volunteer</h3>
                    <span class="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded text-slate-500 uppercase">2023 - Present</span>
                  </div>
                  <p class="text-xs text-indigo-600 font-bold mb-3">BARHF Foundation | Oyo, Nigeria</p>
                  <ul class="text-sm text-slate-600 space-y-2 list-disc pl-4">
                    <li>Managing digital visibility and awareness campaigns reaching weekly audiences of 5,000+ active users.</li>
                    <li>Developing and maintaining the foundation's digital repository for community outreach updates.</li>
                    <li>Optimizing social media and web presence to drive youth engagement and awareness initiatives.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-xs font-black text-indigo-600 uppercase tracking-[0.2em] mb-6 border-b border-indigo-100 pb-2">Education</h2>
              <div class="space-y-6">
                <div>
                  <h3 class="font-bold text-slate-900 text-sm">Bachelor of Technology (B.Tech), Computer Science</h3>
                  <p class="text-xs text-slate-500">Ladoke Akintola University of Technology (LAUTECH) | 2023 - 2028</p>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 text-sm">Professional Diploma, Software Engineering (Front-End)</h3>
                  <p class="text-xs text-slate-500">SQI College of ICT | 2024 - Present</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  `,
  styles: [`
    @media print {
      body { background: white !important; }
      nav, footer, .app-navbar, .app-footer { display: none !important; }
      .min-h-screen { min-height: 0 !important; padding: 0 !important; }
      article { margin: 0 !important; width: 100% !important; max-width: none !important; border: none !important; box-shadow: none !important; }
    }
  `]
})
export class ResumePage {
  print() {
    window.print();
  }

  goBack() {
    window.history.back();
  }
}
