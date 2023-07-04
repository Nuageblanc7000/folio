import { Injectable } from '@angular/core';
import { IDataMessage } from '../interface/IDataMessage.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable()
export class ContactService extends GlobalService {
  constructor(private http: HttpClient) {
    super();
  }
  sendMessage(dataMessage: IDataMessage): Observable<any> {
    return this.http.post('', dataMessage);
  }
}
