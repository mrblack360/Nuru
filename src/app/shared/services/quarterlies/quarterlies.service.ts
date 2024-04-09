import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuarterliesService {
  constructor(private http: HttpClient) {}

  getQuarterlies(): Observable<any> {
    return this.http.get(
      'https://sabbath-school-stage.adventech.io/api/v2/sw/quarterlies/index.json'
    );
  }
  getQuarterly(quarterId: string): Observable<any> {
    return this.http.get(
      'https://sabbath-school-stage.adventech.io/api/v2/sw/quarterlies/' +
        quarterId +
        '/index.json'
    );
  }
}
