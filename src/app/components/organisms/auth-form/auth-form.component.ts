import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../molecules/form-field/form-field.component';
import { ButtonComponent } from '../../atoms/button/button.component';

export interface AuthCredentials {
  login: string;
  password: string;
}

@Component({
  selector: 'app-auth-form',
  imports: [CommonModule, FormsModule, FormFieldComponent, ButtonComponent],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  login: string = '';
  password: string = '';

  @Output() submitForm = new EventEmitter<AuthCredentials>();

  onSubmit(): void {
    if (this.login && this.password) {
      this.submitForm.emit({
        login: this.login,
        password: this.password
      });
    }
  }
}
