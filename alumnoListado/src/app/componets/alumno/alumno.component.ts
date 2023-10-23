import { Component } from '@angular/core';
import { Alumno } from './models/alumno.interface';
import { Sex } from './models/alumno.interface';

const TOTAL_HOURS = 1000;
const ALUMNOS: Alumno[] = [
  {
    nombre: "manolo",
    apellidos: "manole",
    idAlumno: 1,
    edad: 30,
    sexo: Sex.femenino,
    modulos: [
      {
        nombre: "BBDD",
        horas: 200
      },

      {
        nombre: "ADPSP",
        horas: 200
      },
      {
        nombre: "PMDM",
        horas: 200
      },
      {
        nombre: "LM",
        horas: 200
      },
      {
        nombre: "PSP",
        horas: 200
      }
    ],
    paid: true
  },
  {
    nombre: "manola",
    apellidos: "joe",
    idAlumno: 2,
    edad: 22,
    sexo: Sex.masculino,
    modulos: [
      {
        nombre: "BBDD",
        horas: 200
      },

      {
        nombre: "ADPSP",
        horas: 200
      },
      {
        nombre: "PMDM",
        horas: 200
      },
      {
        nombre: "LM",
        horas: 200
      },
      {
        nombre: "PSP",
        horas: 200
      }
    ],
    paid: true

  },
  {
    nombre: "fernanda",
    apellidos: "joe",
    idAlumno: 3,
    edad: 220,
    sexo: Sex.masculino,
    modulos: [
      {
        nombre: "BBDD",
        horas: 200
      },

      {
        nombre: "ADPSP",
        horas: 200
      },
      {
        nombre: "PMDM",
        horas: 200
      },
      {
        nombre: "LM",
        horas: 200
      },
      {
        nombre: "PSP",
        horas: 200
      }
    ],
    paid: false
  },


]


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  alumnosList = ALUMNOS;
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'edad', 'sexo', 'modulos', 'paid'];
  idAlumno = true;
  nombre = true;
  apellidos = true;
  edad = true;
  sexo = true;
  modulos = true;
  paid = true;

  idShow() {
    if (this.idAlumno) {
      this.displayedColumns.unshift('id');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'id');
    }
  }

  nombreShow() {
    if (this.nombre) {
      this.displayedColumns.unshift('nombre');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'nombre');
    }
  }
  apellidosShow() {
    if (this.apellidos) {
      this.displayedColumns.unshift('apellidos');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'apellidos');
    }
  }
  edadShow() {
    if (this.edad) {
      this.displayedColumns.unshift('edad');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'edad');
    }
  }
  sexoShow() {
    if (this.sexo) {
      this.displayedColumns.unshift('sexo');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'sexo');
    }
  }
  modulosShow() {
    if (this.modulos) {
      this.displayedColumns.unshift('modulos');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'modulos');
    }
  }
  paidShow() {
    if (this.paid) {
      this.displayedColumns.unshift('paid');
    } else {
      this.displayedColumns = this.displayedColumns.filter(x => x != 'paid');
    }
  }



  getSexo(number: number) {
    if (number) {
      return 'bi bi-gender-male'
    } return 'bi bi-gender-female'
  }

  getPaidStudente(Alumno: Alumno) {
    return Alumno.paid ? 'yes' : 'no';
  }

  getApplicationHours(Alumno: Alumno) {

    let totalHoursAlumno = 0;

    Alumno.modulos.forEach(modulo => {

      totalHoursAlumno += modulo.horas;

    })

    let percent = totalHoursAlumno * 100 / TOTAL_HOURS;
    return '<div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: '.concat(percent.toString() + '%') + '" aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100"></div></div>';

  }



}
