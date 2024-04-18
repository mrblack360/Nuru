import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HymnsService {
  constructor() {}

  public setSelectedTitle(title: string) {
    localStorage.setItem('selectedHymnTitle', title);
  }

  public getSelectedTitle() {
    return localStorage.getItem('selectedHymnTitle');
  }
}
