class Sujeto{
    constructor(foto, nombre, profesion, opinion){
        this._foto = foto;
        this._nombre = nombre;
        this._profesion = profesion;
        this._opinion = opinion;
    }
    get foto(){
        return this._foto;
    }
    set foto(foto){
        this._foto = foto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get profesion(){
        return this._profesion;
    }
    set profesion(profesion){
        this._profesion = profesion;
    }

    get opinion(){
        return this._opinion;
    }
    set opinion(opinion){
        this._opinion = opinion;
    }
}