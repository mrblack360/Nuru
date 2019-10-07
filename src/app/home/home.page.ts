import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor() {}

  presentPopover(ev) {
    const popover = Object.assign(document.createElement('ion-popover'), {
      component: 'popover-example-page',
      event: ev,
      translucent: true
    });
    document.body.appendChild(popover);
    return popover.present();
  }
}
