import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Current URL:', event.urlAfterRedirects);

        if (event.url === '/' || event.urlAfterRedirects === '/') {
          this.router.navigate(['/login']);
        }

        if (!this.isValidRoute(event.urlAfterRedirects)) {
          console.error('Invalid Route:', event.urlAfterRedirects);
          this.router.navigate(['/not-found']);
        }
      }
    });
  }

  private isValidRoute(url: string): boolean {
    const validRoutes = ['/home', '/login', '/configuraciones', '/perfil', '/recuperar', '/qr-code', '/register', '/homeprincipal'];

    // Elimina los parámetros de la URL antes de verificar la validez
    const urlWithoutParams = url.split('?')[0];
    return validRoutes.includes(urlWithoutParams);
  }
}
