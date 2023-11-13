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
      return true;
    } else {
      return false;
    }
  }

  async isAuthenticated(): Promise<boolean> {
    const result = await this.getAuthentication();
    return result === 'true';
  }

  async logoutUser(): Promise<void> {
    await this.setAuthentication(false);  // Marcar como no autenticado
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
