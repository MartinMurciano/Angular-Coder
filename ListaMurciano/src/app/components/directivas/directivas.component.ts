import { Component } from '@angular/core';
import { Estudiante } from 'models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  valorRandom: number = 10;

  listaEstudiantes: Array<Estudiante> = [
    {
      nombre: 'Romina',
      apellido: 'Garcia',
      edad: 15,
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 22,
    },
    {
      nombre: 'Marta',
      apellido: 'Lopez',
      edad: 18,
    },
    {
      nombre: 'Pastor',
      apellido: 'Gonzalez',
      edad: 17,
    }
  ];
}
