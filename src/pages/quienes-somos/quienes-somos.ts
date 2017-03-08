import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuienesSomosPage');
  }

  openPage(){
    console.log("Entré a la función");
    window.open('https://www.facebook.com/FDS.Guatemala/', '_self');
    console.log("Mandé");
  }

}
