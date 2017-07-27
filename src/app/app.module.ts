import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { Page2 } from '../pages/page2/page2';
import { SeUnVoluntarioPage } from '../pages/se-un-voluntario/se-un-voluntario';
import { QuienesSomosPage } from '../pages/quienes-somos/quienes-somos';
import { NuestraMisionPage } from '../pages/nuestra-mision/nuestra-mision';
import { NuestraHistoriaPage } from '../pages/nuestra-historia/nuestra-historia';
import { SolicitaVisitaPage } from '../pages/solicita-visita/solicita-visita';
import { DonativoPage } from '../pages/donativo/donativo';
import { TutorialesPage } from '../pages/tutoriales/tutoriales';
import { ConstelacionesPage } from '../pages/constelaciones/constelaciones';
import { DetalleConstelacionesPage } from '../pages/detalle-constelaciones/detalle-constelaciones';
import { DetalleTutorialesPage } from '../pages/detalle-tutoriales/detalle-tutoriales';
import { GaleriaPage } from '../pages/galeria/galeria';
import { DetalleGaleriaPage } from '../pages/detalle-galeria/detalle-galeria';
import { ContactoPage } from '../pages/contacto/contacto';
import { ImageModalPage } from '../pages/image-modal/image-modal';
import { SonrisaurosPage } from '../pages/sonrisauros/sonrisauros';
import { DetalleSonrisaurosPage } from '../pages/detalle-sonrisauros/detalle-sonrisauros';
import { LugaresDeVisitaPage } from '../pages/lugares-de-visita/lugares-de-visita';
import { DetalleLugaresDeVisitaPage } from '../pages/detalle-lugares-de-visita/detalle-lugares-de-visita';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    Page2,
    SeUnVoluntarioPage,
    QuienesSomosPage,
    NuestraMisionPage,
    NuestraHistoriaPage,
    SolicitaVisitaPage,
    DonativoPage,
    TutorialesPage,
    ConstelacionesPage,
    DetalleConstelacionesPage,
    DetalleTutorialesPage,
    GaleriaPage,
    DetalleGaleriaPage,
    ImageModalPage,
    ContactoPage,
    SonrisaurosPage,
    DetalleSonrisaurosPage,
    LugaresDeVisitaPage,
    DetalleLugaresDeVisitaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    Page2,
    SeUnVoluntarioPage,
    QuienesSomosPage,
    NuestraMisionPage,
    NuestraHistoriaPage,
    SolicitaVisitaPage,
    DonativoPage,
    TutorialesPage,
    ConstelacionesPage,
    DetalleConstelacionesPage,
    DetalleTutorialesPage,
    GaleriaPage,
    DetalleGaleriaPage,
    ImageModalPage,
    ContactoPage,
    SonrisaurosPage,
    DetalleSonrisaurosPage,
    LugaresDeVisitaPage,
    DetalleLugaresDeVisitaPage
  ],
  providers: [
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
