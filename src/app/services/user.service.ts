// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly USER_KEY = 'registered_users';

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

    return !!user; // Devuelve true si el usuario es encontrado
  }

  // Cambiado de private a public
  public async getRegisteredUsers(): Promise<any[]> {
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
}
