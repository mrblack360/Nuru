import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-view',
  templateUrl: './chapter-view.component.html',
  styleUrls: ['./chapter-view.component.scss'],
})
export class ChapterViewComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
