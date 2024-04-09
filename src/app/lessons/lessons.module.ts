import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonsPageRoutingModule } from './lessons-routing.module';

import { LessonsPage } from './lessons.page';
import { QuarterliesComponent } from './quarterlies/quarterlies.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LessonsPageRoutingModule],
  declarations: [LessonsPage, QuarterliesComponent],
})
export class LessonsPageModule {}
