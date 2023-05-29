import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITechnology } from '../interface/itechnology.interface';
import { Observable } from 'rxjs';

const API_URI_TECHNOLOGY = 'http://localhost:5000/api/technologies';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<ITechnology[]> {
    return this.http.get<ITechnology[]>(API_URI_TECHNOLOGY);
  }

  getById(id: number): Observable<ITechnology> {
    return this.http.get<ITechnology>(`${API_URI_TECHNOLOGY}/${id}`);
  }
  create(project: ITechnology): Observable<ITechnology> {
    return this.http.post<ITechnology>(`${API_URI_TECHNOLOGY}}`, project);
  }
  update(id: number, updatedProject: ITechnology): Observable<ITechnology> {
    return this.http.post<ITechnology>(
      `${API_URI_TECHNOLOGY}/${id}`,
      updatedProject
    );
  }
  delete(id: number): Observable<ITechnology> {
    return this.http.delete<ITechnology>(`${API_URI_TECHNOLOGY}/${id}`);
  }
}
