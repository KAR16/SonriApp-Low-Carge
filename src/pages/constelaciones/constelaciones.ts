import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleConstelacionesPage } from '../detalle-constelaciones/detalle-constelaciones';

@Component({
  selector: 'page-constelaciones',
  templateUrl: 'constelaciones.html'
})
export class ConstelacionesPage {

  constelaciones=[];
  /*{
  'nombre_red': 'sitio',
  'icon_red': 'md-globe',
  'color_red': 'youtube',
  'url_red': 'http://desonrisas.org/'},*/

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.constelaciones = [
    {
      'nombre_const': 'Draco',
      'img_const': 'assets/img/sedes/draco.png',
      'color_const': 'Rojo',
      'cod_color': '#FE0000',
      'nacimiento': 'Junio 2009',
      'fecha': new Date(2009, 5, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [
      {
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Dragón',
      'nombre_mascota': 'Drake',
      'img_mascota': 'assets/img/mascotas/drake.png',
      'lema': 'Vibra positiva',
      'text_color': '#FFF',
      'historia': 'Estando reunidos en la primera sede de Fábrica de Sonrisas, por el crecimiento que estaba teniendo el grupo de voluntarios deciden crear “Constelaciones”. Los voluntarios de ese momento fueron separados en grupos y quedaron juntos la Dra. Colores, el Dr. Nano y la Dra. Mica, cuando les dijeron que pensaran en un nombre para su grupo, los tres coincidieron en el dragón, porque sería una buena forma de representar la fuerza del espíritu, convirtiéndose así en la “Constelación Draco”, la que se distinguía por su alegría y buena onda entre ellos. Surgiendo por eso su lema “Vibra Positiva”. Tres días después de nacer la constelación, nació también la mascota: Drake. En principio las playeras de la constelación representaban la cola de Drake, pero posteriormente, cuando la payaescuela empezó a realizarse en el parque la Democracia, la constelación se albergó cerca de uno de los árboles, al que nosotros le llamamos árbol de la sabiduría, volviéndose parte importante de la historia de la constelación a tal punto que este aparece en los diseños de las playeras que la representaban. Su primer director fue el Dr. Fantasía.'
    },
    {
      'nombre_const': 'Fénix',
      'img_const': 'assets/img/sedes/fenix.png',
      'color_const': 'Amarillo',
      'cod_color': '#FFFF38',
      'nacimiento': 'Junio 2009',
      'fecha': new Date(2009, 5, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Fénix',
      'nombre_mascota': 'Flamito',
      'img_mascota': 'assets/img/mascotas/flamito.png',
      'lema': 'Tengo el corazón de fuego y creo en los sueños',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Unicornio',
      'img_const': 'assets/img/sedes/unicornio.png',
      'color_const': 'Turquesa',
      'cod_color': '#03FFFE',
      'nacimiento': 'Junio 2009',
      'fecha': new Date(2009, 5, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Unicornio',
      'nombre_mascota': 'Chuby',
      'img_mascota': 'assets/img/mascotas/chuby.png',
      'lema': 'La imaginación es el límite',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Camaleón',
      'img_const': 'assets/img/sedes/camaleon.png',
      'color_const': 'Blanco',
      'cod_color': '#FFF',
      'nacimiento': 'Julio 2011',
      'fecha': new Date(2011, 6, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Camaleón',
      'nombre_mascota': 'Duf',
      'img_mascota': 'assets/img/mascotas/duf.png',
      'lema': '-',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Batz',
      'img_const': 'assets/img/sedes/batz.png',
      'color_const': 'Café',
      'cod_color': '#4F2B15',
      'nacimiento': 'Julio 2011',
      'fecha': new Date(2011, 6, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Mono',
      'nombre_mascota': 'Wirik',
      'img_mascota': 'assets/img/mascotas/wirik.png',
      'lema': 'Tu eres el inicio de tus sueños y el límite de tu destino',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Ursus',
      'img_const': 'assets/img/sedes/ursus.png',
      'color_const': 'Azul Marino',
      'cod_color': '#000022',
      'nacimiento': 'Enero 2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Guatemala, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Osa',
      'nombre_mascota': 'Nuru',
      'img_mascota': 'assets/img/mascotas/nuru.png',
      'lema': 'La fuerza sale del corazón',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Crux del Sur',
      'img_const': 'assets/img/sedes/crux_del_sur.png',
      'color_const': 'Verde Grama',
      'cod_color': '#008804',
      'nacimiento': '2009',
      'fecha': new Date(2009, 0, 1),
      'sede': 'Coatepeque, Guatemala',
      'redes' : [{
      'nombre_red': 'facebook',
      'icon_red': 'logo-facebook',
      'color_red': 'facebook',
      'url_red': 'https://www.facebook.com/FDS.Guatemala/'
      },
      {
      'nombre_red': 'twitter',
      'icon_red': 'logo-twitter',
      'color_red': 'twitter',
      'url_red': 'https://twitter.com/fds_guate'
      },
      {
      'nombre_red': 'instagram',
      'icon_red': 'logo-instagram',
      'color_red': 'instagram',
      'url_red': 'https://www.instagram.com/fdsguate/'
      },
      {
      'nombre_red': 'youtube',
      'icon_red': 'logo-youtube',
      'color_red': 'youtube',
      'url_red': 'https://www.youtube.com/user/FDSGuatemala'
      }],
      'mascota': 'Culebra',
      'nombre_mascota': 'Cruxito',
      'img_mascota': 'assets/img/mascotas/cruxito.png',
      'lema': 'El amor nos une',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Orión',
      'img_const': 'assets/img/sedes/orion.png',
      'color_const': 'Naranja',
      'cod_color': '#FF7900',
      'nacimiento': '2009',
      'fecha': new Date(2009, 0, 1),
      'sede': 'San Salvador, El Salvador',
      'mascota': 'Niño',
      'nombre_mascota': 'Regil',
      'img_mascota': 'assets/img/mascotas/regil.png',
      'lema': 'Orión ilumina con sonrisas tu corazón',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Pegasus',
      'img_const': 'assets/img/sedes/pegasus.png',
      'color_const': 'Gris',
      'cod_color': '#959595',
      'nacimiento': 'Junio 2010',
      'fecha': new Date(2010, 5, 1),
      'sede': 'Jalapa, Guatemala',
      'mascota': 'Pegaso',
      'nombre_mascota': 'Ras',
      'img_mascota': 'assets/img/mascotas/ras.png',
      'lema': 'Dejando huellas de amor',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Balam',
      'img_const': 'assets/img/sedes/balam.png',
      'color_const': 'Morado',
      'cod_color': '#B500BC',
      'nacimiento': 'Noviembre 2010',
      'fecha': new Date(2010, 10, 1),
      'sede': 'Quetzaltenango, Guatemala',
      'mascota': 'Jaguar',
      'nombre_mascota': 'Kawi',
      'img_mascota': 'assets/img/mascotas/kawi.png',
      'lema': 'Dejando huella',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Leo',
      'img_const': 'assets/img/sedes/leo.png',
      'color_const': 'Verde fosforecente',
      'cod_color': '#12FF01',
      'nacimiento': 'Marzo 2011',
      'fecha': new Date(2011, 2, 1),
      'sede': 'Chiquimula, Guatemala',
      'mascota': 'León',
      'nombre_mascota': 'Leonardo',
      'img_mascota': 'assets/img/mascotas/leo.png',
      'lema': 'La risa es algo serio',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Áquila',
      'img_const': 'assets/img/sedes/aquila.png',
      'color_const': 'Negro',
      'cod_color': '#323232',
      'nacimiento': 'Junio 2011',
      'fecha': new Date(2011, 5, 1),
      'sede': 'Cobán, Guatemala',
      'mascota': 'Aguila',
      'nombre_mascota': 'Chahim',
      'img_mascota': 'assets/img/mascotas/chahim.png',
      'lema': 'La sonrisa y la alegría es nuestro idioma universal',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Picis',
      'img_const': 'assets/img/sedes/picis.png',
      'color_const': 'Aqua',
      'cod_color': '#00F1C6',
      'nacimiento': 'Septiembre 2011',
      'fecha': new Date(2011, 8, 1),
      'sede': 'Zacapa, Guatemala',
      'mascota': 'Delfines',
      'nombre_mascota': 'Sonri y Sueños',
      'img_mascota': 'assets/img/mascotas/sonri_sueños.png',
      'lema': 'De los amigos siempre cerca',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Keh',
      'img_const': 'assets/img/sedes/keh.png',
      'color_const': 'Beige',
      'cod_color': '#E3A745',
      'nacimiento': '2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Mazatenango, Guatemala',
      'mascota': 'Venado',
      'nombre_mascota': 'Venadin',
      'img_mascota': 'assets/img/mascotas/venadin.png',
      'lema': 'Un salto de amor y felicidad',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Taurus',
      'img_const': 'assets/img/sedes/taurus.png',
      'color_const': 'Fucsia',
      'cod_color': '#FF00C0',
      'nacimiento': '2012',
      'fecha': new Date(2012, 0, 1),
      'sede': 'Retalhuleu, Guatemala',
      'mascota': 'Toro',
      'nombre_mascota': 'Torivio',
      'img_mascota': 'assets/img/mascotas/torivio.png',
      'lema': 'Una embestida de amor',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Cisne',
      'img_const': 'assets/img/sedes/cisne.png',
      'color_const': 'Rosado',
      'cod_color': '#FF84BD',
      'nacimiento': '2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Santa Ana, Guatemala',
      'mascota': 'Cisne',
      'nombre_mascota': 'Whip',
      'img_mascota': 'assets/img/mascotas/whip.png',
      'lema': 'Sonreimos con pasión para alegrar tu corazón',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Scutum',
      'img_const': 'assets/img/sedes/scutum.png',
      'color_const': 'Azul Pavo',
      'cod_color': '#0170C1',
      'nacimiento': '2013',
      'fecha': new Date(2013, 0, 1),
      'sede': 'Antigua Guatemala, Guatemala',
      'mascota': 'Guacamaya',
      'nombre_mascota': 'Qinich',
      'img_mascota': 'assets/img/mascotas/qinich.png',
      'lema': 'Nuestras sonrisas, el mejor escudo',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Andromeda',
      'img_const': 'assets/img/sedes/andromeda.png',
      'color_const': 'Vinotinto',
      'cod_color': '#CD0043',
      'nacimiento': 'Marzo 2014',
      'fecha': new Date(2014, 2, 1),
      'sede': 'San Marcos, Guatemala',
      'mascota': 'Quetzal',
      'nombre_mascota': 'Gugú',
      'img_mascota': 'assets/img/mascotas/gugu.png',
      'lema': 'Pintando el mundo de amor y alegría',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Centaurus',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Amarillo Mostaza',
      'cod_color': '#FFC300',
      'nacimiento': 'Junio 2014',
      'fecha': new Date(2014, 5, 1),
      'sede': 'Huehuetenango, Guatemala',
      'mascota': 'Centauro',
      'nombre_mascota': 'Kentaury',
      'img_mascota': 'assets/img/mascotas/fella.png',
      'lema': 'Como luz y alegría, nuestro amor dibuja una sonrisa día tras día',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Scorpius',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Verde Limón',
      'cod_color': '#C2DA00',
      'nacimiento': 'Noviembre 2014',
      'fecha': new Date(2014, 10, 1),
      'sede': 'Sololá, Guatemala',
      'mascota': 'Escorpión',
      'nombre_mascota': 'Baxter',
      'img_mascota': 'assets/img/mascotas/fella.png',
      'lema': 'Inyectando gotas de amor',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Lobo',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Lila',
      'cod_color': '#C979F2',
      'nacimiento': 'Marzo 2015',
      'fecha': new Date(2015, 2, 1),
      'sede': 'Jutiapa, Guatemala',
      'mascota': 'Lobo',
      'nombre_mascota': 'Lupin',
      'img_mascota': 'assets/img/mascotas/fella.png',
      'lema': 'Una manada que ama con locura',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Tortuga',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Verde Musgo',
      'cod_color': '#4C5D16',
      'nacimiento': 'Mayo 2015',
      'fecha': new Date(2015, 4, 1),
      'sede': 'Chimaltenango, Guatemala',
      'mascota': 'Tortuga',
      'nombre_mascota': 'Tugui',
      'img_mascota': 'assets/img/mascotas/fella.png',
      'lema': 'Sabiduría de caparazón para alegrar el corazón',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Moan',
      'img_const': 'assets/img/sedes/moan.png',
      'color_const': 'Turquesa',
      'cod_color': '#03FFFE',
      'nacimiento': 'Julio 2015',
      'fecha': new Date(2015, 6, 1),
      'sede': 'San Salvador, El Salvador',
      'mascota': 'Lechuza',
      'nombre_mascota': 'Tlamati',
      'img_mascota': 'assets/img/mascotas/tlamati.png',
      'lema': 'La sabiduría del amor es el fuego de nuestro corazón',
      'text_color': '#000',
      'historia': '-'
    },
    {
      'nombre_const': 'Triángulum',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Azul Pavo',
      'cod_color': '#0170C1',
      'nacimiento': 'Marzo 2016',
      'fecha': new Date(2016, 2, 1),
      'sede': 'Malacatán, Guatemala',
      'mascota': 'Tigrillo',
      'nombre_mascota': '-',
      'img_mascota': 'assets/img/mascotas/fella.png',
      'lema': 'Todo lo que somos y sabemos es para servir',
      'text_color': '#FFF',
      'historia': '-'
    },
    {
      'nombre_const': 'Grulla',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Blanco',
      'cod_color': '#FFF ',
      'nacimiento': 'Agosto 2016',
      'fecha': new Date(2016, 7, 1),
      'sede': 'Salamá, Guatemala',
      'mascota': 'Grulla',
      'nombre_mascota': 'Gros',
      'img_mascota': 'assets/img/mascotas/fella.png',
      'lema': '-',
      'text_color': '#000',
      'historia': '-'
    }
  ];
  }

  //Mando el arreglo de las constelaciones a la vista del detalle de cada una
  detalle(item) {
    this.navCtrl.push(DetalleConstelacionesPage, {item:item});
  }
}
