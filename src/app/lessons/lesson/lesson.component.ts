import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuarterliesService } from 'src/app/shared/services/quarterlies/quarterlies.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  lesson: any;

  constructor(
    private router: Router,
    public quarterliesService: QuarterliesService
  ) {
    quarterliesService
      .getLesson(quarterliesService.selectedLesson?.path)
      .subscribe((lesson) => {
        this.lesson = lesson;
        console.log(lesson);
      });
  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['lessons']);
  }
}
