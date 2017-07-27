import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleLugaresDeVisitaPage } from '../detalle-lugares-de-visita/detalle-lugares-de-visita';

/*
  Generated class for the LugaresDeVisita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lugares-de-visita',
  templateUrl: 'lugares-de-visita.html'
})
export class LugaresDeVisitaPage {

  lugares = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lugares = [
      {
      'titulo': 'Asilos',
      'imagen': 'assets/img/lugares-de-visita/asilos.png',
      'listado':[
      {
      'departamento':'Antigua Guatemala',
      'nombres':['Cabecitas de Algodón', 'item2', 'item3']
      },
      {
      'departamento':'Coatepeque',
      'nombres':['Casa Hogar Madre Teresa']
      }]
      },
      {
      'titulo': 'Hospitales',
      'imagen': 'assets/img/lugares-de-visita/hospitales.png',
      'listado':[
      {
      'departamento':'Antigua Guatemala',
      'nombres':['Cabecitas de Algodón', 'item2', 'item3']
      },
      {
      'departamento':'Coatepeque',
      'nombres':['Casa Hogar Madre Teresa']
      }]
      },
      {
      'titulo': 'Hospicios',
      'imagen': 'assets/img/lugares-de-visita/hospicios.png',
      'listado':[
      {
      'departamento':'Antigua Guatemala',
      'nombres':['Cabecitas de Algodón', 'item2', 'item3']
      },
      {
      'departamento':'Coatepeque',
      'nombres':['Casa Hogar Madre Teresa']
      }]
      },
      {
      'titulo': 'Orfanatos',
      'imagen': 'assets/img/lugares-de-visita/orfanatos.png',
      'listado':[
      {
      'departamento':'Antigua Guatemala',
      'nombres':['Cabecitas de Algodón', 'item2', 'item3']
      },
      {
      'departamento':'Coatepeque',
      'nombres':['Casa Hogar Madre Teresa']
      }]
      }
    ];
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresDeVisitaPage');
  }
  
  //Mando el arreglo de los lugares de visita a la vista del detalle de cada una
  detalleLugaresVisita(item) {
    this.navCtrl.push(DetalleLugaresDeVisitaPage, {item:item});
  }

}
