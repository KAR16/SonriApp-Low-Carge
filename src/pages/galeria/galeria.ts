import { Component } from '@angular/core';
import { NavController, NavParams, Platform, AlertController, ToastController } from 'ionic-angular';
import { ErrorConexionPage } from '../error-conexion/error-conexion';
import { Network } from '@ionic-native/network';
import { DetalleGaleriaPage } from '../detalle-galeria/detalle-galeria';
//import { Network } from 'ionic-native';

declare var navigator: any;
declare var Connection: any;

@Component({
  selector: 'page-galeria',
  providers: [Platform],
  templateUrl: 'galeria.html',

})
export class GaleriaPage {
  imagenes=[];
  conexion = " ";
  Status: any = '';

  constructor(private toast: ToastController, private network: Network, private platform: Platform, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  
  this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  this.Status = 'Connected';
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('we got a wifi connection, woohoo!');
    }
  }, 3000);
});
  
  this.network.onDisconnect().subscribe(() => {
    console.log('network was disconnected :-(');
    this.Status = 'Disconnected';
  });
  

  this.imagenes = [
    {
      'titulo': 'Actividades',
      'icono': 'assets/img/galeria-iconos/icon01.png',
      'imagenCont' : [{
      'nombre_img': 'VE - 01',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A01.jpg'
      },
      {
      'nombre_img': 'A - 02',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A02.jpg'
      },
      {
      'nombre_img': 'A - 03',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A03.jpg'
      },
      {
      'nombre_img': 'A - 04',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A04.jpg'
      },
      {
      'nombre_img': 'A - 05',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A05.jpg'
      },
      {
      'nombre_img': 'A - 06',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A06.jpg'
      },
      {
      'nombre_img': 'A - 07',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A07.jpg'
      },
      {
      'nombre_img': 'A - 08',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A08.jpg'
      },
      {
      'nombre_img': 'A - 09',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A09.jpg'
      },
      {
      'nombre_img': 'A - 10',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A10.jpg'
      },
      {
      'nombre_img': 'A - 11',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A11.jpg'
      },
      {
      'nombre_img': 'A - 12',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A12.jpg'
      },
      {
      'nombre_img': 'A - 13',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/actividades/A13.jpg'
      }]
    },
    {
      'titulo': 'Apoyos Especiales',
      'icono': 'assets/img/galeria-iconos/icon02.png',
      'imagenCont' : [{
      'nombre_img': 'AE - 01',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE01.jpg'
      },
      {
      'nombre_img': 'AE - 02',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE02.jpg'
      },
      {
      'nombre_img': 'AE - 03',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE03.jpg'
      },
      {
      'nombre_img': 'AE - 04',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE04.jpg'
      },
      {
      'nombre_img': 'AE - 05',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE05.jpg'
      },
      {
      'nombre_img': 'AE - 06',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE06.jpg'
      },
      {
      'nombre_img': 'AE - 07',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE07.jpg'
      },
      {
      'nombre_img': 'AE - 08',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE08.jpg'
      },
      {
      'nombre_img': 'AE - 09',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE09.jpg'
      },
      {
      'nombre_img': 'AE - 10',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE10.jpg'
      },
      {
      'nombre_img': 'AE - 11',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE11.jpg'
      },
      {
      'nombre_img': 'AE - 12',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/apoyos-especiales/AE12.jpg'
      }]
    },
    {
      'titulo': 'Convocatorias',
      'icono': 'assets/img/galeria-iconos/icon03.png',
      'imagenCont' : [{
      'nombre_img': 'C - 01',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C01.jpg'
      },
      {
      'nombre_img': 'C - 02',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C02.jpg'
      },
      {
      'nombre_img': 'C - 03',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C03.jpg'
      },
      {
      'nombre_img': 'C - 04',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C04.jpg'
      },
      {
      'nombre_img': 'C - 05',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C05.jpg'
      },
      {
      'nombre_img': 'C - 06',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C06.jpg'
      },
      {
      'nombre_img': 'C - 07',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C07.jpg'
      },
      {
      'nombre_img': 'C - 08',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C08.jpg'
      },
      {
      'nombre_img': 'C - 09',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C09.jpg'
      },
      {
      'nombre_img': 'C - 10',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C10.jpg'
      },
      {
      'nombre_img': 'C - 11',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C11.jpg'
      },
      {
      'nombre_img': 'C - 12',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C12.jpg'
      },
      {
      'nombre_img': 'C - 13',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C13.jpg'
      },
      {
      'nombre_img': 'C - 14',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C14.jpg'
      },
      {
      'nombre_img': 'C - 15',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C15.jpg'
      },
      {
      'nombre_img': 'C - 16',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/convocatorias/C16.jpg'
      }]
    },
    {
      'titulo': 'Festivales',
      'icono': 'assets/img/galeria-iconos/icon04.png',
      'imagenCont' : [{
      'nombre_img': 'VE - 01',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F01.jpg'
      },
      {
      'nombre_img': 'F - 02',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F02.jpg'
      },
      {
      'nombre_img': 'F - 03',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F03.jpg'
      },
      {
      'nombre_img': 'F - 04',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F04.jpg'
      },
      {
      'nombre_img': 'F - 05',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F05.jpg'
      },
      {
      'nombre_img': 'F - 06',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F06.jpg'
      },
      {
      'nombre_img': 'F - 07',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F07.jpg'
      },
      {
      'nombre_img': 'F - 08',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F08.jpg'
      },
      {
      'nombre_img': 'F - 09',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F09.jpg'
      },
      {
      'nombre_img': 'F - 10',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/festivales/F10.jpg'
      }]
    },
    {
      'titulo': 'Visitas Especiales',
      'icono': 'assets/img/galeria-iconos/icon05.png',
      'imagenCont' : [{
      'nombre_img': 'VE - 01',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE01.jpg'
      },
      {
      'nombre_img': 'VE - 02',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE02.jpg'
      },
      {
      'nombre_img': 'VE - 03',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE03.jpg'
      },
      {
      'nombre_img': 'VE - 04',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE04.jpg'
      },
      {
      'nombre_img': 'VE - 05',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE05.jpg'
      },
      {
      'nombre_img': 'VE - 06',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE06.jpg'
      },
      {
      'nombre_img': 'VE - 07',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE07.jpg'
      },
      {
      'nombre_img': 'VE - 08',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE08.jpg'
      },
      {
      'nombre_img': 'VE - 09',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE09.jpg'
      },
      {
      'nombre_img': 'VE - 10',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE10.jpg'
      },
      {
      'nombre_img': 'VE - 11',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE11.jpg'
      },
      {
      'nombre_img': 'VE - 12',
      'link_img' : 'http://desonrisas.org/images/sonriapp/galeria/visitas-especiales/VE12.jpg'
      }]
    }
  ];
  
    this.platform.ready().then(() => {
          // Now all cordova plugins are ready!
          //alert(network.type);
    });

  }

  ionViewDidLoad() {
    
    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.Status = 'Connected';
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
    
    console.log('ionViewDidLoad GaleriaPage');
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.Status = 'Disconnected';
    });
  
    
    }
    

  //Mando el arreglo de las constelaciones a la vista del detalle de cada una
  detalleGaleria(item) {
    //this.navCtrl.push(ConstelacionesPage);
    this.navCtrl.push(DetalleGaleriaPage, {item:item});
  }
  
  
  checkConnection(item){
    /*console.log('Entre a la funcion');
    this.platform.ready().then(() => {
      var networkState = navigator.connection.type;
      var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';
            let alert = this.alertCtrl.create({
                title: "Connection Status",
                subTitle: states[networkState],
                buttons: ["OK"]
            });
            alert.present();;
            
            // Now all cordova plugins are ready!
            console.log(this.network.type);
            console.log(networkState);
            this.conexion = this.network.type;

            if (this.conexion === 'none' )
            {
              this.navCtrl.push(ErrorConexionPage);
            }
            else{
              this.navCtrl.push(DetalleGaleriaPage, {item:item});
            }
      });*/
      
      this.network.onDisconnect().subscribe(() => {
        console.log('network was disconnected :-(');
        this.Status = 'Disconnected';
      });
  
      this.network.onConnect().subscribe(() => {
        console.log('network connected!');
        this.Status = 'Connected';
        // We just got a connection but we need to wait briefly
         // before we determine the connection type. Might need to wait.
        // prior to doing any api requests as well.
        setTimeout(() => {
          if (this.network.type === 'wifi') {
            console.log('we got a wifi connection, woohoo!');
          }
        }, 3000);
      });
      
      if(this.Status == 'Disconnected'){
        this.navCtrl.push(ErrorConexionPage);
      }
      else if (this.Status == 'Connected'){
        this.navCtrl.push(DetalleGaleriaPage, {item:item});
      }
  }

}
