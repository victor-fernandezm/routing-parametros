import { Injectable } from '@angular/core';
import { Curso, NivelCurso } from './model/cursos';

@Injectable({
	providedIn: 'root'
})
export class CursosService {
	private _cursos: Curso[] = [
		new Curso(0, "Como freir patatas", 1),
		new Curso(1, "Como hacer hamburguesas", 7),
		new Curso(2, "Como trabajar en McDonalds", 14, NivelCurso.AVANZADO)
	];

	public get cursos(): Curso[] {
		return this._cursos;
	}
	
	constructor() { }

	update(id: number, nombre: string, duracion: number, nivel: NivelCurso): void {
		let c = this._cursos.find(v => v.id == id);
		if(c != undefined) {
			c.duracion = duracion;
			c.nivel = nivel;
			c.nombre = nombre;
		}
	}

	find(id: number): Curso {
		return this._cursos.find(v => v.id == id) as Curso;
	}
}
