import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonsPage } from './lessons.page';
import { QuarterliesComponent } from './quarterlies/quarterlies.component';
import { QuarterlyComponent } from './quarterly/quarterly.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  {
    path: '',
    component: LessonsPage,
    children: [
      { path: '', component: QuarterliesComponent },
      { path: 'quarterly', component: QuarterlyComponent },
      { path: 'lesson', component: LessonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsPageRoutingModule {}
