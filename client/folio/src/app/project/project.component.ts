import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { IProject } from '../shared/interface/iproject.interface';
import { ProjectService } from '../shared/services/project.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
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
export class ProjectComponent {
  url_image: string = 'http://localhost:5000/projects/';
  isActive: string = '';
  projects: IProject[] = [];
  project?: IProject;
  view: boolean = false;
  close(view: boolean): void {
    console.log(view);
    this.view = view;
  }

  openPop(view: boolean, project: IProject) {
    this.view = view;
    this.project = project;
  }
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: (response: any) => {
        const { data } = response;
        this.projects = data.projects;
      },
    });
  }
}
