import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { Page2 } from '../pages/page2/page2';
import { PayaescuelaPage } from '../pages/payaescuela/payaescuela';
import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import { NuestraMisionPage } from '../pages/nuestra-mision/nuestra-mision';
import { NuestraHistoriaPage } from '../pages/nuestra-historia/nuestra-historia';
import { SolicitaVisitaPage } from '../pages/solicita-visita/solicita-visita';
import { DonativoPage } from '../pages/donativo/donativo';
import { TutorialesPage } from '../pages/tutoriales/tutoriales';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    Page2,
    PayaescuelaPage,
    QuienesSomosPage,
    NuestraMisionPage,
    NuestraHistoriaPage,
    SolicitaVisitaPage,
    DonativoPage,
    TutorialesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    Page2,
    PayaescuelaPage,
    QuienesSomosPage,
    NuestraMisionPage,
    NuestraHistoriaPage,
    SolicitaVisitaPage,
    DonativoPage,
    TutorialesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
