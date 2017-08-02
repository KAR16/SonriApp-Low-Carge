import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
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
import { CreditosPage } from '../pages/creditos/creditos';
import { ErrorConexionPage } from '../pages/error-conexion/error-conexion';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
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
    DetalleLugaresDeVisitaPage,
    CreditosPage,
    ErrorConexionPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
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
    DetalleLugaresDeVisitaPage,
    CreditosPage,
    ErrorConexionPage
  ],
  providers: [
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  Network
  ]
})
export class AppModule {}
