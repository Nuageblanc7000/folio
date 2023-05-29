import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { IProject } from '../shared/interface/iproject.interface';
import { ProjectService } from '../shared/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('queryAnimation', [
      transition(':enter', [
        query('.typping', [
          style({
            opacity: 0,
            transform: 'translateX(-80px)',
          }),
          stagger(100, [animate(500)]),
        ]),
      ]),
    ]),
  ],
})
export class HomeComponent {
  projects: IProject[] = [];
  exp = '';
  t = '';
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: (p: any) => {
        const { data } = p;
        this.projects = data.projects;
      },
    });
  }
}
