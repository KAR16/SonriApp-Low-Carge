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
        'nombres': ['Asilo Madre Teresa', 'Asilo Migar', 'Casa Caleb', 'Casa de Reposo Juan Pablo II', 'Geriátrico de Amor', 'Hermanos de Belén', 'Jardín de los Abuelos', 'Momentos Inolvidables', 'Santo Domingo', 'San José de la Montaña', 'Santa Lucía', 'Villasol', 'Vista al Valle',]
        },
        {
        'departamento':'Jutiapa',
        'nombres': ['Asilo San Juan Bautista', 'Asilo Mitereda']
        },
        {
        'departamento':'Mazatenango',
        'nombres': ['Asilo Mi Dulce Refugio', 'San Vicente de Paúl']
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
        'nombres': ['Asilo Santa Mónica', 'Asilo Zara Saldivar', 'Cidadela Julio Ignacio Díaz de Sol', 'Hogar San Vicente de Paúl']
        },
        {
        'departamento':'Zacapa',
        'nombres': ['Centro de Protección y Abrigo de Zacapa', 'Hogar para Ancianos La Divina Providencia']
        }]
        },
        {
        'titulo': 'Capacidades Diferentes',
        'imagen': 'assets/img/lugares-de-visita/capacidades-diferentes.png',
        'listado':[
        {
        'departamento':'Guatemala',
        'nombres': ['Ciudad Anini', 'Fundabiem', 'Hogar Nazareth', 'Marina Guirola']
        }]
        },
        {
        'titulo': 'Hogares',
        'imagen': 'assets/img/lugares-de-visita/hogares.png',
        'listado':[
        {
        'departamento':'Antigua Guatemala',
        'nombres': [ 'Hogar Madre Anna Vitiello', 'Obras Sociales del Hermano Pedro']
        },
        {
        'departamento':'Chiquimula',
        'nombres': ['Aldeas Infantiles SOS Jocotan']
        },
        {
        'departamento':'Guatemala',
        'nombres': ['Casa Hogar Asol', 'Hogar Luz y Vida', 'Hogar Mamá Lily', 'Hogar de Niñas Santa María Montes', 'Hogar Shalom']
        },
        {
        'departamento':'Huehuetenango',
        'nombres': ['Hogar de Niñas al cuidado de la PGN']
        },
        {
        'departamento':'Mazatenango',
        'nombres': ['Casa Hogar de Niñas FUNDANIÑAS']
        },
        {
        'departamento':'Queztaltenango',
        'nombres': [ 'Aldeas Infantiles SOS', 'Asociación Nuevos Horizontes', 'Hogar del Niño Minusválido Hermano Pedro', 'Hogar Quetzaltenango']
        },
        {
        'departamento':'Retalhuleu',
        'nombres': ['Aldeas Infantiles SOS, Programa Acogimiento  Familiar Retalhuleu']
        },
        {
        'departamento':'San Marcos',
        'nombres': ['Asociación Guisell', 'Bienestar Social San Pedro Sacatepequez']
        },
        {
        'departamento':'San Salvador, El Salvador',
        'nombres': [ 'CIPI-INSA', 'Hogar Adalberto Guirola', 'Hogar de Niños San Vicente de Paúl', 'Hogar Padre Vito Guarato']
        },
        {
        'departamento':'Santa Ana, El Salvador',
        'nombres': ['Aldeas Infantiles SOS', 'Hogar de Ancianos Madre Cecilia Bermejo', 'Hogar de Ancianos Narcisa Castillo', 'Hogar de Ancianas San Vicente de Paúl', 'Hogar de Niñas Moraga']
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
        'nombres': ['Hospital Infantil Juan Pablo II', 'Instituto Guatemalteco de Seguridad Social', 'Instituto Neurológico de Guatemala']
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
        'nombres': ['Hospital Nacional de San Marcos', 'Hospital Comunitario ROPE Tejutía']
        },
        {
        'departamento':'San Salvador, El Salvador',
        'nombres': ['Hospital Divina Providencia', 'Hospital Nacional Saldaña', 'Hospital Nacional San Rafael', 'Hospital Nacional Rosales']
        },
        {
        'departamento':'Zacapa',
        'nombres': ['Hospital Regional de Zacapa']
        }]
        },
        {
        'titulo': 'Orfanatos',
        'imagen': 'assets/img/lugares-de-visita/orfanatos.png',
        'listado':[
        {
        'departamento':'Guatemala',
        'nombres': ['Abrigo y Bienestar Integral', 'Alída España', 'Desarrollo Integral Avanzado DIA', 'Valle de los Ángeles']
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
        'nombres': [ 'Casa de Esparanza', 'Hope of Life']
        }]
        },
        {
        'titulo': 'Psiquiátricos',
        'imagen': 'assets/img/lugares-de-visita/psiquiatricos.png',
        'listado':[
        {
        'departamento':'Guatemala',
        'nombres': ['ABI', 'Federico Mora', 'Neurológico', 'Psiquiátrico zona 18', 'Villa Sol']
        }]
        },
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
