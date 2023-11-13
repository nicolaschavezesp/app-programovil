import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.scss'],
})
export class NotFoundComponent {

  constructor(private router: Router) {}

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
