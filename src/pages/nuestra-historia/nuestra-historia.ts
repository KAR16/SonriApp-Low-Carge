import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { InicioPage } from '..//inicio/inicio';

/*
  Generated class for the NuestraHistoria page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nuestra-historia',
  templateUrl: 'nuestra-historia.html'
})
export class NuestraHistoriaPage {

slides = [
  {
    title: "Welcome to the Docs!",
    description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
    image: "assets/img/ica-slidebox-img-1.png",
  },
  {
    title: "What is Ionic?",
    description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
    image: "assets/img/ica-slidebox-img-2.png",
  },
  {
    title: "What is Ionic Cloud?",
    description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
    image: "assets/img/ica-slidebox-img-3.png",
  }
];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuestraHistoriaPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


}
