import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {provideClientHydration} from '@angular/platform-browser';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideClientHydration(),
    provideBrowserGlobalErrorListeners(), 
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }))
  ],
};
