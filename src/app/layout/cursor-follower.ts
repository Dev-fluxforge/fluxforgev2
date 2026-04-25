import { Component, HostListener, signal, PLATFORM_ID, inject, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor-follower',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isBrowser) {
      <div class="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
           [style.left.px]="x()" 
           [style.top.px]="y()">
        
        <!-- Rotating Outer Ring -->
        <div class="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-primary/30 border-dashed animate-[spin_4s_linear_infinite]"></div>
        
        <!-- Main Pulsing Ring -->
        <div class="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-primary/50 transition-transform duration-300 ease-out scale-100 shadow-[0_0_15px_rgba(0,168,107,0.3)] animate-pulse"></div>
        
        <!-- Rotating Inner Ring -->
        <div class="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-t border-b border-primary/40 animate-[spin_2s_linear_infinite_reverse]"></div>
        
        <!-- Inner Dot -->
        <div class="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
        
        <!-- Glow Effect -->
        <div class="absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-pulse"></div>
      </div>
    }
  `,
  styles: [`
    :host {
      display: contents;
    }
    @keyframes spin {
      from { transform: translate(-50%, -50%) rotate(0deg); }
      to { transform: translate(-50%, -50%) rotate(360deg); }
    }
  `]
})
export class CursorFollower implements OnInit {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  
  x = signal(-100);
  y = signal(-100);
  
  private targetX = -100;
  private targetY = -100;
  private currentX = -100;
  private currentY = -100;

  ngOnInit() {
    if (this.isBrowser) {
      this.animate();
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  }

  private animate() {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    
    const tick = () => {
      this.currentX = lerp(this.currentX, this.targetX, 0.15);
      this.currentY = lerp(this.currentY, this.targetY, 0.15);
      
      this.x.set(this.currentX);
      this.y.set(this.currentY);
      
      requestAnimationFrame(tick);
    };
    
    requestAnimationFrame(tick);
  }
}
