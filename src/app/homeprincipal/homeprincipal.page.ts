// src/app/homeprincipal/homeprincipal.page.ts

import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeprincipal',
  templateUrl: 'homeprincipal.page.html',
  styleUrls: ['homeprincipal.page.scss'],
})
export class HomeprincipalPage {
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private navCtrl: NavController
    
  ) {}

  mostrarQRClases() {
    this.router.navigate(['/home']);
  }

  lectorQR() {
    // Lógica para leer el QR
  }

  abrirMenu() {
    console.log('Abriendo menú...');
    this.menuCtrl.toggle();
  }
  

  cerrarSesion() {
    // Lógica para cerrar sesión
    // Navegar a la página de login
    this.router.navigate(['/login']);
    // Alternativamente, puedes usar navCtrl
    // this.navCtrl.navigateForward('/login');
  }
}
