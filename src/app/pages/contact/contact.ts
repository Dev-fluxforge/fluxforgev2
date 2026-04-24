import {ChangeDetectionStrategy, Component, signal, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {SectionHeader} from '../../components/section-header';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, SectionHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-6 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        <!-- Info Column -->
        <div class="space-y-12">
          <app-section-header 
            eyebrow="GET IN TOUCH"
            title="Let's build something together."
            subtitle="Whether you have a specific project in mind or just want to chat about tech, I'm all ears."
          ></app-section-header>

          <div class="space-y-8">
            <!-- Availability Badge -->
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span class="text-accent text-sm font-medium tracking-wide">Available for new projects</span>
            </div>

            <div class="grid grid-cols-1 gap-6">
              @for (item of contactInfo; track item.label) {
                <a 
                  [href]="item.link" 
                  [target]="item.ext ? '_blank' : '_self'"
                  class="flex items-center gap-6 p-6 bg-surface border border-border-forest rounded-2xl group hover:border-primary transition-all duration-300"
                >
                  <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-void transition-all">
                    <mat-icon>{{ item.icon }}</mat-icon>
                  </div>
                  <div>
                    <p class="text-sage text-[10px] font-mono uppercase tracking-[0.2em] mb-1">{{ item.label }}</p>
                    <p class="text-white font-medium group-hover:text-accent transition-colors">{{ item.value }}</p>
                  </div>
                </a>
              }
            </div>
          </div>
        </div>

        <!-- Form Column -->
        <div class="relative">
          @if (!submitted()) {
            <div class="bg-surface border border-border-forest p-10 rounded-3xl space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
              <h3 class="text-2xl font-display font-bold text-white">Send a Message</h3>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="name" class="font-mono text-[10px] uppercase tracking-widest text-pale-mint/60 ml-2">Full Name</label>
                    <input 
                      id="name"
                      type="text" 
                      formControlName="name"
                      placeholder="John Doe"
                      class="w-full bg-void border border-border-forest rounded-xl p-4 text-pale-mint placeholder:text-sage focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    >
                    @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                      <span class="text-[10px] text-red-400 ml-2">Name is required</span>
                    }
                  </div>
                  <div class="space-y-2">
                    <label for="email" class="font-mono text-[10px] uppercase tracking-widest text-pale-mint/60 ml-2">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      formControlName="email"
                      placeholder="john@example.com"
                      class="w-full bg-void border border-border-forest rounded-xl p-4 text-pale-mint placeholder:text-sage focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    >
                    @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                      <span class="text-[10px] text-red-400 ml-2">Valid email is required</span>
                    }
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="subject" class="font-mono text-[10px] uppercase tracking-widest text-pale-mint/60 ml-2">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    formControlName="subject"
                    placeholder="Project Inquiry"
                    class="w-full bg-void border border-border-forest rounded-xl p-4 text-pale-mint placeholder:text-sage focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                  >
                </div>

                <div class="space-y-2">
                  <label for="message" class="font-mono text-[10px] uppercase tracking-widest text-pale-mint/60 ml-2">Message</label>
                  <textarea 
                    id="message"
                    rows="5"
                    formControlName="message"
                    placeholder="Tell us about your project..."
                    class="w-full bg-void border border-border-forest rounded-xl p-4 text-pale-mint placeholder:text-sage focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  [disabled]="contactForm.invalid || isSubmitting()"
                  class="w-full bg-primary text-void py-5 rounded-xl font-bold text-lg transition-all hover:bg-accent glow-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <div class="flex items-center justify-center gap-3" [class.opacity-0]="isSubmitting()">
                    {{ isSubmitting() ? 'Sending...' : 'Send Message' }}
                    <mat-icon class="transition-transform group-hover:translate-x-1">send</mat-icon>
                  </div>
                  
                  @if (isSubmitting()) {
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="w-6 h-6 border-2 border-void border-t-transparent rounded-full animate-spin"></div>
                      <span class="ml-3">Sending...</span>
                    </div>
                  }
                </button>
              </form>
            </div>
          } @else {
            <!-- Success State -->
            <div class="bg-surface border border-primary p-20 rounded-3xl text-center space-y-8 animate-in zoom-in duration-500">
              <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <mat-icon class="!text-accent !w-12 !h-12 !text-[48px]">check_circle</mat-icon>
              </div>
              <div class="space-y-4">
                <h3 class="text-3xl font-display font-bold text-white">Message Sent!</h3>
                <p class="text-pale-mint/70 max-w-sm mx-auto">
                  Thank you for reaching out. We've received your message and will respond within 24 hours.
                </p>
              </div>
              <button 
                (click)="submitted.set(false); contactForm.reset();"
                class="text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class Contact {
  private fb = inject(FormBuilder);
  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitted = signal(false);

  contactInfo = [
    { label: 'Email', value: 'badmusa891@gmail.com', icon: 'email', link: 'mailto:badmusa891@gmail.com', ext: false },
    { label: 'Phone', value: '+234 813 749 6961', icon: 'call', link: 'tel:+2348137496961', ext: false },
    { label: 'LinkedIn', value: 'Adeniyi Badmus', icon: 'person_outline', link: 'https://linkedin.com/in/muhammad-adeniyi-badmus-125692288', ext: true },
    { label: 'Location', value: 'Saki, Oyo, Nigeria · WAT', icon: 'location_on', link: '#', ext: false }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.submitted.set(true);
      }, 1500);
    }
  }
}
