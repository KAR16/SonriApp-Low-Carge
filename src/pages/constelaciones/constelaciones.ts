import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleConstelacionesPage } from '../detalle-constelaciones/detalle-constelaciones';

@Component({
  selector: 'page-constelaciones',
  templateUrl: 'constelaciones.html'
})
export class ConstelacionesPage {

  constelaciones=[];

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
      'mascota': 'Dragón',
      'nombre_mascota': 'Drake',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Vibra positiva',
      'historia': '-'
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Tengo el corazón de fuego y creo en los sueños',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La imaginación es el límite',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': '-',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Tu eres el inicio de tus sueños y el límite de tu destino',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La fuerza sale del corazón',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'El amor nos une',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Orión ilumina con sonrisas tu corazón',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Dejando huellas de amor',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Dejando huella',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La risa es algo serio',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La sonrisa y la alegría es nuestro idioma universal',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'De los amigos siempre cerca',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Un salto de amor y felicidad',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Una embestida de amor',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Sonreimos con pasión para alegrar tu corazón',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Nuestras sonrisas, el mejor escudo',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Pintando el mundo de amor y alegría',
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
      'nombre_mascota': '-',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Como luz y alegría, nuestro amor dibuja una sonrisa día tras día',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Inyectando gotas de amor',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Una manada que ama con locura',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Sabiduría de caparazón para alegrar el corazón',
      'historia': '-'
    },
    {
      'nombre_const': 'Moan',
      'img_const': 'assets/img/sedes/default.png',
      'color_const': 'Turquesa',
      'cod_color': '#03FFFE',
      'nacimiento': 'Julio 2015',
      'fecha': new Date(2015, 6, 1),
      'sede': 'San Salvador, El Salvador',
      'mascota': 'Lechuza',
      'nombre_mascota': 'Tlamati',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La sabiduría del amor es el fuego de nuestro corazón',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Todo lo que somos y sabemos es para servir',
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
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': '-',
      'historia': '-'
    }
  ];
  }

  detalle(item) {
    this.navCtrl.push(DetalleConstelacionesPage, {item:item});
  }
}
