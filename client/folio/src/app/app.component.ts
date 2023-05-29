import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { IRoute } from './shared/interface/iroute.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'folio';
  routes: IRoute[] = [
    {
      path: '/home',
      isActive: true,
    },
    {
      path: '/skills',
      isActive: true,
    },
    {
      path: '/projects',
      isActive: true,
    },
    {
      path: '/contact',
      isActive: true,
    },
  ];

  getAnimationState(outlet: any) {
    // Renvoie l'état d'animation en fonction de l'instance du router-outlet
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
