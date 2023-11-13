import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { BrowserQRCodeReader, DecodeHintType, NotFoundException, BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-homeprincipal',
  templateUrl: 'homeprincipal.page.html',
  styleUrls: ['homeprincipal.page.scss'],
})
export class HomeprincipalPage {
  // Agrega una referencia al componente zxing-scanner
  @ViewChild('scanner') scanner: any;

  // Declara la variable barcodeFormats aquí
  barcodeFormats = [BarcodeFormat.QR_CODE];

  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private navCtrl: NavController
  ) {}

  mostrarQRClases() {
    this.router.navigate(['/home']);
  }

  async lectorQR() {
    try {
      const codeReader = new BrowserQRCodeReader();
      const hints = new Map<DecodeHintType, any>();
      hints.set(DecodeHintType.POSSIBLE_FORMATS, this.barcodeFormats);

      // Utiliza la referencia al componente zxing-scanner para iniciar la cámara
      await this.scanner.start();

      // Actualiza la llamada al método decodeFromInputVideoDevice
      const result = await codeReader.decodeFromInputVideoDevice(undefined, 'video');
      this.handleDecodeResult(result);
    } catch (error) {
      console.error('Error al iniciar la cámara:', error);
    }
  }

  // Función para manejar el resultado del escaneo
  handleDecodeResult(result: any) {
    if (result) {
      console.log('Código QR leído:', result.getText());
    } else {
      console.log('No se detectó ningún código QR.');
    }
  }

  // Agrega esta función para manejar el evento de escaneo
  handleQRScan(event: any) {
    // Maneja el escaneo según tus necesidades
    console.log('Código QR escaneado:', event);
  }

  abrirMenu() {
    console.log('Abriendo menú...');
    this.menuCtrl.toggle();
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
