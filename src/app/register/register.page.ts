// src/app/register/register.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from './api.service';  // Asegúrate de tener la ruta correcta
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  regions: any[] = [];
  communes: any[] = [];
  userData: any = {
    name: '',
    email: '',
    password: '',
    region: '',
    commune: '',
  };

  constructor(private apiService: ApiService, private userService: UserService, private navCtrl: NavController) {}

  ionViewDidEnter() {
    this.loadRegions();
  }

  loadRegions() {
    this.apiService.getRegions().subscribe((response) => {
      this.regions = response.data;
    });
  }

  loadCommunes(regionId: number) {
    this.apiService.getCommunes(regionId).subscribe((response) => {
      this.communes = response.data;
    });
  }

  async registerUser() {
    try {
      // Muestra los datos antes de guardar
      console.log('Datos antes de guardar:', this.userData);

      // Validar los campos antes de registrar
      if (this.validateFields()) {
        // Intentar registrar al usuario
        this.userService.registerUser(this.userData.email, this.userData.password)
          .then(() => {
            console.log('Usuario registrado con éxito.');
            // Navegar a la página de inicio de sesión después del registro exitoso
            this.navCtrl.navigateBack('/login');
          })
          .catch((error) => {
            console.error('Error al registrar el usuario:', error);
          });
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }

  validateFields(): boolean {
    // Realizar validaciones adicionales si es necesario
    if (this.userData.email && this.userData.password) {
      return true;
    } else {
      console.error('Por favor, complete todos los campos.');
      return false;
    }
  }

  goBackLogin() {
    this.navCtrl.navigateBack('/login');  // Navegar hacia atrás al login
  }
}
