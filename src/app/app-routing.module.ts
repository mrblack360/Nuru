import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bible',
    pathMatch: 'full',
  },

  {
    path: 'lessons',
    loadChildren: () =>
      import('./lessons/lessons.module').then((m) => m.LessonsPageModule),
  },
  {
    path: 'hymns',
    loadChildren: () =>
      import('./hymns/hymns.module').then((m) => m.HymnsPageModule),
  },
  {
    path: 'bible',
    loadChildren: () =>
      import('./bible/bible.module').then((m) => m.BiblePageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },

  {
    path: '*',
    redirectTo: 'lessons',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
