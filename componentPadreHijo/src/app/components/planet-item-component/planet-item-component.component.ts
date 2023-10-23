import { Component, Input } from '@angular/core';
import { Planet } from 'src/app/models/plante-list-interface/plante-list-interface.module';

@Component({
  selector: 'app-planet-item-component',
  templateUrl: './planet-item-component.component.html',
  styleUrls: ['./planet-item-component.component.css']
})
export class PlanetItemComponentComponent {
  @Input() planet!: Planet;

}
