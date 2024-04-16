import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuarterliesService } from 'src/app/shared/services/quarterlies/quarterlies.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  lesson: any;

  constructor(
    private location: Location,
    public quarterliesService: QuarterliesService
  ) {
    quarterliesService
      .getLesson(quarterliesService.selectedLesson?.path)
      .subscribe((lesson) => {
        this.lesson = lesson;
        quarterliesService.selectedLessonDetails = lesson;
      });
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
}
