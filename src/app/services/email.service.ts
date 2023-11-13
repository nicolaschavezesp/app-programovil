// src/app/services/email.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private readonly apiUrl = 'https://tu-servidor.com/api'; // Reemplaza con la URL de tu servidor

  constructor(private http: HttpClient) {}

  sendPasswordEmail(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/send-password-email`, body);
  }
}
