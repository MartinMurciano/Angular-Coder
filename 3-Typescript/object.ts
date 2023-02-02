import { createUnparsedSourceFile } from 'typescript';
import { Curso } from './Curso';
import { Estudiante } from './estudiante';
import { Inscripcion } from './inscripcion';
import { Persona } from './persona';

let persona1 : Persona = new Persona("Martin", "Murciano", 26);
let estudiante1 : Estudiante = new Estudiante(persona1.getNombre(), persona1.getApellido(), persona1.getEdad(), "martin@hotmail.com", "martin123" );
let inscripcio1 : Inscripcion = {
    curso: new Curso(),
    estudiante: estudiante1,
};

console.log( estudiante1.saludar("Nacho") );

