import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
hide=true;

usuarios: Usuario = {
  uid: '',
  nombre: '',
  apellido: '',
  email: '',
  password: '',
  rol: '',
}
}
