import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiblePageRoutingModule } from './bible-routing.module';

import { BiblePage } from './bible.page';
import { ChapterViewComponent } from './chapter-view/chapter-view.component';
import { BookViewComponent } from './book-view/book-view.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BiblePageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BiblePage, BookViewComponent, ChapterViewComponent],
})
export class BiblePageModule {}
