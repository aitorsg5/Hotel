import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Datos simulados de usuarios
  usuarios = [
    { nombreUsu: 'admin', password: '1234' },
    { nombreUsu: 'user', password: 'abcd' }
  ];

  // Variables para capturar el formulario
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  loginMessage: string = '';

  constructor() {}

  // Método para manejar el inicio de sesión
  login(): void {
    const usuario = this.usuarios.find(
      user => user.nombreUsu === this.username && user.password === this.password
    );

    if (usuario) {
      this.isLoggedIn = true;
      this.loginMessage = `Welcome, ${this.username}!`;
    } else {
      this.loginMessage = 'Invalid username or password.';
      alert(this.loginMessage);
    }
  }

  // Método para cerrar sesión
  logout(): void {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }
}
