import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular/standalone';
import { SettingsService } from '../shared/services/settings/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  items: any;

  constructor(
    private readonly _actionCtrl: ActionSheetController,
    private readonly _settingService: SettingsService
  ) {
    this.setItems();
  }

  setItems() {
    this.items = [
      {
        label: 'Other Settings',
        showChildren: true,
        children: [
          {
            label: 'Change Theme',
            icon:
              this._settingService.currentTheme == 'default'
                ? 'moon-outline'
                : 'sunny-outline',
            handler: async () => {
              if (this._settingService.currentTheme == 'default') {
                const action = this._actionCtrl.create({
                  header: "You're about to change to dark theme. Are you sure?",
                  buttons: [
                    {
                      text: 'Yes',
                      role: 'confirm',
                      handler: async () => {
                        this._settingService.changeTheme('dark');
                      },
                    },
                    {
                      text: 'No',
                      role: 'cancel',
                    },
                  ],
                });
                (await action).present();
              } else {
                const action = this._actionCtrl.create({
                  header:
                    "You're about to change to light theme. Are you sure?",
                  buttons: [
                    {
                      text: 'Yes',
                      role: 'confirm',
                      handler: async () => {
                        this._settingService.changeTheme('default');
                      },
                    },
                    {
                      text: 'No',
                      role: 'cancel',
                    },
                  ],
                });
                (await action).present();
              }
            },
          },
          {
            label: 'Help & Support',
            icon: 'help-circle-outline',
            handler: () => {
              window.open('https://www.maswimr.website/', '_system');
            },
          },
          {
            label: 'About Us',
            icon: 'information-circle-outline',
            handler: () => {
              window.open('https://www.maswimr.website/', '_system');
            },
          },
          {
            label: 'Terms & Conditions',
            icon: 'list-circle-outline',
            handler: () => {
              window.open('https://www.maswimr.website/', '_system');
            },
          },
        ],
      },
    ];
  }
}
