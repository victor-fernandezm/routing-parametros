import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../model/cursos';

@Component({
	selector: 'app-listado-cursos',
	templateUrl: './listado-cursos.component.html',
	styleUrls: ['./listado-cursos.component.css']
})
export class ListadoCursosComponent {
	constructor(private cursoService: CursosService) {}

	public get cursos(): Curso[] {
		return this.cursoService.cursos;
	}
}
