import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  subtitle: string = "Este es un ejemplo de interpolación mediante {{ }}";
  variable1: number = 5;
  estudianteActual: Estudiante ={
    nombre: 'Jose',
    edad: 22,
    activo: true,
  };
  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: 'Jose',
      edad: 22,
      activo: true,
    },
    {
      nombre: 'Monica',
      edad: 22,
      activo: false,
    },
    {
      nombre: 'Edgardo',
      edad: 30,
      activo: true,
    },
  ];
}
