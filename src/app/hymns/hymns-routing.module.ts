import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HymnsPage } from './hymns.page';
import { HymnsListComponent } from './hymns-list/hymns-list.component';
import { HymnsViewComponent } from './hymns-view/hymns-view.component';

const routes: Routes = [
  {
    path: '',
    component: HymnsPage,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: HymnsListComponent,
      },
      {
        path: 'view',
        component: HymnsViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HymnsPageRoutingModule {}
