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
  /*Inicializamos el segment de biografía en la vista detalle-constelaciones*/
  info: string = "biografia";

  //Creamos un array en el que guardaremos los datos que vienen como parametro de la vista Sonrisauros
  item;

  //Creamos otro array en el que guardaremos el array de redes sociales
  redesSociales=[];

  constructor(public navCtrl: NavController, public params: NavParams) {

    //Guardamos todo el array de la vista Constelaciones en 'item'
    this.item = params.data.item;

    //Guardamos las redes sociales en el array 'redesSociales'
    this.redesSociales = this.item.redes;

    console.log(this.item);
    console.log(this.redesSociales);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleConstelacionesPage');
  }


  //Esta función es para redirigir a las distintas redes sociales
  openPage(redSocial){

    if(redSocial.nombre_red === "facebook"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
    }
    else if(redSocial.nombre_red === "twitter"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
    }
    else if(redSocial.nombre_red === "instagram"){
      window.open(redSocial.url_red, '_blank', 'location=yes');
    }
  }

  openSite(){
    window.open('http://desonrisas.org/', '_blank', 'location=yes');
  }

  openYoutube(){
    window.open('https://www.youtube.com/user/FDSGuatemala', '_blank', 'location=yes');
  }

}
