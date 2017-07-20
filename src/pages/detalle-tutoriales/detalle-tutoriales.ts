import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-detalle-tutoriales',
  templateUrl: 'detalle-tutoriales.html'
})
export class DetalleTutorialesPage {

  //Arreglo general de Tutoriales
  item;


  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public params: NavParams) {

    //Acá recibo el array de Tutoriales para utilizarlo en la vista
    this.item = params.data.item;
    console.log(this.item);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleTutorialesPage');
  }

}
