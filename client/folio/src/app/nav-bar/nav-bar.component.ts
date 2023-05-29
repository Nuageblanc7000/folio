import { Component, Input } from '@angular/core';
import { IRoute } from '../shared/interface/iroute.interface';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() routes: IRoute[] = [];
}
