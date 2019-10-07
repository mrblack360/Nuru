import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public popoverController: PopoverController) {}

  async presentPopover(ev) {
    const popover = await this.popoverController.create({
      component: DatepickerComponent,
      event: ev,
      translucent: true
    });
    document.body.appendChild(popover);
    return popover.present();
  }
}
