import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
hide =true;
usuarios: Usuario = {
  uid: '',
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  rol: '',
}
}
