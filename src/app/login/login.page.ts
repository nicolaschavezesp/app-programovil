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
  email: string = '';
  password: string = '';
  loginSuccess: boolean = false;
  loginError: boolean = false;

  constructor(private navCtrl: NavController, private userService: UserService) {}

  async agregarDatos() {
    try {
      // Validar los campos
      if (await this.validateCredentials()) {
        // Navegar a la página Home si las credenciales son válidas
        this.loginSuccess = true;
        this.loginError = false;

        // Simulando un tiempo para mostrar el mensaje antes de navegar
        setTimeout(() => {
          this.navCtrl.navigateForward('/homeprincipal', {
            queryParams: {
              email: this.email,
            },
          });
        }, 1000);
      } else {
        this.loginSuccess = false;
        this.loginError = true;
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  }

  async validateCredentials(): Promise<boolean> {
    try {
      // Validar las credenciales
      const isValid = await this.userService.loginUser(this.email, this.password);

      if (isValid) {
        console.log('Usuario ingresado correctamente.');
        return true;
      } else {
        console.error('Usuario o contraseña inválidos.');
        return false;
      }
    } catch (error) {
      console.error('Error al validar las credenciales:', error);
      return false;
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
