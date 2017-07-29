import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleSonrisaurosPage } from '../detalle-sonrisauros/detalle-sonrisauros';

/*
  Generated class for the Sonrisauros page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sonrisauros',
  templateUrl: 'sonrisauros.html'
})
export class SonrisaurosPage {
  sonrisauros=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.sonrisauros = [
    {
      'nombre_doctor': 'Dra. Payas-Hada',
      'nombre_civil': 'Lindamaría Valenzuela',
      'nombre_civil_completo': 'Lindamaría de los Ángeles Valenzuela Quevedo',
      'nacimiento': '28/07/1983',
      'profesion':'Licda. Administración de Empresas',
      'rango': 'Co-Fundadora',
      'icono': 'assets/img/sonrisauros-cards/payas-hada.png',
      'imagen_doc': 'assets/img/sonrisauros/payas-hada.png',
      'biografia': '<p>Nació el 28 de julio de 1983 en la ciudad de Guatemala. Es cofundadora de la Asociación Fábrica de Sonrisas. Es Licenciada en Administración de Empresas con especialidad en Turismo y Hotelería por la Universidad del Istmo y obtuvo una Maestría en Liderazgo y Coaching por el MLC-ENAE, Panamerican Business School.<br><br>Ha participado y capacitado en diversos talleres, conferencias, congresos, programas y charlas en temas de Liderazgo, Trabajo en Equipo, Construcción de Cultura de Paz, Ciudadanía y Valores, en los que ha podido fortalecer su visión social y de ayuda a los demás.<br><br>Participó en el grupo teatral M al cubo, y en el grupo de improvisación teatral “Impronunciables” realizando improterapia. También forma parte de los Scouts de Guatemala en el grupo No. 63. Y ha apoyado en diferentes organizaciones de voluntariado como Teletón, Baildar, Plantemos 1,000 árboles, Yo Asumo y Fundación El Arte de Vivir, entre otros. En la actualidad es Presidente y Coordinadora General del Centro de Voluntariado Guatemalteco y es freelance en varias Asociaciones y voluntariados.</p>'
    },
    {
      'nombre_doctor': 'Dr. Fantasía',
      'nombre_civil': 'José Ruiz',
      'nombre_civil_completo': 'José Andrés Ruiz Ordoñez',
      'nacimiento': '09/07/1985',
      'profesion':'Ingeniero Comercial',
      'rango': 'Co-Fundador',
      'icono': 'assets/img/sonrisauros-cards/fantasia.png',
      'imagen_doc': 'assets/img/sonrisauros/fantasia.png',
      'biografia': '<p>Nació el 9 de julio de 1985 en la ciudad de Guatemala. Es cofundador de la asociación Fábrica de Sonrisas. Es Ingeniero Comercial por la Universidad del Istmo, en la que tuvo una destacada participación académica y estudiantil, además de tener un Master en Administración de Negocios por la Universidad de Preston y experto en procesos de calidad.<br><br>En la búsqueda de desarrollar sus habilidades para aportarlas a nuestra sociedad se preparó como interprete nivel básico en la Asociación de Sordos de Guatemala. Ha sido jugador de básquetbol a nivel nacional y también voluntario de Asociación de Scouts de Guatemala. Ha sido Director de diferentes grupos de voluntariado y también catedrático en las Universidades Galileo, Rafael Landivar y del Istmo. Participó en el grupo teatral M al cubo y en la actualidad es Director de Recursos Humanos en una empresa multinacional.</p>'
    },
    {
      'nombre_doctor': 'Dra. Sonrisitas',
      'nombre_civil': 'Irene Salazar',
      'nombre_civil_completo': 'Irene del Rosario Salazar Paredes de Per',
      'nacimiento': '15/07/1982',
      'profesion':'Licda. Administración de Empresas',
      'rango': 'Co-Fundadora',
      'icono': 'assets/img/sonrisauros-cards/sonrisitas.png',
      'imagen_doc': 'assets/img/sonrisauros/sonrisitas.png',
      'biografia': '<p>Nacio el 15 de julio de 1982 en la ciudad de Guatemala. Es Cofundadora de la Asociación Fábrica de Sonrisas. Tiene estudios de administración de empresas con énfasis en mercadeo y negocios internacionales en la Universidad del Istmo. Es una empresaria emprendedora, esposa y madre, dedicada a la búsqueda del desarrollo social a través de sus aportes personales. Ha sido parte de 13 payaescuelas como capacitadora de diferentes grupos.<br><br>Toca la Marimba y fue campeona centroamericana de kata y combate en karate en el año 2001. Participó en el grupo teatral M al cubo, además participó en el grupo de improvisación teatral “impronunciables” realizando improterapia. Su experiencia en coaching empresarial le ha llevado a participar en mesas de trabajo de voluntariado. En la actualidad es Directora General de Fábrica de Sonrisas.</p>'
    },
    {
      'nombre_doctor': 'Dr. Click',
      'nombre_civil': 'Luis Ruiz',
      'nombre_civil_completo': 'Luis Fernando Ruiz Ordoñez',
      'nacimiento': '15/10/1977',
      'profesion':'IT Project Manager',
      'rango': 'Co-Fundador',
      'icono': 'assets/img/sonrisauros-cards/click.png',
      'imagen_doc': 'assets/img/sonrisauros/click.png',
      'biografia': '<p>Nació el 15 de Octubre de 1977 en la ciudad de Guatemala. Cofundador de la Asociación Fábrica de Sonrisas. Participó en el área técnica del grupo teatral M al Cubo. Es graduado del Liceo Javier como Bachelor of arts and sciences, además tiene estudios en la Universidad del Valle de Guatemala. Actualmente es  IT Project Manager en el Ministerio de Gobernación. Ha sido capacitador de voluntarios y fue Director de Payaescuela en los primeros años de desarrollo de la Asociación.</p>'
    },
    {
      'nombre_doctor': 'Dra. Música',
      'nombre_civil': 'Pamela Castellan',
      'nombre_civil_completo': 'Pamela Castellan de Hernández',
      'nacimiento': '08/04/1985',
      'profesion':'Licda. Diseño Gráfico',
      'rango': 'Co-Fundador',
      'icono': 'assets/img/sonrisauros-cards/musica.png',
      'imagen_doc': 'assets/img/sonrisauros/musica.png',
      'biografia': '<p>Nació el 8 de abril de 1985 en la ciudad de Guatemala. Cofundadora de la Asociación Fábrica de Sonrisas. Inicio en la gimnasia olímpica a los 3 años, en este deporte obtuvo premios y logros importantes a nivel nacional. Es Licenciada en Diseño Gráfico por la universidad Rafael Landivar. Es esposa y madre de dos pequeñines.<br><br>Actualmente es Directora de Desarrollo Educativo en una importante organización que promueve prácticas de diseño y construcción sostenible. Participó como Directora de Comunicación en los inicios de Fábrica de Sonrisas, también como capacitadora de voluntarios y desarrollo de nuevos grupos.</p>'
    },
    {
      'nombre_doctor': 'Dr. Tennis Narinas',
      'nombre_civil': 'Dennis Castellan',
      'nombre_civil_completo': 'Dennis Mauricio Castellan Cabrera',
      'nacimiento': '13/08/1982',
      'profesion':'Técnico Geólogo',
      'rango': 'Co-Fundador',
      'icono': 'assets/img/sonrisauros-cards/tennis-narinas.png',
      'imagen_doc': 'assets/img/sonrisauros/tennis-narinas.png',
      'biografia': '<p>Nació el 13 de agosto de 1982 en la ciudad de Guatemala. Cofundador de la Asociación Fábrica de Sonrisas.  Es Técnico Geólogo por la Universidad de San Carlos, realizando sus estudios en el Centro Universitario del Norte en Cobán, Alta Verapaz. Se ha desarrollado como Coordinador de Intercambios Culturales en AFS Guatemala y como Coordinador de voluntariado en Glasswing, sede Guatemala.<br><br>También es Director de “Me quito el Sombrero, Producciones”. Artista, creativo, payaso, malabarista, equilibrista y educador lúdico. Participo en el grupo teatral M al cubo. Fue jugador de baseball desde los 5 hasta los 18 años, siendo seleccionado nacional por 5 años y representando a Guatemala en varias categorías, viajando a Centroamérica, México, Colombia y Venezuela con la selección.</p>'
    },
    {
      'nombre_doctor': 'Dra. Arcoiris',
      'nombre_civil': 'Regina Fernández',
      'nombre_civil_completo': 'Regina Fernández Morales',
      'nacimiento': '11/01/1983',
      'profesion':'Psicóloga Clínica',
      'rango': 'Co-Fundadora',
      'icono': 'assets/img/general/default.png',
      'imagen_doc': 'assets/img/general/hoop.png',
      'biografia': '<p>Nació el 11 enero 1983 en la ciudad de Guatemala. Cofundadora de la Asociación Fábrica de Sonrisas. Es Psicóloga Clínica por la Universidad Francisco Marroquín, tiene un Posgrado en psicooncología por el Instituto Superior de Estudios Psicológicos, se diplomó en Métodos Cuantitativos de Investigación psicosocial por la Universidad de Chile.<br><br>Además tiene un Curso de Atención Psicoterapéutica Preventiva en Oncología-psicoprofilaxis quirúrgica, en quimioterapia y terapias radiantes acreditado por el Servicio de Salud Mental del Hospital de Oncología “María Curie” en Buenos Aires, Argentina. Tiene un Magister en Psicología de la Salud por la Pontificia Universidad Católica de Chile.</p>'
    }];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SonrisaurosPage');
  }

  //Mando el array a la vista Detalle-Sonrisauros
  detalleSonrisauros(item) {
    this.navCtrl.push(DetalleSonrisaurosPage, {item:item});
  }

}
