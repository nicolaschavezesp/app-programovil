import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeprincipalPage } from './homeprincipal.page';

const routes: Routes = [
  {
    path: '',
    component: HomeprincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeprincipalPageRoutingModule {}
