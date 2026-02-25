import { Component, signal } from '@angular/core';
import { INoticia } from './interfaces/inoticia';
import { NOTICIAS } from './db/noticias.db';
import { Form } from './components/form/form';
import { News } from './components/news/news';
import { FormsModule } from '@angular/forms';

// Este es el padre. Tomará el control y será el unico que importe la base de datos y la guardará en un signal.
@Component({
  selector: 'app-root',
  imports: [ Form, News ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

// ¡YA NO HACE NADA!
// El App Component solo sirve para mostrar el HTML estructural.
// Los hijos (Form y News) ya se apañan solos con el Servicio.

}
