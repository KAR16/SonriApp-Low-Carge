import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { NuestraMisionPage } from '../nuestra-mision/nuestra-mision';
import { NuestraHistoriaPage } from '../nuestra-historia/nuestra-historia';
import { SolicitaVisitaPage } from '../solicita-visita/solicita-visita';
import { DonativoPage } from '../donativo/donativo';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})

export class InicioPage {
  items = [];

  constructor(public navCtrl: NavController) {
  this.items = [
    {
      'titulo': '¿Quiénes',
      'subtitulo': 'Somos?',
      'imagen': 'assets/img/card-saopaolo.png',
      'vista': 'QuienesSomosPage'
    },
    {
      'titulo': 'Nuestra',
      'subtitulo': 'Misión',
      'imagen': 'assets/img/card-amsterdam.png',
      'vista': 'NuestraMisionPage'
    },
    {
      'titulo': 'Nuestra',
      'subtitulo': 'Historia',
      'imagen': 'assets/img/card-sf.png',
      'vista': 'NuestraHistoriaPage'
    },
    {
      'titulo': 'Se Un',
      'subtitulo': 'Voluntario',
      'imagen': 'assets/img/card-amsterdam.png',
      'vista': 'V'
    },
    {
      'titulo': 'Solicitanos',
      'subtitulo': 'Una Visita',
      'imagen': 'assets/img/card-madison.png',
      'vista': 'SolicitaVisitaPage'
    },
    {
      'titulo': 'Has',
      'subtitulo': 'Un Donativo',
      'imagen': 'assets/img/card-sf.png',
      'vista': 'DonativoPage'
    },
  ];
}

open(item){
  console.log("Hola " + item.vista);
  if (item.vista == 'QuienesSomosPage' ){
    this.navCtrl.push(QuienesSomosPage);
  }
  else if(item.vista == 'NuestraMisionPage' ){
    this.navCtrl.push(NuestraMisionPage);
  }
  else if(item.vista == 'NuestraHistoriaPage' ){
    this.navCtrl.push(NuestraHistoriaPage);
  }
  else if(item.vista == 'SolicitaVisitaPage' ){
    this.navCtrl.push(SolicitaVisitaPage);
  }
  else if(item.vista == 'DonativoPage' ){
    this.navCtrl.push(DonativoPage);
  }
}

}
