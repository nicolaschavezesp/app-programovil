// src/app/recuperar/recuperar.page.ts

import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  usuario: string = '';
  cambioContrasena: boolean = false;
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private toastController: ToastController
  ) {}

  async recuperarDatos() {
    try {
      // Validar los campos
      if (this.isValidUser(this.usuario)) {
        if (this.cambioContrasena) {
          // Cambiar la contraseña
          await this.cambiarContrasena();
        } else {
          // Intenta recuperar la contraseña
          const result = await this.userService.recoverPassword(this.usuario);
          if (result) {
            // Muestra un mensaje de éxito y habilita el cambio de contraseña
            await this.presentToast(result);
            this.cambioContrasena = true;
          } else {
            // Muestra un mensaje de error (usuario no encontrado)
            await this.presentToast('Usuario no encontrado.');
          }
        }
      } else {
        // Muestra un mensaje de error
        await this.presentToast('Ingresa un usuario válido.');
      }
    } catch (error) {
      console.error('Error al recuperar la contraseña:', error);
    }
  }

  async cambiarContrasena() {
    try {
      // Validar que las contraseñas coincidan
      if (this.nuevaContrasena === this.confirmarContrasena) {
        // Implementa la lógica para cambiar la contraseña usando this.nuevaContrasena
        await this.userService.changePassword(this.usuario, this.nuevaContrasena);

        // Muestra un mensaje de éxito y vuelve al login
        await this.presentToast('Contraseña cambiada exitosamente.');
        this.navCtrl.navigateBack('/login');
      } else {
        // Muestra un mensaje de error (contraseñas no coinciden)
        await this.presentToast('Las contraseñas no coinciden.');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  }

  // Función para verificar si el usuario es válido
  private isValidUser(input: string): boolean {
    const trimmedInput = input.trim();
    return trimmedInput.length >= 2;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: 'primary',
    });
    toast.present();
  }

  goBackLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
