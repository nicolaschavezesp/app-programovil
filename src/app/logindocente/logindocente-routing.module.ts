import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Logindocente } from './logindocente.page';

const routes: Routes = [
  {
    path: '',
    component: Logindocente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogindocentePageRoutingModule {}
