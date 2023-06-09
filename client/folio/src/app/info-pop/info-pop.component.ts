import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProject } from '../shared/interface/iproject.interface';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-info-pop',
  templateUrl: './info-pop.component.html',
  styleUrls: ['./info-pop.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: '  scale(1)',
        })
      ),
      state(
        'close',
        style({
          transform: 'scale(0)',
        })
      ),
      transition('open => close', animate(200)),
      transition('close => open', animate(200)),
    ]),
  ],
})
export class InfoPopComponent {
  @Input() project?: IProject;
  @Input() view?: boolean;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter();
  @Output() onNavigateEmit: EventEmitter<number> = new EventEmitter();
  url_image: string = '';
  state: string = 'open';
  constructor(private globalService: GlobalService) {}
  ngOnInit() {
    this.url_image = this.globalService.API_IMG_URL;
  }
  close() {
    this.view = false;
    this.onClick.emit(this.view);
  }
  onNavigate(id: number) {
    this.onNavigateEmit.emit(id);
  }
}
