import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ImageModalPage } from '../image-modal/image-modal';

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
imagenes=[];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public params: NavParams) {
  //Acá recibo el array de Tutoriales para utilizarlo en la vista
  this.item = params.data.item;
  this.imagenes = this.item.imagenCont;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleGaleriaPage');
  }

  openImage(item) {
      console.log(item);
      let modal = this.modalCtrl.create(ImageModalPage, {item:item});
      modal.present();
      //this.photoViewer.show('assets/img/galería/visitas_especiales/VE03.jpg');
  }

}
