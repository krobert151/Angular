import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/modals/pokedex/pokedex.module';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  @Input() pokemon!: Pokemon;

  getPokemonId() {
    return this.pokemon.url.split('/').reverse()[1];
  }

  getSpritePokemon() {
    var id = this.getPokemonId();
    var urlImagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
    return urlImagen;
  }

}
