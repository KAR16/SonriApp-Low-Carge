import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { NuestraMisionPage } from '../nuestra-mision/nuestra-mision';
import { NuestraHistoriaPage } from '../nuestra-historia/nuestra-historia';
import { SeUnVoluntarioPage } from '../se-un-voluntario/se-un-voluntario';
import { SolicitaVisitaPage } from '../solicita-visita/solicita-visita';
import { DonativoPage } from '../donativo/donativo';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})

export class InicioPage {
  items = [];

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public navCtrl: NavController) {
  this.items = [
    {
      'titulo': '¿Quiénes',
      'subtitulo': 'Somos?',
      'imagen': 'assets/img/inicio/inicio01.png',
      'vista': 'QuienesSomosPage'
    },
    {
      'titulo': 'Nuestra',
      'subtitulo': 'Misión',
      'imagen': 'assets/img/inicio/inicio02.png',
      'vista': 'NuestraMisionPage'
    },
    {
      'titulo': 'Nuestra',
      'subtitulo': 'Historia',
      'imagen': 'assets/img/inicio/inicio03.png',
      'vista': 'NuestraHistoriaPage'
    },
    {
      'titulo': 'Sé Un',
      'subtitulo': 'Voluntario',
      'imagen': 'assets/img/inicio/inicio04.png',
      'vista': 'SeUnVoluntarioPage'
    },
    {
      'titulo': 'Solicita',
      'subtitulo': 'Una Visita',
      'imagen': 'assets/img/inicio/inicio05.png',
      'vista': 'SolicitaVisitaPage'
    },
    {
      'titulo': 'Haz',
      'subtitulo': 'Un Donativo',
      'imagen': 'assets/img/inicio/inicio06.png',
      'vista': 'DonativoPage'
    },
  ];
}

open(item){
  if (item.vista == 'QuienesSomosPage' ){
    this.navCtrl.push(QuienesSomosPage);
  }
  else if(item.vista == 'NuestraMisionPage' ){
    this.navCtrl.push(NuestraMisionPage);
  }
  else if(item.vista == 'NuestraHistoriaPage' ){
    this.navCtrl.push(NuestraHistoriaPage);
  }
  else if(item.vista == 'SeUnVoluntarioPage' ){
    this.navCtrl.push(SeUnVoluntarioPage);
  }
  else if(item.vista == 'SolicitaVisitaPage' ){
    this.navCtrl.push(SolicitaVisitaPage);
  }
  else if(item.vista == 'DonativoPage' ){
    this.navCtrl.push(DonativoPage);
  }
}

}
