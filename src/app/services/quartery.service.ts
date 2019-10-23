import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuarteryService {
  quarterlyUrl = 'assets/quateries.json';
  constructor(public http: HttpClient) {}

  getQuarteries() {
    return this.http.get(this.quarterlyUrl);
  }
}
