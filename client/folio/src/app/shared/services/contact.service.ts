import { Injectable } from '@angular/core';
import { IDataMessage } from '../interface/IDataMessage.interface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService extends GlobalService {
  isSending$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  constructor(private http: HttpClient) {
    super();
  }
  sendMessage(dataMessage: IDataMessage): Observable<any> {
    return this.http.post(`${this.API_URL}message`, dataMessage);
  }
}
