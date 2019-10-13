import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss']
})
export class MorePageComponent implements OnInit {
  myDate: any;
  listItems = [
    { name: 'Changia', icon: 'add' },
    { name: 'Mipangilio', icon: 'settings' }
  ];
  constructor() {}

  ngOnInit() {}
}
