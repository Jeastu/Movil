import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseDatosService } from '../base-datos.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  datosUsuario: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bd: BaseDatosService,
    private storage: Storage
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
    });
  }

  async ngOnInit(): Promise<void> {
  await this.bd.inicializarBD();
  await this.storage.create();
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
      await this.storage.set('usuario_guardado', usuario);


      const existe = await this.bd.validarUsuario(usuario, Number(password));
      if (existe) {
        await this.bd.registrarSesion(usuario, Number(password));
        this.router.navigate(['/home'], {
          state: { datos: { usuario } },
        });
      } else {
        alert('Credenciales incorrectas.');
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
