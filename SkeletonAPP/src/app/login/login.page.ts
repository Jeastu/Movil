import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseDatosService } from '../base-datos.service'; // ajusta la ruta si es distinta
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  loginForm: FormGroup;
  datosUsuario: any;

  constructor(private fb: FormBuilder, private router: Router, private bd: BaseDatosService ) {
    this.bd.inicializarBD();
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

  async agregar() {
  if (this.loginForm.valid) {
    const { usuario, password } = this.loginForm.value;
    try {
      await this.bd.registrarSesion(usuario, Number(password));
      alert('✅ Usuario registrado correctamente.');
    } catch (error) {
      alert('❌ Error al registrar usuario.');
      console.error(error);
    }
  } else {
    this.loginForm.markAllAsTouched();
  }
}


  async ingresar() {
  if (this.loginForm.valid) {
    const { usuario, password } = this.loginForm.value;

    const existe = await this.bd.validarUsuario(usuario, Number(password));
    if (existe) {
      await this.bd.registrarSesion(usuario, Number(password)); // marca sesión activa
      this.router.navigate(['/home'], {
        state: { datos: { usuario } }, // puedes enviar más datos si los tienes
      });
    } else {
      alert('Credenciales incorrectas.');
    }
  } else {
    this.loginForm.markAllAsTouched();
  }
}

}
