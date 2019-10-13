import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MorePageComponent } from './pages/more-page/more-page.component';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { QuarteryService } from './../services/quartery.service';
import { Quarterly } from 'src/shared/interfaces/quarterly';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  quarteries: Quarterly;
  quarterColor: string;
  constructor(
    public popoverController: PopoverController,
    private datePicker: DatePicker,
    public datePipe: DatePipe,
    public platform: Platform,
    public quarteries$: QuarteryService
  ) {}
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.quarteries$
      .getQuarteries()
      .subscribe(quarteries => (this.quarteries = quarteries));
    this.quarterColor = this.quarteries.quarterColor;
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
