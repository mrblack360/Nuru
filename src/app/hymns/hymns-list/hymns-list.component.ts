import { Component, OnInit } from '@angular/core';
import * as hymns from '../../shared/hymns.json';
import { KeyValue } from '@angular/common';
import { Router } from '@angular/router';
import { HymnsService } from 'src/app/shared/services/hymns/hymns.service';

@Component({
  selector: 'app-hymns-list',
  templateUrl: './hymns-list.component.html',
  styleUrls: ['./hymns-list.component.scss'],
})
export class HymnsListComponent implements OnInit {
  hymnTitles = hymns;
  hymnTitlesArray = hymns;

  constructor(private router: Router, private hymnsService: HymnsService) {}

  ngOnInit() {}

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };

  openHymn(key: string) {
    this.hymnsService.setSelectedTitle(key);
    this.router.navigate(['hymns/view']);
  }
}
