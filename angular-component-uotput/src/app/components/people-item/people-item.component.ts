import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/models/people-interface';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent {

  @Input() person!: Person;
  @Output() personClick = new EventEmitter<Person>();

  getPersonId() {
    return this.person.url.split('/').reverse()[1];
  }

  getImagenPerson() {
    let id = this.getPersonId();
    let urlImagen = "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg";
    return urlImagen;
  }

  viewPersonDetail() {
    this.personClick.emit(this.person);
  }

}
