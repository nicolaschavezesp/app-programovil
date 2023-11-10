import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code',
  templateUrl: 'qr-code.page.html',
  styleUrls: ['qr-code.page.scss']
})
export class QRCodePage {

  @Input() clase: any;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }
}
