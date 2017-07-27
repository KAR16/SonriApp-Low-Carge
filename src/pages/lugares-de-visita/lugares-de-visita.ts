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
      'nombres': ['Cabecitas de Algodón']
      },
      {
      'departamento':'Coatepeque',
      'nombres': ['Casa Hogar de Ancianos Desamparados Madre Teresa']
      },
      {
      'departamento':'Cobán',
      'nombres': ['Asociación Casa Hogar del Anciano']
      },
      {
      'departamento':'Chiquimula',
      'nombres': ['Asilo de Ancianos La Voz del Prójimo San José La Arada Chiquimula']
      },
      {
      'departamento':'Guatemala',
      'nombres': ['Casa Caleb', 'Casa de Reposo Juan Pablo II', 'Santa Lucía', 'San José de la Montaña', 'Santo Domingo', 'Vista al Valle', 'Villasol', 'Hermanos de Belén',
      'Jardín de los Abuelos', 'Geriátrico de Amor', 'Asilo Migar', 'Momentos Inolvidables', 'Asilo Madre Teresa']
      },
      {
      'departamento':'Jutiapa',
      'nombres': ['Asilo San Juan Bautista', 'Asilo Mitereda']
      },
      {
      'departamento':'Mazatenango',
      'nombres': ['San Vicente de Paúl', 'Asilo Mi Dulce Refugio']
      },
      {
      'departamento':'Queztaltenango',
      'nombres': ['Asilo de Indigentes San José', 'Asilo La Misericordia', 'Asilo Santa Luisa de Marillac']
      },
      {
      'departamento':'Quiché',
      'nombres': ['Asilo Sor Heminia']
      },
      {
      'departamento':'Retalhuleu',
      'nombres': ['Asociación  Civil Dulce Refugio, Ministerio de Ancianos Viviendo Por Fe']
      },
      {
      'departamento':'San Marcos',
      'nombres': ['Asilo Mis Años Dorados', 'Comdedor del Adulto Mayor']
      },
      {
      'departamento':'San Salvador, El Salvador',
      'nombres': ['Asilo Zara Saldivar', 'Hogar San Vicente de Paúl', 'Asilo Santa Mónica', 'Cidadela Julio Ignacio Díaz de Sol']
      },
      {
      'departamento':'Zacapa',
      'nombres': ['Centro de Protección y Abrigo de Zacapa', 'Hogar para Ancianos La Divina Providencia']
      }]
      },
      {
      'titulo': 'Hospitales',
      'imagen': 'assets/img/lugares-de-visita/hospitales.png',
      'listado':[
      {
      'departamento':'Antigua Guatemala',
      'nombres': ['Hospital Nacional Pedro de Betancour', 'IGSS Hemodiálisis']
      },
      {
      'departamento':'Coatepeque',
      'nombres': ['Hospital Regional Juan José Ortega']
      },
      {
      'departamento':'Cobán',
      'nombres': ['Hospital Regional de Cobán Alta Verapaz']
      },
      {'departamento':'Chiquimula',
      'nombres': ['Hospital General Arana Osorio']
      },
      {
      'departamento':'Guatemala',
      'nombres': ['Instituto Guatemalteco de Seguridad Social', 'Instituto Neurológico de Guatemala', 'Hospital Infantil Juan Pablo II']
      },
      {
      'departamento':'Huehuetenango',
      'nombres': ['Hospital Nacional de Huehuetenango', 'Hospital San Martín']
      },
      {
      'departamento':'Jutiapa',
      'nombres': ['Hospital Nacional de Jutiapa', 'Hospitalito Padre Pedro, El Progreso Jutiapa']
      },
      {
      'departamento':'Malacatán',
      'nombres': ['Hospital Nacional Malacatán', 'Sanatorio Sagrada Familia']
      },
      {
      'departamento':'Mazatenango',
      'nombres': ['Hospital Nacional de Mazatenango']
      },
      {
      'departamento':'Queztaltenango',
      'nombres': ['Hospital Regional de Occidente', 'Instituto Guatemalteco de Seguridad Social', 'Longevidad Medical']
      },
      {
      'departamento':'Quiché',
      'nombres': ['Hospital Santa Elena de la Cruz']
      },
      {
      'departamento':'Retalhuleu',
      'nombres': ['Hospital Nacional de Retalhuleu', 'Instituto Guatemalteco de Seguridad Social']
      },
      {
      'departamento':'San Marcos',
      'nombres': ['Hospital Nacional de San Marcos', 'Hospital Comuunitario ROPE Tejutía']
      },
      {
      'departamento':'San Salvador, El Salvador',
      'nombres': ['Hospital Nacional Saldaña', 'Hospital Nacional Rosales', 'Hospital Nacional San Rafael', 'Hospital Divina Providencia']
      },
      {
      'departamento':'Zacapa',
      'nombres': ['Hospital Regional de Zacapa']
      }]
      },
      {
      'titulo': 'Hospicios',
      'imagen': 'assets/img/lugares-de-visita/hospicios.png',
      'listado':[
      {
      'departamento':'Coatepeque',
      'nombres':['Hospicio Santa María']
      },
      {
      'departamento':'Guatemala',
      'nombres': ['Hospicio San José']
      }]
      },
      {
      'titulo': 'Orfanatos',
      'imagen': 'assets/img/lugares-de-visita/orfanatos.png',
      'listado':[
      {
      'departamento':'Guatemala',
      'nombres': ['Abrigo y Bienestar Integral', 'Desarrollo Integral Avanzado DIA', 'Alída España', 'Valle de los Ángeles', 'Anini']
      },
      {
      'departamento':'Huehuetenango',
      'nombres': ['Fundación Salvación']
      },
      {
      'departamento':'San Marcos',
      'nombres': ['Casa de Atención a Niños de la Calle CANICA']
      },
      {
      'departamento':'Zacapa',
      'nombres': ['Hope of Life', 'Casa de Esparanza']
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
