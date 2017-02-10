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
      'titulo': 'Actuación',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/Actuacion.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...'
    },
    {
      'titulo': 'Globoflexia',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/globoflexia.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...'
    },
    {
      'titulo': 'Malabares',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/malabares.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...'
    },
    {
      'titulo': 'Papiroflexia',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/Papiroflexia.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...'
    },
    {
      'titulo': 'Pintacaritas',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/Pintacaritas.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...'
    },
    {
      'titulo': 'Titeres',
      'subtitulo': 'Dont Know What To Do!',
      'icono': 'assets/img/titeres.png',
      'descripcion': 'Ive had a pretty messed up day. If we just...'
    },
  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialesPage');
  }



}
