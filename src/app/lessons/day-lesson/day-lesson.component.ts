import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { LessonsService } from 'src/app/shared/services/lessons/lessons.service';

@Component({
  selector: 'app-day-lesson',
  templateUrl: './day-lesson.component.html',
  styleUrls: ['./day-lesson.component.scss'],
})
export class DayLessonComponent implements OnInit {
  @Input() path: any;
  lesson: any;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessonsService.getDayLesson(this.path).subscribe(
      (lesson) => {
        this.lesson = lesson;
      }
      // TODO: Handle exceptions here
    );
  }

  formatDate(date: string): string {
    return moment(date, 'DD/MM/YYYY').locale('sw').format('dddd, MMMM DD');
  }
}
