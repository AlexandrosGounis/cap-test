import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
// import { defineCustomElements } from '@ionic/core/loader';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

// defineCustomElements(window);