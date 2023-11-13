// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_KEY = 'registered_users';
  private readonly AUTH_KEY = 'is_authenticated';

  constructor() {}

  async registerUser(email: string, password: string): Promise<void> {
    const existingUsers = await this.getRegisteredUsers();
    const newUser = { email, password };

    const isUserExists = existingUsers.some((user) => user.email === newUser.email);

    if (!isUserExists) {
      existingUsers.push(newUser);
      await this.saveRegisteredUsers(existingUsers);
    } else {
      throw new Error('El usuario ya está registrado.');
    }
  }

  async loginUser(email: string, password: string): Promise<boolean> {
    const existingUsers = await this.getRegisteredUsers();
    const user = existingUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      await this.setAuthentication(true);  // Marcar como autenticado
    }

    return !!user;
  }

  async recoverPassword(email: string): Promise<string | null> {
    const existingUsers = await this.getRegisteredUsers();
    const user = existingUsers.find((u) => u.email === email);

    if (user) {
      // Enviar correo electrónico con la contraseña al usuario
      await this.sendPasswordRecoveryEmail(user.email, user.password);
      return 'Se ha enviado un correo electrónico con la contraseña.';
    } else {
      return null; // Usuario no encontrado
    }
  }

  async isAuthenticated(): Promise<boolean> {
    const result = await Storage.get({ key: this.AUTH_KEY });
    return result.value === 'true';
  }

  async logoutUser(): Promise<void> {
    await Storage.set({ key: this.AUTH_KEY, value: 'false' });  // Marcar como no autenticado
  }

  private async getRegisteredUsers(): Promise<any[]> {
    const result = await Storage.get({ key: this.USER_KEY });

    if (result.value) {
      return JSON.parse(result.value);
    } else {
      return [];
    }
  }

  private async saveRegisteredUsers(users: any[]): Promise<void> {
    await Storage.set({
      key: this.USER_KEY,
      value: JSON.stringify(users),
    });
  }

  private async sendPasswordRecoveryEmail(email: string, password: string): Promise<void> {
    // Implementa la lógica para enviar un correo electrónico con la contraseña
    // Aquí deberías usar un servicio de envío de correo electrónico o configurar tu propio servidor de correo
    console.log(`Enviando correo electrónico a ${email} con la contraseña: ${password}`);
  }

  private async getAuthentication(): Promise<string | null> {
    const result = await Storage.get({ key: this.AUTH_KEY });
    return result.value;
  }

  private async setAuthentication(isAuthenticated: boolean): Promise<void> {
    await Storage.set({ key: this.AUTH_KEY, value: isAuthenticated ? 'true' : 'false' });
  }
}
