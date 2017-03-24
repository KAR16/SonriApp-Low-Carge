import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Constelaciones page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Rojo',
      'nacimiento': 'Junio 2009',
      'sede': 'Guatemala, Guatemala',
      'mascota': 'Dragón',
      'nombre_mascota': 'Drake',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Vibra positiva',
      'historia': '-'
    },
    {
      'nombre_const': 'Fénix',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Amarillo',
      'nacimiento': 'Junio 2009',
      'sede': 'Guatemala, Guatemala',
      'mascota': 'Fénix',
      'nombre_mascota': 'Flamito',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Tengo el corazón de fuego y creo en los sueños',
      'historia': '-'
    },
    {
      'nombre_const': 'Unicornio',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Turquesa',
      'nacimiento': 'Junio 2009',
      'sede': 'Guatemala, Guatemala',
      'mascota': 'Unicornio',
      'nombre_mascota': 'Chuby',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La imaginación es el límite',
      'historia': '-'
    },
    {
      'nombre_const': 'Camaleón',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Blanco',
      'nacimiento': 'Julio 2011',
      'sede': 'Guatemala, Guatemala',
      'mascota': 'Camaleón',
      'nombre_mascota': 'Duf',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': '-',
      'historia': '-'
    },
    {
      'nombre_const': 'Batz',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Café',
      'nacimiento': 'Julio 2011',
      'sede': 'Guatemala, Guatemala',
      'mascota': 'Mono',
      'nombre_mascota': 'Wirik',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Tu eres el inicio de tus sueños y el límite de tu destino',
      'historia': '-'
    },
    {
      'nombre_const': 'Ursus',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Azul Marino',
      'nacimiento': 'Enero 2013',
      'sede': 'Guatemala, Guatemala',
      'mascota': 'Osa',
      'nombre_mascota': 'Nuru',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La fuerza sale del corazón',
      'historia': '-'
    },
    {
      'nombre_const': 'Crux del Sur',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Verde Grama',
      'nacimiento': '2009',
      'sede': 'Coatepeque, Guatemala',
      'mascota': 'Culebra',
      'nombre_mascota': 'Cruxito',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'El amor nos une',
      'historia': '-'
    },
    {
      'nombre_const': 'Orión',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Naranja',
      'nacimiento': '2009',
      'sede': 'San Salvador, El Salvador',
      'mascota': 'Niño',
      'nombre_mascota': 'Regil',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Orión ilumina con sonrisas tu corazón',
      'historia': '-'
    },
    {
      'nombre_const': 'Pegasus',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Gris',
      'nacimiento': 'Junio 2010',
      'sede': 'Jalapa, Guatemala',
      'mascota': 'Pegaso',
      'nombre_mascota': 'Ras',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Dejando huellas de amor',
      'historia': '-'
    },
    {
      'nombre_const': 'Balam',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Morado',
      'nacimiento': 'Noviembre 2010',
      'sede': 'Quetzaltenango, Guatemala',
      'mascota': 'Jaguar',
      'nombre_mascota': 'Kawi',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Dejando huella',
      'historia': '-'
    },
    {
      'nombre_const': 'Leo',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Verde fosforecente',
      'nacimiento': 'Marzo 2011',
      'sede': 'Chiquimula, Guatemala',
      'mascota': 'León',
      'nombre_mascota': 'Leonardo',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La risa es algo serio',
      'historia': '-'
    },
    {
      'nombre_const': 'Áquila',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Negro',
      'nacimiento': 'Junio 2011',
      'sede': 'Cobán, Guatemala',
      'mascota': 'Aguila',
      'nombre_mascota': 'Chahim',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La sonrisa y la alegría es nuestro idioma universal',
      'historia': '-'
    },
    {
      'nombre_const': 'Picis',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Aqua',
      'nacimiento': 'Septiembre 2011',
      'sede': 'Zacapa, Guatemala',
      'mascota': 'Delfines',
      'nombre_mascota': 'Sonri y Sueños',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'De los amigos siempre cerca',
      'historia': '-'
    },
    {
      'nombre_const': 'Keh',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Beige',
      'nacimiento': '2013',
      'sede': 'Mazatenango, Guatemala',
      'mascota': 'Venado',
      'nombre_mascota': 'Venadin',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Un salto de amor y felicidad',
      'historia': '-'
    },
    {
      'nombre_const': 'Taurus',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Fucsia',
      'nacimiento': '2012',
      'sede': 'Retalhuleu, Guatemala',
      'mascota': 'Toro',
      'nombre_mascota': 'Torivio',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Una embestida de amor',
      'historia': '-'
    },
    {
      'nombre_const': 'Cisne',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Rosado',
      'nacimiento': '2013',
      'sede': 'Santa Ana, Guatemala',
      'mascota': 'Cisne',
      'nombre_mascota': 'Whip',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Sonreimos con pasión para alegrar tu corazón',
      'historia': '-'
    },
    {
      'nombre_const': 'Scutum',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Azul Pavo',
      'nacimiento': '2013',
      'sede': 'Antigua Guatemala, Guatemala',
      'mascota': 'Guacamaya',
      'nombre_mascota': 'Qinich',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Nuestras sonrisas, el mejor escudo',
      'historia': '-'
    },
    {
      'nombre_const': 'Andromeda',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Vinotinto',
      'nacimiento': 'Marzo 2014',
      'sede': 'San Marcos, Guatemala',
      'mascota': 'Quetzal',
      'nombre_mascota': 'Gugú',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Pintando el mundo de amor y alegría',
      'historia': '-'
    },
    {
      'nombre_const': 'Centaurus',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Amarillo Mostaza',
      'nacimiento': 'Junio 2014',
      'sede': 'Huehuetenango, Guatemala',
      'mascota': 'Centauro',
      'nombre_mascota': '-',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Como luz y alegría, nuestro amor dibuja una sonrisa día tras día',
      'historia': '-'
    },
    {
      'nombre_const': 'Scorpius',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Verde Limón',
      'nacimiento': 'Noviembre 2014',
      'sede': 'Sololá, Guatemala',
      'mascota': 'Escorpión',
      'nombre_mascota': 'Baxter',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Inyectando gotas de amor',
      'historia': '-'
    },
    {
      'nombre_const': 'Lobo',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Lila',
      'nacimiento': 'Marzo 2015',
      'sede': 'Jutiapa, Guatemala',
      'mascota': 'Lobo',
      'nombre_mascota': 'Lupin',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Una manada que ama con locura',
      'historia': '-'
    },
    {
      'nombre_const': 'Tortuga',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Verde Musgo',
      'nacimiento': 'Mayo 2015',
      'sede': 'Chimaltenango, Guatemala',
      'mascota': 'Tortuga',
      'nombre_mascota': 'Tugui',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Sabiduría de caparazón para alegrar el corazón',
      'historia': '-'
    },
    {
      'nombre_const': 'Moan',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Turquesa',
      'nacimiento': 'Julio 2015',
      'sede': 'San Salvador, El Salvador',
      'mascota': 'Lechuza',
      'nombre_mascota': 'Tlamati',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'La sabiduría del amor es el fuego de nuestro corazón',
      'historia': '-'
    },
    {
      'nombre_const': 'Triángulum',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Azul Pavo',
      'nacimiento': 'Marzo 2016',
      'sede': 'Malacatán, Guatemala',
      'mascota': 'Tigrillo',
      'nombre_mascota': '-',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': 'Todo lo que somos y sabemos es para servir',
      'historia': '-'
    },
    {
      'nombre_const': 'Grulla',
      'img_const': 'assets/img/sedes/balam.jpg',
      'color_const': 'Blanco',
      'nacimiento': 'Agosto 2016',
      'sede': 'Salamá, Guatemala',
      'mascota': 'Grulla',
      'nombre_mascota': 'Gros',
      'img_mascota': 'assets/img/mascotas/kaw.png',
      'lema': '-',
      'historia': '-'
    }
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConstelacionesPage');
  }

}
