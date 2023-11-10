import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeEstudiantePage } from './home-estudiante.page'; // Cambiado de 'HomePage' a 'HomeEstudiantePage'

import { HomeEstudiantePageRoutingModule } from './home-estudiante-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeEstudiantePageRoutingModule
  ],
  declarations: [HomeEstudiantePage], // Cambiado de 'HomePage' a 'HomeEstudiantePage'
})
export class HomeEstudiantePageModule {}
