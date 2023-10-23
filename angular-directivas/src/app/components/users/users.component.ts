import { Component } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  nombre = 'Miguel';
  edad = 25;
  apellidos = 'Campos Rivera';
  sexo = 'h';

  isMenorEdad() {
    return this.edad < 18
  }



}
