import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Habilita el soporte para Fetch API
    ...appConfig.providers,
    provideAnimationsAsync(), // Configuración para animaciones asincrónicas
  ],
});
