import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Device, AppAvailability, InAppBrowser } from 'ionic-native';

/*
  Generated class for the QuienesSomos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quienes-somos',
  templateUrl: 'quienes-somos.html'
})
export class QuienesSomosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public platform: Platform) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuienesSomosPage');
  }

  /*openPage(red){
  this.platform.ready().then(() => {
          InAppBrowser.show('https://www.facebook.com/FDS.Guatemala/', "_blank", "location=true");
      });
  }*/

  openPage(red){
    console.log("Entré a la función");
    if(red === "facebook"){
      //window.open = InAppBrowser.open('https://www.facebook.com/FDS.Guatemala/', '_blank', 'location=yes');
      /*let browser = new InAppBrowser('https://www.facebook.com/FDS.Guatemala/', '_blank', 'location=yes');
      browser.show();
      browser.close();*/
      window.open('https://www.facebook.com/FDS.Guatemala/', '_blank', 'location=true');
      console.log("Mandé");
    }
    else if(red === "twitter"){
      window.open('https://twitter.com/fds_guate', '_blank', 'location=yes');
      console.log("Mandé");
    }
    else if(red === "instagram"){
      window.open('https://www.instagram.com/fdsguate/', '_blank', 'location=yes');
      console.log("Mandé");
    }
    else if(red === "youtube"){
      window.open('https://www.youtube.com/user/FDSGuatemala', '_blank', 'location=yes');
      console.log("Mandé");
    }
  }



  /*onDeviceReady() {

        let app="";

        // Don't forget to add the org.apache.cordova.device plugin!
        if(Device.platform === 'iOS') {
            app = 'twitter://';
        }
        else if(Device.platform === 'Android') {
            app = 'com.twitter.android';
        }

        AppAvailability.check(app)
          .then(
            (yes: string) => console.log(app + ' is available'),
            (no: string) => console.log(app + ' is NOT available')
        );

    }*/

}
