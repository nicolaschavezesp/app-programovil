import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomeprincipalPage } from './homeprincipal.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ZXingScannerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeprincipalPage,
      },
    ]),
  ],
  declarations: [HomeprincipalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Agrega esta línea
})
export class HomeprincipalPageModule {}
