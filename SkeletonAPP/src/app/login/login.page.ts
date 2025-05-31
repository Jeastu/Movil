import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  loginForm: FormGroup;
  datosUsuario: any;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    });
  }

  usuarioInvalido() {
    const ctrl = this.loginForm.get('usuario');
    return ctrl?.touched && !ctrl.valid;
  }

  passwordInvalida() {
    const ctrl = this.loginForm.get('password');
    return ctrl?.touched && !ctrl.valid;
  }

  agregar() {
    if (this.loginForm.valid) {
      this.datosUsuario = this.loginForm.value;
      alert('Datos guardados localmente.');
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  ingresar() {
    if (this.datosUsuario) {
      this.router.navigate(['/home'], {
        state: { datos: this.datosUsuario },
      });
    } else {
      alert('Debes hacer clic en Agregar primero.');
    }
  }
}
