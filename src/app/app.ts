import {ChangeDetectionStrategy, Component, inject, OnInit, DestroyRef, PLATFORM_ID} from '@angular/core';
import {RouterOutlet, Router, NavigationEnd} from '@angular/router';
import {Navbar} from './layout/navbar';
import {Footer} from './layout/footer';
import {CursorFollower} from './layout/cursor-follower';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {filter} from 'rxjs/operators';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {SeoService} from './services/seo.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CursorFollower, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private platformId = inject(PLATFORM_ID);
  private seoService = inject(SeoService);

  ngOnInit() {
    this.seoService.init();

    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  isResumeRoute(): boolean {
    return this.router.url === '/resume';
  }
}
