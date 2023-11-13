import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageqrPage } from './pageqr.page';

const routes: Routes = [
  {
    path: '',
    component: PageqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageqrPageRoutingModule {}
