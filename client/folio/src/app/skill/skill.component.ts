import { Component } from '@angular/core';
import { ITechnology } from '../shared/interface/itechnology.interface';
import { TechnologiesService } from '../shared/services/technology.service';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
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
export class SkillComponent {
  constructor(private technoService: TechnologiesService) {}
  technologies: ITechnology[] = [];
  url_image: string = 'http://localhost:5000/projects/';
  ngOnInit() {
    this.technoService.getAll().subscribe({
      next: (response: any) => {
        const { data } = response;
        console.log(data);
        this.technologies = data.technologies;

        console.log(this.technologies);
      },
    });
  }
}
