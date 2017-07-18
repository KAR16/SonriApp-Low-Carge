import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { IonicImageViewerModule } from 'ionic-img-viewer';
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
import { ImageModalPage } from '../pages/image-modal/image-modal';

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
    ImageModalPage
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
    ImageModalPage
  ],
  providers: [
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
