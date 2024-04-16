import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPageRoutingModule } from './lessons-routing.module';

import { LessonsPage } from './lessons.page';
import { QuarterliesComponent } from './quarterlies/quarterlies.component';
import { QuarterlyComponent } from './quarterly/quarterly.component';
import { LessonComponent } from './lesson/lesson.component';
import { DayLessonComponent } from './day-lesson/day-lesson.component';
import { SanitizedHtmlPipe } from '../shared/pipes/sanitized-html/sanitized-html.pipe';

@NgModule({
  declarations: [
    LessonsPage,
    QuarterliesComponent,
    QuarterlyComponent,
    LessonComponent,
    DayLessonComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonsPageRoutingModule,
    SanitizedHtmlPipe,
  ],
})
export class LessonsPageModule {}
