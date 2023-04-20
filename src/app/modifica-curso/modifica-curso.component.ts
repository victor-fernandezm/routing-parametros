import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../cursos.service';
import { Curso, NivelCurso } from '../model/cursos';

@Component({
  selector: 'app-modifica-curso',
  templateUrl: './modifica-curso.component.html',
  styleUrls: ['./modifica-curso.component.css']
})
export class ModificaCursoComponent {
  id: number;
  nombre: string;
  duracion: number;
  nivel: NivelCurso;
  constructor(private router: Router, private route: ActivatedRoute, private cursoService: CursosService) {
    this.id = route.snapshot.params["id"];
    let curso = cursoService.find(this.id);
    this.nombre = curso.nombre;
    this.duracion = curso.duracion;
    this.nivel = curso.nivel;
  }

  saveAndClose(): void {
    this.cursoService.update(this.id, this.nombre, this.duracion, this.nivel);
    this.router.navigate(["cursos"]);
  }

}
