import { Persona } from "./persona";

export class Estudiante extends Persona{
    private correo : string;
    private contrasenia : string;

    constructor(nombre : string, apellido : string, edad : number, correo : string, contrasenia : string){
        super(nombre, apellido, edad);
        this.correo = correo;
        this.contrasenia = contrasenia;
    }
}