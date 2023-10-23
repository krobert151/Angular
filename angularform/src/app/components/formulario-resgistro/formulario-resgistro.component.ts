import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-resgistro',
  templateUrl: './formulario-resgistro.component.html',
  styleUrls: ['./formulario-resgistro.component.css']
})
export class FormularioResgistroComponent {

  name = null;
  surname = null;
  nif = null;
  email = null;
  telefono = null;
  sexo = null;
  conocio = null;
  password = null;
  passwordAgain = null;


  send() {

    console.log(this.name);
    console.log(this.surname);
    console.log(this.nif);
    console.log(this.email);
    console.log(this.telefono);
    console.log(this.sexo);
    console.log(this.conocio);
    console.log(this.password);
    console.log(this.password);




  }
  validate() {

    var itsOkay = false;

    (this.name === null) ? itsOkay = false : itsOkay = true;

    (this.surname === null) ? itsOkay = false : itsOkay = true;

    (this.nif === null) ? itsOkay = false : itsOkay = true;

    (this.email === null) ? itsOkay = false : itsOkay = true;

    (this.telefono === null) ? itsOkay = false : itsOkay = true;

    (this.sexo === null) ? itsOkay = false : itsOkay = true;

    (this.conocio === null) ? itsOkay = false : itsOkay = true;

    (this.password === null) ? itsOkay = false : itsOkay = true;

    (this.passwordAgain === null) ? itsOkay = false : itsOkay = true;

    (this.password === this.passwordAgain) ? itsOkay = true : itsOkay = false;

    if (itsOkay == true) {
      this.send();
    } else {
      this.sendError();
    }

  }
  sendError() {
    console.log("Te has equivocado máquina");
  }



}
