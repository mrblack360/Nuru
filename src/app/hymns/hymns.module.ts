import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HymnsPageRoutingModule } from './hymns-routing.module';

import { HymnsPage } from './hymns.page';
import { HymnsListComponent } from './hymns-list/hymns-list.component';
import { HymnsViewComponent } from './hymns-view/hymns-view.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HymnsPageRoutingModule],
  declarations: [HymnsPage, HymnsListComponent, HymnsViewComponent],
})
export class HymnsPageModule {}
