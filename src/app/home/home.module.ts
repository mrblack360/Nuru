import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { MorePageComponent } from './pages/more-page/more-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, DatepickerComponent, MorePageComponent],
  entryComponents: [DatepickerComponent, MorePageComponent]
})
export class HomePageModule {}
