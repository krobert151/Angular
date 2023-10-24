import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-list/pokemon-list.module';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {
  @Input() pokemon !: Pokemon;

  @Output() PokemonClick = new EventEmitter<String>();


  getPokemonImage() {
    const pokemonId = this.pokemon.url.split("/")[6];
    return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonId + '.png'
  }

  viewPokemonDetail() {
    this.PokemonClick.emit(this.pokemon.url.split("/")[6]);
  }


}
