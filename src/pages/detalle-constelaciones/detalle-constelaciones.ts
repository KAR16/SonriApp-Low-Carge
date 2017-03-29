import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetalleConstelaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-constelaciones',
  templateUrl: 'detalle-constelaciones.html'
})
export class DetalleConstelacionesPage {
  item;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleConstelacionesPage');
  }

}
