import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons/lessons.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.page.html',
  styleUrls: ['./lessons.page.scss'],
})
export class LessonsPage implements OnInit {
  quarterlies: any[] = [];

  constructor(lessonsService: LessonsService) {
    // lessonsService.getQuarterlies().subscribe((data) => {
    //   this.quarterlies = data;
    // });
  }

  ngOnInit() {}
}
