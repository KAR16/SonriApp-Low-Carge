import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Tutoriales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutoriales',
  templateUrl: 'tutoriales.html'
})
export class TutorialesPage {
  herramientas=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.herramientas = [
    {
      'titulo': 'Globoflexia',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/herramientas/globoflexia.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...',
      'color': '#FFF'
    },
    {
      'titulo': 'Malabares',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/malabares.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...',
      'color': '#FAFAFA'
    },
    {
      'titulo': 'Papiroflexia',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/herramientas/Papiroflexia.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...',
      'color': '#FFF'
    },
    {
      'titulo': 'Pintacaritas',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/herramientas/Pintacaritas.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...',
      'color': '#FAFAFA'
    }
  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialesPage');
  }



}
