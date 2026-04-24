import {ChangeDetectionStrategy, Component, inject, OnInit, DestroyRef} from '@angular/core';
import {RouterOutlet, Router, NavigationEnd} from '@angular/router';
import {Navbar} from './layout/navbar';
import {Footer} from './layout/footer';
import {CommonModule} from '@angular/common';
import {filter} from 'rxjs/operators';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
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

  isResumeRoute(): boolean {
    return this.router.url === '/resume';
  }
}
