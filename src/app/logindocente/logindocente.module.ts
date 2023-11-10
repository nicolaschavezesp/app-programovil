import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindocentePageRoutingModule } from './logindocente-routing.module';

import { Logindocente } from './logindocente.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogindocentePageRoutingModule
  ],
  declarations: [Logindocente]
})
export class LogindocentePageModule {}
