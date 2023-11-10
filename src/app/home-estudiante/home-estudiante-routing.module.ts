import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEstudiantePage } from './home-estudiante.page'; // Cambiado de 'HomePage' a 'HomeEstudiantePage'

const routes: Routes = [
  {
    path: '',
    component: HomeEstudiantePage, // Cambiado de 'HomePage' a 'HomeEstudiantePage'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeEstudiantePageRoutingModule {}
