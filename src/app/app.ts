import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet, Router} from '@angular/router';
import {Navbar} from './layout/navbar';
import {Footer} from './layout/footer';
import {CommonModule} from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  router = inject(Router);

  isResumeRoute(): boolean {
    return this.router.url === '/resume';
  }
}
