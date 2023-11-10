// Importa la clase Storage de @capacitor/core
import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  regions: any[] = [];
  communes: any[] = [];
  userData: any = {
    name: '',
    email: '',
    password: '',
    region: '',
    commune: '',
  };

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {
    this.loadRegions();
  }

  loadRegions() {
    this.apiService.getRegions().subscribe((response) => {
      this.regions = response.data;
    });
  }

  loadCommunes(regionId: number) {
    this.apiService.getCommunes(regionId).subscribe((response) => {
      this.communes = response.data;
    });
  }

  async registerUser() {
    try {
      // Muestra los datos antes de guardar
      console.log('Datos antes de guardar:', this.userData);

      // Guarda los datos en Capacitor Preferences
      await (Storage as any).set({
        key: 'userData',
        value: JSON.stringify(this.userData),
      });

      // Muestra un mensaje indicando que los datos se han guardado
      console.log('Datos guardados correctamente.');

      // Puedes agregar más lógica aquí, como navegar a otra página, etc.

      // Obtiene los datos almacenados para verificar
      const storedData = await (Storage as any).get({ key: 'userData' });
      console.log('Datos almacenados:', storedData.value);
    } catch (error) {
      console.error('Error al guardar los datos:', error);
    }
  }
}
