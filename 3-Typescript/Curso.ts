export class Curso{
    private _nombre : string;
    private _comision : string;
    private _profesor

    set nombre(nombre : string){
        this._nombre = nombre;
    }

    set comision(comision : string){
        this._comision = comision;
    }

    set profesor(profesor : string){
        this._profesor = profesor;
    }

    get nombre(){
        return this._nombre;
    }

    get comision(){
        return this._comision;
    }

    get profesor(){
        return this._profesor;
    }
}