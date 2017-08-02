import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { GaleriaPage } from '../galeria/galeria';

/*
  Generated class for the ErrorConexion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-error-conexion',
  templateUrl: 'error-conexion.html'
})
export class ErrorConexionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErrorConexionPage');
  }
  
  dismiss(){
    this.viewCtrl.dismiss();
  }

}
