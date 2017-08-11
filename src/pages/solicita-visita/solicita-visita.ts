import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Network } from '@ionic-native/network';
import { ErrorConexionPage } from '../error-conexion/error-conexion';

@Component({
  selector: 'page-solicita-visita',
  templateUrl: 'solicita-visita.html'
})
export class SolicitaVisitaPage {

  constructor(private network: Network, public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitaVisitaPage');
  }

  openForm(){
  
    var networkState = this.network.type;
    
    if (networkState !== "none"){
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvZ77mKDTigKdGCcxXbTz7kPsbzhx69wkyEMxrXUFN5OKpew/viewform', '_blank', 'location=yes');
      }else{
        this.navCtrl.push(ErrorConexionPage);
      }
  }

}
