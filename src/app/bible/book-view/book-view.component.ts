import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit() {
    console.log('Book details', this.data);
  }
}
