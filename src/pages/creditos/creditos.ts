import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-creditos',
  templateUrl: 'creditos.html'
})

export class CreditosPage {
  miembros=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.miembros = [
    {
      'nombre_doctor': 'Dr. Chow Chow',
      'nombre_civil': 'Elmer Moreno',
      'roll': 'Desarrollador',
      'foto': 'assets/img/general/elmer.jpg',
      'datos': '<h1>Dr. Chow Chow</h1><h2>Elmer Moreno</h2><h3>Desarrollador</h3>'
    },
    {
      'nombre_doctor': 'Dr. Gallade',
      'nombre_civil': 'Kevin Herrera',
      'roll': 'Desarrollador',
      'foto': 'assets/img/general/kevin.jpg',
      'datos': '<h1>Dr. Chow Chow</h1><h2>Elmer Moreno</h2><h3>Desarrollador</h3>'
    },
    {
      'nombre_civil': 'Alan Piedrasanta',
      'roll': 'Diseñador',
      'foto': 'assets/img/general/alan-2.jpg',
      'datos': '<h1>Dr. Chow Chow</h1><h2>Elmer Moreno</h2><h3>Desarrollador</h3>'
    }];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditosPage');
  }

}
