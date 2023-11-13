import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageqrPageRoutingModule } from './pageqr-routing.module';

import { PageqrPage } from './pageqr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageqrPageRoutingModule
  ],
  declarations: [PageqrPage]
})
export class PageqrPageModule {}
