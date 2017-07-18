import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the ImageModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-image-modal',
  templateUrl: 'image-modal.html'
})
export class ImageModalPage {

  item;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {
  this.item = params.data.item;
  console.log(this.item);
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ImageModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
