import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ContactoPage } from '../pages/contacto/contacto';
import { SonrisaurosPage } from '../pages/sonrisauros/sonrisauros';
import { TutorialesPage } from '../pages/tutoriales/tutoriales';
import { ConstelacionesPage } from '../pages/constelaciones/constelaciones';
import { LugaresDeVisitaPage } from '../pages/lugares-de-visita/lugares-de-visita';
import { CreditosPage } from '../pages/creditos/creditos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any, color: string, general: string, icon_color: string}>;

  constructor(private splashScreen: SplashScreen, public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: InicioPage, color: '#FAFAFA', general: 'md-home', icon_color: 'inicio' },
      { title: 'Herramientas', component: TutorialesPage, color: '#FFF', general: 'ios-construct', icon_color: 'herramienta' },
      { title: 'Constelaciones', component: ConstelacionesPage, color: '#FAFAFA', general: 'planet', icon_color: 'constelaciones' },
      { title: 'Lugares de Visita', component: LugaresDeVisitaPage, color: '#FFF', general: 'pin', icon_color: 'lugar' },
      { title: 'Sonrisaurios', component: SonrisaurosPage, color: '#FAFAFA', general: 'ios-people', icon_color: 'sonrisauros' },
      { title: 'Galería', component: GaleriaPage, color: '#FFF', general: 'images', icon_color: 'galeria' },
      { title: 'Contáctanos', component: ContactoPage, color: '#FAFAFA', general: 'ionitron', icon_color: 'primary' },
      { title: 'Créditos', component: CreditosPage, color: '#FFF', general: 'ios-information-circle', icon_color: 'creditos' }
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
