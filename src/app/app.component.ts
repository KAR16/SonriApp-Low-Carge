import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { InicioPage } from '../pages/inicio/inicio';
import { Page2 } from '../pages/page2/page2';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ContactoPage } from '../pages/contacto/contacto';
import { SonrisaurosPage } from '../pages/sonrisauros/sonrisauros';
import { TutorialesPage } from '../pages/tutoriales/tutoriales';
import { ConstelacionesPage } from '../pages/constelaciones/constelaciones';
//import { DetalleConstelacionesPage } from '../pages/detalle-constelaciones/detalle-constelaciones';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any, color: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: InicioPage, color: '#FAFAFA'  },
      { title: 'Herramientas', component: TutorialesPage, color: '#FFF' },
      { title: 'Constelaciones', component: ConstelacionesPage, color: '#FAFAFA' },
      { title: 'Lugares de Visita', component: Page2, color: '#FFF' },
      { title: 'Sonrisauros', component: SonrisaurosPage, color: '#FAFAFA' },
      { title: 'Galería', component: GaleriaPage, color: '#FFF' },
      { title: 'Contáctanos', component: ContactoPage, color: '#FAFAFA' },
      { title: 'Créditos', component: Page2, color: '#FFF' }
    ];

  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.hideSplashScreen();
    });
  }

  hideSplashScreen() {
    if (Splashscreen) {
        setTimeout(() => {
            Splashscreen.hide();
        }, 100);
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
