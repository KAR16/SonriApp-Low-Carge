import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ImageModalPage } from '../image-modal/image-modal';
import { ErrorConexionPage } from '../error-conexion/error-conexion';
import { Network } from '@ionic-native/network';

@Component({
  selector: 'page-detalle-galeria',
  templateUrl: 'detalle-galeria.html'
})
export class DetalleGaleriaPage {

//Arreglo general de Tutoriales
item;
imagenes=[];

  constructor(private network: Network, public modalCtrl: ModalController, public navCtrl: NavController, public params: NavParams) {
  //Acá recibo el array de Tutoriales para utilizarlo en la vista
  this.item = params.data.item;
  this.imagenes = this.item.imagenCont;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleGaleriaPage');
  }

  openImage(item) {
      var networkState = this.network.type;
      
      if (networkState !== "none"){
        console.log(item);
        let modal = this.modalCtrl.create(ImageModalPage, {item:item});
        modal.present();
      }else{
        this.navCtrl.push(ErrorConexionPage);
      }
  }

}
