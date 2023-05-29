import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('queryAnimation', [
      transition(':enter', [
        query('.typping', [
          style({
            opacity: 0,
            transform: 'translateX(80px)',
          }),

          stagger(100, [animate(500)]),
        ]),
      ]),
    ]),
  ],
})
export class ContactComponent {
  exp: string = '';
}
