import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  template:"<p>....loading</p>"
})
export class HomePage {

  constructor(private iab: InAppBrowser,public platform: Platform) {
    platform.ready().then(() => {
      let browser = this.iab.create('https://support.hazox.com', '_blank', {zoom: 'yes', location: 'no'});
      browser.show();


    });
  }
}
