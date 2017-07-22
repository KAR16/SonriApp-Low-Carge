import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleTutorialesPage } from '../detalle-tutoriales/detalle-tutoriales';



/*
  Generated class for the Tutoriales page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tutoriales',
  templateUrl: 'tutoriales.html'
})
export class TutorialesPage {
  herramientas=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.herramientas = [
    {
      'titulo': 'Actuación',
      'icono': 'assets/img/herramientas/actuacion.png',
      'banner': 'assets/img/herramientas-banner/malabares.jpg',
      'info': '<p>La globoflexia consiste en manipular globos hasta lograr que adopten cualquier forma, como la de un animal u objeto. Cuando trabajamos con ella potenciamos el desarrollo psicomotriz, la imaginación y la creatividad.<br><br>Como doctores de la risa, la finalidad de un globo es permitir romper esa barrera que nos aparta de un paciente, por lo tanto, no es vital que hagamos figuras tan elaboradas, con un simple globo podemos contar historias interminables.</p>'
    },
    {
      'titulo': 'Globoflexia',
      'icono': 'assets/img/herramientas/globoflexia.png',
      'banner': 'assets/img/herramientas-banner/malabares.jpg',
      'info': '<p>La globoflexia consiste en manipular globos hasta lograr que adopten cualquier forma, como la de un animal u objeto. Cuando trabajamos con ella potenciamos el desarrollo psicomotriz, la imaginación y la creatividad.<br><br>Como doctores de la risa, la finalidad de un globo es permitir romper esa barrera que nos aparta de un paciente, por lo tanto, no es vital que hagamos figuras tan elaboradas, con un simple globo podemos contar historias interminables.</p>'
    },
    {
      'titulo': 'Malabares',
      'icono': 'assets/img/herramientas/malabares.png',
      'banner': 'assets/img/herramientas-banner/malabares.jpg',
      'info': '<p>Es el arte de manipular y ejecutar uno o más objetos a la vez volteándolos, manteniéndolos en equilibrio o arrojándolos al aire alternativamente, sin dejar que caigan al suelo.<br><br>Esta herramienta favorece las habilidades motoras, ayuda a conseguir mayor independencia y la reinserción del individuo en aspectos mentales, físicos y sociales.</p>'
    },
    {
      'titulo': 'Papiroflexia',
      'icono': 'assets/img/herramientas/papiroflexia.png',
      'banner': 'assets/img/herramientas-banner/malabares.jpg',
      'info': '<p>Es el arte consistente en el plegado de papel sin usar tijeras ni pegamento para obtener figuras de formas variadas, como animales, frutas, flores y demás.<br><br>Con esta herramienta podemos interactuar con el paciente utilizando figuras para contar un cuento, historia o fabula; que pueda dejar una enseñanza, de esta manera estaremos utilizando la terapia positiva en el paciente.</p>'
    },
    {
      'titulo': 'Pintacaritas',
      'icono': 'assets/img/herramientas/pintacaritas.png',
      'banner': 'assets/img/herramientas-banner/malabares.jpg',
      'info': '<p>Es el arte de elaborar diferentes figuras como animales, paisajes o súper héroes, con pinturas especiales que se utilizan en el rostro o demás partes del cuerpo de una persona.<br><br> Es importante que las utilices como un medio para poder acercarte a tu paciente e interactuar de mejor manera en tu visita.</p>'
    },
    {
      'titulo': 'Títeres',
      'icono': 'assets/img/herramientas/titeres.png',
      'banner': 'assets/img/herramientas-banner/malabares.jpg',
      'info': '<p>Es el arte de elaborar diferentes figuras como animales, paisajes o súper héroes, con pinturas especiales que se utilizan en el rostro o demás partes del cuerpo de una persona.<br><br> Es importante que las utilices como un medio para poder acercarte a tu paciente e interactuar de mejor manera en tu visita.</p>'
    }];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialesPage');
  }

  //Mando el arreglo de las constelaciones a la vista del detalle de cada una
  detalleTutoriales(item) {
    this.navCtrl.push(DetalleTutorialesPage, {item:item});
  }

}
