import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { InicioPage } from '../pages/inicio/inicio';
import { Page2 } from '../pages/page2/page2';
import { PayaescuelaPage } from '../pages/payaescuela/payaescuela';
import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import { NuestraMisionPage } from '../pages/nuestra-mision/nuestra-mision';
import { NuestraHistoriaPage } from '../pages/nuestra-historia/nuestra-historia';
import { SolicitaVisitaPage }  from '../pages/solicita-visita/solicita-visita';
import { TutorialesPage } from '../pages/tutoriales/tutoriales';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: InicioPage },
      { title: 'Payaescuela', component: PayaescuelaPage },
      { title: 'Tutoriales', component: TutorialesPage },
      { title: 'Constelaciones', component: Page2 },
      { title: 'Sedes', component: Page2 },
      { title: 'Eventos', component: Page2 },
      { title: 'Sonrisauros', component: Page2 },
      { title: 'Contactanos', component: Page2 },
      { title: 'Créditos', component: Page2 }
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
