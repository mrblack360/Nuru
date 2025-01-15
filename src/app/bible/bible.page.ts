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

  constructor() {}

  ngOnInit() {}

  originalOrder = (
    a: KeyValue<string, string>,
    b: KeyValue<string, string>
  ): number => {
    return 0;
  };
}
