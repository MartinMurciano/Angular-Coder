"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curso_1 = require("./Curso");
var estudiante_1 = require("./estudiante");
var persona_1 = require("./persona");
var persona1 = new persona_1.Persona("Martin", "Murciano", 26);
var estudiante1 = new estudiante_1.Estudiante(persona1.getNombre(), persona1.getApellido(), persona1.getEdad(), "martin@hotmail.com", "martin123");
var inscripcio1 = {
    curso: new Curso_1.Curso(),
    estudiante: estudiante1,
};
console.log(estudiante1.saludar("Nacho"));
