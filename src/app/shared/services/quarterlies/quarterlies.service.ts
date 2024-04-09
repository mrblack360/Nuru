import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfigs } from '../../configs';

@Injectable({
  providedIn: 'root',
})
export class QuarterliesService {
  constructor(private http: HttpClient) {}
  baseUrl = appConfigs.adventistBaseUrl;
  public selectedQuarterly: any;

  getQuarterlies(): Observable<any> {
    return this.http.get(this.baseUrl + 'sw/quarterlies/index.json');
  }
  getQuarterly(quarterId: string): Observable<any> {
    return this.http.get(
      this.baseUrl + 'sw/quarterlies/' + quarterId + '/index.json'
    );
  }
}
