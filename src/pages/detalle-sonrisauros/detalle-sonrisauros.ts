import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetalleSonrisauros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-sonrisauros',
  templateUrl: 'detalle-sonrisauros.html'
})
export class DetalleSonrisaurosPage {

  //Iniciamos el segment con los datos de los Sonrisauros en la vista Detalle-Sonrisauros
  info: string = "datos";

  //Creamos un array en el que guardaremos los datos que vienen como parametro de la vista Sonrisauros
  item;

  constructor(public navCtrl: NavController, public params: NavParams) {

  //Guardamos todo el array de la vista Sonrisauros en 'item'
  this.item = params.data.item;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleSonrisaurosPage');
  }

}
