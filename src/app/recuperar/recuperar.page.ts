import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { slideInAnimation } from '../Animations/slide-in.animation';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  animations: [slideInAnimation],
})
export class RecuperarPage {
  usuario: string = ''; // Inicializa la propiedad usuario

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private toastController: ToastController
  ) {}

  async recuperarDatos() {
    // Validar los campos
    if (this.isValidUser(this.usuario)) {
      // Redirigir a la página de inicio de sesión
      await this.presentToast('Revisa tu bandeja, te hemos enviado tu nueva contraseña.');
      
    } else {
      // Mostrar un mensaje de error
      await this.presentToast('Ingresa un usuario válido ');
    }
  }
  
  // Función para verificar si el usuario es válido (tiene al menos dos caracteres y menos de 50)
  private isValidUser(input: string): boolean {
    const trimmedInput = input.trim();
    return trimmedInput.length >= 2;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // Duración del mensaje en milisegundos
      position: 'bottom', // Posición del mensaje
      color: 'primary', // Color del mensaje
    });
    toast.present();
  }

  
  goBackLogin() {
    this.navCtrl.navigateBack('/login');  // Navegar hacia atrás al login
  }
}
