// src/app/login/login.page.ts

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private navCtrl: NavController, private userService: UserService) {}

  async agregarDatos() {
    try {
      // Validar los campos
      if (this.usuario && this.contrasena) {
        // Intentar iniciar sesión
        const isLoggedIn = await this.userService.loginUser(this.usuario, this.contrasena);

        if (isLoggedIn) {
          console.log('Usuario ingresado correctamente.');
          // Navegar a la página Home
          this.navCtrl.navigateForward('/homeprincipal', {
            queryParams: {
              usuario: this.usuario,
            },
          });
        } else {
          console.error('Usuario o contraseña inválidos.');
        }
      } else {
        console.error('Ingrese un usuario y contraseña válidos.');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  }

  restablecer() {
    // Aquí especifica la ruta de la página de inicio de sesión (login)
    this.navCtrl.navigateForward('/recuperar');
  }

  irAregistro() {
    // Aquí especifica la ruta de la página de inicio de sesión para el modo estudiante (login)
    this.navCtrl.navigateForward('/register');
  }
}
