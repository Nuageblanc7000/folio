import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interface/iproject.interface';

const API_URI_PROJECT = 'http://localhost:5000/api/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(API_URI_PROJECT);
  }

  getById(id: number): Observable<IProject> {
    return this.http.get<IProject>(`${API_URI_PROJECT}/${id}`);
  }
  create(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${API_URI_PROJECT}}`, project);
  }
  update(id: number, updatedProject: IProject): Observable<IProject> {
    return this.http.post<IProject>(`${API_URI_PROJECT}/${id}`, updatedProject);
  }
  delete(id: number): Observable<IProject> {
    return this.http.delete<IProject>(`${API_URI_PROJECT}/${id}`);
  }
}
