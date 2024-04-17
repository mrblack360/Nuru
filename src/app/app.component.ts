import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tabs = [
    { name: 'Biblia', icon: 'book-outline', link: 'bible' },
    { name: 'Lessoni', icon: 'school-outline', link: 'lessons' },
    { name: 'Nyimbo', icon: 'musical-notes-outline', link: 'hymns' },
    { name: 'Zaidi', icon: 'menu-outline', link: 'home' },
  ];
  constructor() {}
}
