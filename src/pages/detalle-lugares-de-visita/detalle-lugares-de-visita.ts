import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetalleLugaresDeVisita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalle-lugares-de-visita',
  templateUrl: 'detalle-lugares-de-visita.html'
})
export class DetalleLugaresDeVisitaPage {
  item;
  lugares=[];
  nombre_lugares=[];

  constructor(public navCtrl: NavController, public params: NavParams) {
    
    //Acá recibo el array de Lugares de Visita para utilizarlo en la vista
    this.item = params.data.item;
    this.lugares = this.item.listado;
    //this.nombre_lugares = this.lugares.nombres;
    console.log(this.item);
    console.log(this.lugares);
    console.log(this.nombre_lugares)
    
    console.log(this.lugares[0].departamento);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLugaresDeVisitaPage');
  }

}
