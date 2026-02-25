import { Injectable } from '@angular/core';
import { INoticia } from '../interfaces/inoticia';
import { NOTICIAS } from '../db/noticias.db';

@Injectable({
  providedIn: 'root', // Esto hace que el servicio esté disponible en toda la app
})
export class BlogService {
  private misNoticias: INoticia[] = NOTICIAS; 

  getAll() :INoticia[] {
    return this.misNoticias
  }

  agregarNoticia(noticia:INoticia): string{
    this.misNoticias.push(noticia)
    return "Noticia insertada correctamente"
  }
}
