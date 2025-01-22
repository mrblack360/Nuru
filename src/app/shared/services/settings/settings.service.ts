import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  currentTheme: any;
  renderer: Renderer2;

  constructor(
    private readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    if (localStorage.getItem('theme')) {
      this.changeTheme(localStorage.getItem('theme'));
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDark.matches) this.changeTheme('dark');
      else this.changeTheme();
    }
  }

  changeTheme(theme: any = 'default') {
    this.renderer.removeClass(this.document.body, this.currentTheme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.renderer.addClass(this.document.body, theme);
  }
}
