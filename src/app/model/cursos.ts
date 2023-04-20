export enum NivelCurso {
    INICIACION,
    INTERMEDIO,
    AVANZADO
}

const NIVEL_CURSO_TRANSLATE: string[] = ["Iniciación", "Intermedio", "Avanzado"];

export class Curso {
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    
    private _duracion: number;
    public get duracion(): number {
        return this._duracion;
    }
    public set duracion(value: number) {
        this._duracion = value;
    }
    
    private _nivel: NivelCurso;
    public get nivel(): NivelCurso {
        return this._nivel;
    }
    public set nivel(value: NivelCurso) {
        this._nivel = value;
    }

    public get nombreNivel(): string {
        return NIVEL_CURSO_TRANSLATE[this._nivel];
    }
    

    constructor(id: number = 0, nombre: string = "", duracion: number = 0, nivel: NivelCurso = NivelCurso.INICIACION) {
        this._id = id;
        this._nombre = nombre;
        this._duracion = duracion;
        this._nivel = nivel;
    }
}