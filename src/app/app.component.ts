import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  template: `<ion-nav root="MenuPage"></ion-nav>`,
  preserveWhitespaces: false
})
export class MyApp {
  constructor(
    public plt: Platform,
    public keyboard: Keyboard,
    public statusbar: StatusBar
  ) {
    this.plt.ready().then(() => {
      this.keyboard.disableScroll(true);
      this.keyboard.hideKeyboardAccessoryBar(true);
      this.statusbar.overlaysWebView(true);
      this.plt.is('ios')
        ? this.statusbar.styleDefault()
        : this.statusbar.styleLightContent();
    });
  }
}
