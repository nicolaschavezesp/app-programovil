// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { EmailService } from './email.service';  // Ajusta la ruta según tu estructura de archivos

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_KEY = 'registered_users';
  private readonly AUTH_KEY = 'is_authenticated';

  constructor(private emailService: EmailService) {}

  async registerUser(name: string, rut: string, email: string, password: string, region: number, commune: number): Promise<void> {
    const existingUsers = await this.getRegisteredUsers();
    const newUser = { name, rut, email, password, region, commune };

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
      this.emailService.sendPasswordEmail(user.email, user.password);
      return 'Usuario valido, ingrese su nueva contraseña';
    } else {
      return null; // Usuario no encontrado
    }
  }

  async getUserByEmail(email: string): Promise<any | null> {
    const existingUsers = await this.getRegisteredUsers();
    const user = existingUsers.find((u) => u.email === email);
    return user || null;
  }

  async changePassword(email: string, newPassword: string): Promise<void> {
    const existingUsers = await this.getRegisteredUsers();
    const updatedUsers = existingUsers.map((user) => {
      if (user.email === email) {
        return { ...user, password: newPassword };
      } else {
        return user;
      }
    });

    await this.saveRegisteredUsers(updatedUsers);
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

  private async getAuthentication(): Promise<string | null> {
    const result = await Storage.get({ key: this.AUTH_KEY });
    return result.value;
  }

  private async setAuthentication(isAuthenticated: boolean): Promise<void> {
    await Storage.set({ key: this.AUTH_KEY, value: isAuthenticated ? 'true' : 'false' });
  }
}
