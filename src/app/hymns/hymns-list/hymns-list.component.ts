import { Component, OnInit } from '@angular/core';
import * as hymns from '../../shared/hymns.json';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-hymns-list',
  templateUrl: './hymns-list.component.html',
  styleUrls: ['./hymns-list.component.scss'],
})
export class HymnsListComponent implements OnInit {
  hymnTitles = hymns;
  hymnTitlesArray = hymns;

  constructor() {}

  ngOnInit() {}

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
