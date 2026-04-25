import { inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  private readonly defaultTitle = 'FluxForge | Advanced Web Experiences';
  private readonly defaultDescription = 'Adeniyi Badmus - Lead Developer & Founder at FluxForge. Building high-performance zoneless Angular applications with extreme precision and modern design.';

  init() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data)
    ).subscribe(data => {
      this.updateTags(data);
    });
  }

  private updateTags(data: Record<string, string>) {
    const title = data['title'] ? `${data['title']} | FluxForge` : this.defaultTitle;
    const description = data['description'] || this.defaultDescription;
    const keywords = data['keywords'] || 'Angular, FluxForge, Adeniyi Badmus, Web Development, Portfolio, Zoneless Angular, TypeScript, Tailwind CSS';

    this.titleService.setTitle(title);
    
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    
    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    
    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }
}
