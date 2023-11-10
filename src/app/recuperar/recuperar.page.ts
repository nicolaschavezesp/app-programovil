import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
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


  constructor(private navCtrl: NavController, private router: Router) {}


  recuperarDatos() {
    // Validar los campos
    if (this.usuario.length >= 3 && this.usuario.length <= 8) {
      // Los datos son válidos, pasar a la página Home
      this.navCtrl.navigateForward('/login', {
        queryParams: {
          usuario: this.usuario 
        },
      });
    } else {
      // Mostrar un mensaje de error
      // Puedes agregar lógica adicional para mostrar mensajes de error personalizados
    }
  }
}
