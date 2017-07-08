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

  //Arreglo del contenido especifico de los tutoriales
  tutoriales=[];


  //Arreglo para los videos de cada herramienta
  videos = [];

  //Variable para generar la carga de los videos
  videoUrl: SafeResourceUrl;


  constructor(private domSanitizer: DomSanitizer, public navCtrl: NavController, public params: NavParams) {

    //Acá recibo el array de Tutoriales para utilizarlo en la vista
    this.item = params.data.item;
    this.tutoriales = this.item.tutorialesCont;

    //Aquí recorro el arreglo de tutoriales y añado en el de videos la cantidad de videos de cada herramienta
    for (var x=0; x<this.tutoriales.length; x++){
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.tutoriales[x].link_tutorial);
        this.videos.push(this.videoUrl);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleTutorialesPage');
  }

}
