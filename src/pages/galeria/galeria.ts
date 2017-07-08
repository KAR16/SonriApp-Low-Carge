import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleGaleriaPage } from '../detalle-galeria/detalle-galeria';

/*
  Generated class for the Galeria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html'
})
export class GaleriaPage {
  imagenes=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.imagenes = [
    {
      'titulo': 'Actividades',
      'icono': 'assets/img/herramientas/globoflexia.png'
    },
    {
      'titulo': 'Apoyos Especiales',
      'icono': 'assets/img/herramientas/malabares.png'
    },
    {
      'titulo': 'Convocatorias',
      'icono': 'assets/img/herramientas/Papiroflexia.png'
    },
    {
      'titulo': 'Festivales',
      'icono': 'assets/img/herramientas/Pintacaritas.png'
    },
    {
      'titulo': 'Visitas Especiales',
      'icono': 'assets/img/herramientas/Pintacaritas.png'
    }
  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GaleriaPage');
  }

  //Mando el arreglo de las constelaciones a la vista del detalle de cada una
  detalleGaleria(item) {
    //this.navCtrl.push(ConstelacionesPage);
    this.navCtrl.push(DetalleGaleriaPage, {item:item});
  }

}
