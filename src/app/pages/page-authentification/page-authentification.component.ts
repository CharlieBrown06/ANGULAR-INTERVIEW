import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFormComponent, AuthCredentials } from '../../components/organisms/auth-form/auth-form.component';

@Component({
  selector: 'app-page-authentification',
  imports: [AuthFormComponent],
  templateUrl: './page-authentification.component.html',
  styleUrl: './page-authentification.component.scss',
})
export class PageAuthentificationComponent {
  constructor(private router: Router) {}

  onLogin(credentials: AuthCredentials): void {
    console.log('Tentative de connexion:', credentials);
    // TODO: Implémenter l'authentification
  }
}
