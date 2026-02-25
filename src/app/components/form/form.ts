import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia';
import { Output, EventEmitter } from '@angular/core'; 
import { BlogService } from '../../services/blog'; // Importamos el servicio
import { inject } from '@angular/core'; // Importamos inject

@Component({
  selector: 'app-form',
  imports: [ FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})

export class Form {
  // --- INYECCIÓN DE DEPENDENCIAS ---
  // Inyectamos el servicio para poder usarlo.
  private blogService = inject(BlogService);

  // Variables para conectar con el formulario (ngModels)
  inputTitle: string = "";
  inputImage: string = "";
  inputTexto: string = "";
  inputDate: string = "";

  // YA NO NECESITAMOS @Output NI EventEmitter. ¡FUERA! 🗑️
  // @Output() noticiaEmitida = new EventEmitter <INoticia>();  

  guardarNoticia(event: Event){

      // Comprobamos que los campos no vengan vacios
      if(this.inputTitle ===''|| this.inputImage === "" || this.inputTexto === "" || this.inputDate === ""){
        alert("Por favor, rellena todos los campos obligatorios.");
        return;
      }

      // Asignamos los valores de los inputs a la estructura de la interfaz INoticia
      const nueva = {
        "title": this.inputTitle, 
        "image": this.inputImage,
        "new": this.inputTexto,
        "date": this.inputDate
      }; 

      // --- CAMBIO CLAVE ---
      // Antes: this.noticiaEmitida.emit(nueva); 
      // Ahora: Llamamos al método del servicio directamente.
      this.blogService.agregarNoticia(nueva);


      
      // Reseteamos las variables para limpiar el formulario y dejarlo listo para la siguiente noticia
      this.inputTitle = "";
      this.inputImage = "";
      this.inputTexto = "";
      this.inputDate = "";

    }; 



}
