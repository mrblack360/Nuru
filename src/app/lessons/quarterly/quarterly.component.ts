import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuarterliesService } from 'src/app/shared/services/quarterlies/quarterlies.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quarterly',
  templateUrl: './quarterly.component.html',
  styleUrls: ['./quarterly.component.scss'],
})
export class QuarterlyComponent implements OnInit {
  quarterly: any;
  constructor(
    private location: Location,
    private router: Router,
    public quarterliesService: QuarterliesService
  ) {
    this.quarterliesService
      .getQuarterly(quarterliesService.selectedQuarterly?.id)
      .subscribe(
        (quarterly) => {
          this.quarterly = quarterly;
        }
        // TODO: handle exceptions here
      );
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  momentFormat(date: string, format?: string): string {
    return moment(date, 'DD/MM/YYYY')
      .locale('sw')
      .format(format ? format : 'MMMM DD');
  }

  selectLesson(lesson: any) {
    this.quarterliesService.selectedLesson = lesson;
    this.router.navigate(['lessons/lesson']);
  }
}
