import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-page',
  templateUrl: './more-page.component.html',
  styleUrls: ['./more-page.component.scss']
})
export class MorePageComponent implements OnInit {
  listItems = [
    { name: 'Donate', icon: 'add' },
    { name: 'Settings', icon: 'settings' }
  ];
  constructor() {}

  ngOnInit() {}
}
