import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MorePageComponent } from './pages/more-page/more-page.component';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  myDate: Date;
  constructor(
    public popoverController: PopoverController,
    private datePicker: DatePicker,
    public datePipe: DatePipe,
    public platform: Platform
  ) {}
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
