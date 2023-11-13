// src/app/recuperar/recuperar.page.ts

import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';  // Importa tu servicio de usuario

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  usuario: string = '';

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private toastController: ToastController
  ) {}

  async recuperarDatos() {
    try {
      // Validar los campos
      if (this.isValidUser(this.usuario)) {
        // Intenta recuperar la contraseña
        const result = await this.userService.recoverPassword(this.usuario);
        if (result) {
          // Muestra un mensaje de éxito o redirige a otra página
          await this.presentToast(result);
        } else {
          // Muestra un mensaje de error (usuario no encontrado)
          await this.presentToast('Usuario no encontrado.');
        }
      } else {
        // Muestra un mensaje de error
        await this.presentToast('Ingresa un usuario válido.');
      }
    } catch (error) {
      console.error('Error al recuperar la contraseña:', error);
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
