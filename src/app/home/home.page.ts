import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QRCodePage } from '../qr-code/qr-code.page';
import { slideInAnimation } from '../Animations/slide-in.animation';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';  // Asegúrate de tener la ruta correcta

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [slideInAnimation],
})
export class HomePage {

  usuario: string = '';
  contrasena: string = '';
  showLogo: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    private userService: UserService  // Agrega el servicio UserService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params['usuario'] && params['contrasena']) {
        this.usuario = params['usuario'];
        this.contrasena = params['contrasena'];
      }
    });
  }

  async ngOnInit() {
    // Verifica si el usuario está autenticado al cargar la página
    const isAuthenticated = await this.userService.isAuthenticated();

    // Si no está autenticado, redirige a la página de inicio de sesión
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  toggleLogo() {
    this.showLogo = !this.showLogo;
  }

  clases: any[] = [
    {
      nombre: "Clase 1",
      cod: "A-23",
      alumnosRegistrados: 20
    },
    {
      nombre: "Clase 2",
      cod: "D-57",
      alumnosRegistrados: 15
    },
    {
      nombre: "Clase 3",
      cod: "G-41",
      alumnosRegistrados: 18
    },
    {
      nombre: "Clase 4",
      cod: "E-39",
      alumnosRegistrados: 32
    },
    {
      nombre: "Clase 5",
      cod: "K-98",
      alumnosRegistrados: 28
    },
    {
      nombre: "Clase 6",
      cod: "R-11",
      alumnosRegistrados: 22
    },
  ];

  verInfoClase(clase: any) {
    // Lógica para ver la información detallada de la clase
  }

  async iniciarClase(clase: any) {
    // Lógica para iniciar la clase y mostrar el código QR de asistencia

    // Verifica si el usuario está autenticado al intentar iniciar la clase
    const isAuthenticated = await this.userService.isAuthenticated();

    // Si no está autenticado, redirige a la página de inicio de sesión


    const modal = await this.modalController.create({
      component: QRCodePage,
      componentProps: {
        clase: clase
      }
    });

    modal.onDidDismiss().then(() => {
      // Puedes realizar acciones adicionales después de cerrar el modal si es necesario
    });

    await modal.present();
  }

  abrirPerfil() {
    // Lógica para abrir la página de perfil
  }

  abrirClases() {
    // Lógica para abrir la página de clases
  }

  abrirConfiguraciones() {
    // Lógica para abrir la página de configuraciones
  }

  cerrarSesion() {
    // Lógica para cerrar sesión

    // Redirige a la página de inicio de sesión (login)
    this.router.navigate(['/login']);
  }

  back() {
    // Lógica para volver a la página homeprincipal
    this.router.navigate(['/homeprincipal']);
  }
}
