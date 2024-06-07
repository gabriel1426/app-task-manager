import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { environment } from '@env/environment';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
    constructor() {
      this.initialize()
    }


  public async initialize(): Promise<void> {
    if (Capacitor.isNativePlatform()) {
      return;
    }
    initializeApp(environment.firebase);
  }

}
