import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  IonApp,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, IonFooter, IonButtons, IonContent, IonHeader, IonApp, IonMenu, IonMenuButton, IonTitle, IonToolbar],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('cap-test');
  protected readonly items = Array.from({ length: 20 }, (_, i) => i + 1);
}
