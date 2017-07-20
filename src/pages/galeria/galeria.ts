import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { PhotoViewer } from '@ionic-native/photo-viewer';
import { DetalleGaleriaPage } from '../detalle-galeria/detalle-galeria';

/*
  Generated class for the Galeria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',

})
export class GaleriaPage {
  imagenes=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.imagenes = [
    {
      'titulo': 'Actividades',
      'icono': 'assets/img/galeria/icon01.png'
    },
    {
      'titulo': 'Apoyos Especiales',
      'icono': 'assets/img/galeria/icon02.png'
    },
    {
      'titulo': 'Convocatorias',
      'icono': 'assets/img/galeria/icon03.png'
    },
    {
      'titulo': 'Festivales',
      'icono': 'assets/img/galeria/icon04.png'
    },
    {
      'titulo': 'Visitas Especiales',
      'icono': 'assets/img/galeria/icon05.png',
      'imagenCont' : [{
      'nombre_img': 'VE - 01',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE01.jpg'
      },
      {
      'nombre_img': 'VE - 02',
      'link_img' : 'assets/img/galería/visitas_especiales/VE02.jpg'
      },
      {
      'nombre_img': 'VE - 03',
      'link_img' : 'assets/img/galería/visitas_especiales/VE05.jpg'
      },
      {
      'nombre_img': 'VE - 04',
      'link_img' : 'assets/img/galería/visitas_especiales/VE04.jpg'
      },
      {
      'nombre_img': 'VE - 05',
      'link_img' : 'assets/img/galería/visitas_especiales/VE03.jpg'
      },
      {
      'nombre_img': 'VE - 06',
      'link_img' : 'assets/img/galería/visitas_especiales/VE06.jpg'
      },
      {
      'nombre_img': 'VE - 07',
      'link_img' : 'assets/img/galería/visitas_especiales/VE07.jpg'
      },
      {
      'nombre_img': 'VE - 08',
      'link_img' : 'assets/img/galería/visitas_especiales/VE08.jpg'
      },
      {
      'nombre_img': 'VE - 09',
      'link_img' : 'assets/img/galería/visitas_especiales/VE09.jpg'
      },
      {
      'nombre_img': 'VE - 10',
      'link_img' : 'assets/img/galería/visitas_especiales/VE10.jpg'
      },
      {
      'nombre_img': 'VE - 11',
      'link_img' : 'assets/img/galería/visitas_especiales/VE11.jpg'
      },
      {
      'nombre_img': 'VE - 12',
      'link_img' : 'assets/img/galería/visitas_especiales/VE12.jpg'
      }]
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
