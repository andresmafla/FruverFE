import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  correo_electronico: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin(): void {
    this.loginService.login(this.correo_electronico, this.contrasena).subscribe(
      (response) => {
        this.router.navigate(['/admin']);
      },
      (error) => {
        this.errorMessage = 'No se pudo iniciar sesión. Verifica tus credenciales.';
      }
    );
  }
}
