import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuarterliesService } from 'src/app/shared/services/quarterlies/quarterlies.service';
import { GeneralHelpers } from 'src/app/shared/generalHelpers';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
  lesson: any;
  dayDetails: any;

  constructor(
    private readonly location: Location,
    public quarterliesService: QuarterliesService
  ) {}

  ngOnInit(): void {
    this.quarterliesService
      .getLesson(this.quarterliesService.selectedLesson?.path)
      .subscribe((lesson) => {
        this.lesson = lesson;
        this.quarterliesService.selectedLessonDetails = lesson;
        this.dayDetails = lesson?.days?.[0];
      });
  }

  goBack() {
    this.location.back();
  }

  formatDate(date: string): string {
    return GeneralHelpers.formatDate(date);
  }

  onSlideChange(event: any) {
    const activeIndex = event?.detail?.[0]?.activeIndex;
    const activeDayLesson = this.lesson.days?.[activeIndex];
    this.dayDetails = activeDayLesson;
  }
}
