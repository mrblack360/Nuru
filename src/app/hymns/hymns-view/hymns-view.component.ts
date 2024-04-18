import { KeyValue, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HymnsService } from 'src/app/shared/services/hymns/hymns.service';
import * as hymns from '../../shared/hymns.json';

@Component({
  selector: 'app-hymns-view',
  templateUrl: './hymns-view.component.html',
  styleUrls: ['./hymns-view.component.scss'],
})
export class HymnsViewComponent implements OnInit {
  _hymns = hymns;
  selectedHymnTitle: any;
  selectedHymn: any;

  constructor(private location: Location, private hymnsService: HymnsService) {
    this.selectedHymnTitle = this.hymnsService.getSelectedTitle();
    this.selectedHymn = this._hymns.songs[this.selectedHymnTitle - 1];
  }

  ngOnInit() {}

  goBack() {
    this.location.back();
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
