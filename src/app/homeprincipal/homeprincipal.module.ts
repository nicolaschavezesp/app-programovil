// src/app/homeprincipal/homeprincipal.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomeprincipalPage } from './homeprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeprincipalPage,
      },
    ]),
  ],
  declarations: [HomeprincipalPage],
})
export class HomeprincipalPageModule {}
