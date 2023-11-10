import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { slideInAnimation } from '../Animations/slide-in.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [slideInAnimation],
})
export class LoginPage {
  usuario: string = ''; // Inicializa la propiedad usuario
  contrasena: string = ''; // Inicializa la propiedad contrasena

  constructor(private navCtrl: NavController, private router: Router) {}


  agregarDatos() {
    // Validar los campos
    if (this.usuario.length >= 3 && this.usuario.length <= 8 && /^\d{4}$/.test(this.contrasena)) {
      // Los datos son válidos, pasar a la página Home
      this.navCtrl.navigateForward('/home-estudiante', {
        queryParams: {
          usuario: this.usuario,
          contrasena: this.contrasena,
        },
      });
    } else {
      // Mostrar un mensaje de error
      // Puedes agregar lógica adicional para mostrar mensajes de error personalizados
    }
  }
  restablecer() {
    // Aquí especifica la ruta de la página de inicio de sesión (login)
    this.router.navigate(['/recuperar']);
  }

  irAModoDocente() {
    // Aquí especifica la ruta de la página de inicio de sesión para el modo estudiante (login)
    this.router.navigate(['/logindocente']);
  }

  irAregistro() {
    // Aquí especifica la ruta de la página de inicio de sesión para el modo estudiante (login)
    this.router.navigate(['/register']);
  }
}

