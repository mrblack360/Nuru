import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { MorePageComponent } from './pages/more-page/more-page.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public popoverController: PopoverController) {}

  async datePickerPopover(ev) {
    const popover = await this.popoverController.create({
      component: DatepickerComponent,
      event: ev,
      translucent: true
    });
    document.body.appendChild(popover);
    return popover.present();
  }
  async morePagePopover(ev) {
    const popover = await this.popoverController.create({
      component: MorePageComponent,
      event: ev,
      translucent: true
    });
    document.body.appendChild(popover);
    return popover.present();
  }
}
