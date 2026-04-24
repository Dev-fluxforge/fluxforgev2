import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-section-header',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-12" [ngClass]="align === 'center' ? 'text-center' : ''">
      @if (eyebrow) {
        <span class="font-mono text-[10px] md:text-xs tracking-[0.3em] text-accent uppercase block mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {{ eyebrow }}
        </span>
      }
      <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
        {{ title }}
      </h2>
      @if (subtitle) {
        <p class="text-pale-mint/70 text-base md:text-lg max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700" [ngClass]="align === 'center' ? 'mx-auto' : ''">
          {{ subtitle }}
        </p>
      }
    </div>
  `
})
export class SectionHeader {
  @Input() eyebrow?: string;
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() align: 'left' | 'center' = 'left';
}
