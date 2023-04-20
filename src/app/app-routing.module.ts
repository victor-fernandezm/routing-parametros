import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCursosComponent } from './listado-cursos/listado-cursos.component';
import { ModificaCursoComponent } from './modifica-curso/modifica-curso.component';

const routes: Routes = [
  {path: 'cursos', component: ListadoCursosComponent},
  {path: 'modifica/:id', component: ModificaCursoComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
