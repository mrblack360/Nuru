import { Component, OnInit } from '@angular/core';
import * as bible from '../shared/swahili-bible-edition.json';
import { KeyValue } from '@angular/common';

interface Verse {
  verse_number: string;
  verse_text: string;
}

interface Chapter {
  chapter_number: string;
  VERSES: Verse[];
}

interface Book {
  book_number: string;
  book_name: string;
  CHAPTER: Chapter[];
}

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {
  bible: any = bible;
  activeBook: any;

  constructor() {}

  ngOnInit() {
    const activeBook = this.bible.BIBLEBOOK?.[0];
    this.activeBook = activeBook;
  }

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };

  onReachBeginning(event: any) {}

  onReachEnd(event) {}

  onSlideChange(event: any) {
    const activeIndex = event?.detail?.[0]?.activeIndex;
    const activeBook = this.bible.BIBLEBOOK?.[activeIndex];
    this.activeBook = activeBook;
  }
}
