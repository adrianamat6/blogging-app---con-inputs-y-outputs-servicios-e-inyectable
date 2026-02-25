import { Injectable } from '@angular/core';
import { INoticia } from '../interfaces/inoticia';
@Injectable({
  providedIn: 'root', // Esto hace que el servicio esté disponible en toda la app
})
export class BlogService {
  private misNoticias: INoticia[] = []

  getAll() :INoticia[] {
    return this.misNoticias
  }

  insert(noticia:INoticia): string{
    this.misNoticias.push(noticia)
    return "Noticia insertada correctamente"
  }
}
