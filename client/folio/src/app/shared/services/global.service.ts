import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  // public API_URL: string = 'http://localhost:5000/api/';
  // public API_IMG_URL: string = 'http://localhost:5000/projects/';
  protected API_URL: string = 'https://rw-folio.frinki-ad.com/api/';
  protected API_IMG_URL: string = 'https://rw-folio.frinki-ad.com/projects/';
}
