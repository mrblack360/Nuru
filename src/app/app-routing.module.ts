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
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(
        (module) => module.SettingsPageModule
      ),
  },
  {
    path: '*',
    redirectTo: 'lessons',
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
