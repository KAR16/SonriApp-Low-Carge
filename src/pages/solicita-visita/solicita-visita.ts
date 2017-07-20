import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SolicitaVisita page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-solicita-visita',
  templateUrl: 'solicita-visita.html'
})
export class SolicitaVisitaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitaVisitaPage');
  }

  openForm(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvZ77mKDTigKdGCcxXbTz7kPsbzhx69wkyEMxrXUFN5OKpew/viewform', '_blank', 'location=yes');
  }

}
