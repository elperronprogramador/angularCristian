import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoPlatzi';
  titulo ='MI PAGINA';
 
  navegacion={
    opcion1:'HOME',
    opcion2:'NOSOTROS',
    opcion3:'AYUDA',
    opcion4:'CONTACTOS',
    iconHome:'home',
    iconNosotros:'info',
    iconAyuda:'file_open',
    iconContactos:'person',

  };
  tituloVideo= 'mix: counitng'
  nameCanal='ACounting Crows'
  visualizaciones='23424';
  imglogo ='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png';
  fotoPerfil = 'https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg';
  videoYoutube = 'https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg';
  parrafo = `
Lo Que Me Quedó · Santiago Cruz

A Quien Corresponda

℗ 2012 Sony Music Entertainment Colombia S.A.

Released on: 2012-07-17

Background Vocal: Gisela Renes
Bass, Arranger, Producer, Recording Engineer: Nacho Mañó
Background Vocal: Sergio León
Associated Performer: Frankie Tontoh
Guitar: Pablo Cebrián
Keyboards: Pau Cháfer
A&R Director: Guillermo Mazorra
Mastering Engineer: Óscar Vinader
Recording Engineer: Manuel Tómas
Assistant Producer: Madeleine Walther

Auto-generated by YouTube.
`;
}