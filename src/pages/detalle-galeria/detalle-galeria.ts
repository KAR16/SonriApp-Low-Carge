import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetalleGaleria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-galeria',
  templateUrl: 'detalle-galeria.html'
})
export class DetalleGaleriaPage {

//Arreglo general de Tutoriales
item;

  constructor(public navCtrl: NavController, public params: NavParams) {
  //Acá recibo el array de Tutoriales para utilizarlo en la vista
  this.item = params.data.item;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleGaleriaPage');
  }

}
