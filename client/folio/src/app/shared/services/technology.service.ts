import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITechnology } from '../interface/itechnology.interface';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService extends GlobalService {
  constructor(private http: HttpClient) {
    super();
  }
  private API_URI_TECHNOLOGY = this.API_URL + 'technologies';
  getAll(): Observable<ITechnology[]> {
    return this.http.get<ITechnology[]>(this.API_URI_TECHNOLOGY);
  }

  getById(id: number): Observable<ITechnology> {
    return this.http.get<ITechnology>(`${this.API_URI_TECHNOLOGY}/${id}`);
  }
  create(project: ITechnology): Observable<ITechnology> {
    return this.http.post<ITechnology>(`${this.API_URI_TECHNOLOGY}}`, project);
  }
  update(id: number, updatedProject: ITechnology): Observable<ITechnology> {
    return this.http.post<ITechnology>(
      `${this.API_URI_TECHNOLOGY}/${id}`,
      updatedProject
    );
  }
  delete(id: number): Observable<ITechnology> {
    return this.http.delete<ITechnology>(`${this.API_URI_TECHNOLOGY}/${id}`);
  }
}
