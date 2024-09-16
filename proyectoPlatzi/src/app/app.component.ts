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
  imglogo ='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png';
  fotoPerfil = 'https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg';
 

}

