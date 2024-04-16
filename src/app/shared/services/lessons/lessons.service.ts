import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConfigs } from '../../configs';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  public selectedLessonDetails: any;
  baseUrl = appConfigs.adventistBaseUrl;

  constructor(private http: HttpClient) {}

  getLesson(lessonId: string): Observable<any> {
    return this.http.get(this.baseUrl + lessonId + '/index.json');
  }

  getDayLesson(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path + '/read/index.json');
  }
}
