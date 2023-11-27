import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BrowserQRCodeReader, DecodeHintType, BarcodeFormat } from '@zxing/library';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-homeprincipal',
  templateUrl: 'homeprincipal.page.html',
  styleUrls: ['homeprincipal.page.scss'],
})
export class HomeprincipalPage {
  @ViewChild('scanner') scanner: any;
  barcodeFormats = [BarcodeFormat.QR_CODE];

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private navCtrl: NavController,
    private userService: UserService
  ) {}

  async ngOnInit() {
    // Verifica si el usuario está autenticado al cargar la página
    const isAuthenticated = await this.userService.isAuthenticated();

    // Si no está autenticado, redirige a la página de inicio de sesión
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  mostrarQRClases() {
    this.router.navigate(['/home']);
  }

  async lectorQR() {
    try {
      const codeReader = new BrowserQRCodeReader();
      const hints = new Map<DecodeHintType, any>();
      hints.set(DecodeHintType.POSSIBLE_FORMATS, this.barcodeFormats);

      await this.scanner.start();

      const result = await codeReader.decodeFromInputVideoDevice(undefined, 'video');
      this.handleDecodeResult(result);
    } catch (error) {
      console.error('Error al iniciar la cámara:', error);
    }
  }

qrCodeText: string = ''; // Variable para almacenar el texto del código QR
scannedQRLink: string = '';
scannedLocation: string = ''; 

handleDecodeResult(result: any) {
  if (result) {
    this.qrCodeText = result.getText(); // Almacena el texto del QR
    this.router.navigate(['/login']);
  } else {
    this.qrCodeText = 'No se detectó ningún código QR.';
  }
}
  
handleQRScan(event: any) {
  // Imprimir el texto del código QR escaneado
  this.scannedQRLink = event;
  console.log('Código QR escaneado:', event);

  // Aquí podrías intentar acceder a la ubicación si está disponible
  // Esto dependerá de la plataforma y los permisos del dispositivo
  // Por ejemplo:
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.scannedLocation = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
      console.log('Ubicación del escaneo:', position.coords.latitude, position.coords.longitude);
    }, (error) => {
      console.error('Error al obtener la ubicación:', error);
    });
  } else {
    console.log('La geolocalización no está disponible en este dispositivo.');
  }
}

  abrirMenu() {
    console.log('Abriendo menú...');
    this.menuCtrl.toggle();
  }

  cerrarSesion() {
    this.userService.logoutUser();
    this.router.navigate(['/login']);
  }
}
