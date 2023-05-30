import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interface/iproject.interface';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends GlobalService {
  API_URI_PROJECT: string = this.API_URL + 'projects';
  constructor(private http: HttpClient) {
    super();
  }

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.API_URI_PROJECT);
  }

  getById(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${this.API_URI_PROJECT}/${id}`);
  }
  create(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${this.API_URI_PROJECT}}`, project);
  }
  update(id: number, updatedProject: IProject): Observable<IProject> {
    return this.http.post<IProject>(
      `${this.API_URI_PROJECT}/${id}`,
      updatedProject
    );
  }
  delete(id: number): Observable<IProject> {
    return this.http.delete<IProject>(`${this.API_URI_PROJECT}/${id}`);
  }
}
