import { Component  } from '@angular/core';  
import { input } from '@angular/core'; 
import { INoticia } from '../../interfaces/inoticia';
import { BlogService } from '../../services/blog'; // Importamos el servicio
import { inject } from '@angular/core'; // Importamos inject
import { IndividualNew } from '../individual-new/individual-new';


@Component({
  selector: 'app-news',
  imports: [IndividualNew],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News {

    // --- INYECCIÓN DE DEPENDENCIAS ---
  private blogService = inject(BlogService);


  // --- CAMBIO CLAVE ---
  // Antes: misNoticias = input<INoticia[]>([]); 
   misNoticias = this.blogService.getNoticias();




}
