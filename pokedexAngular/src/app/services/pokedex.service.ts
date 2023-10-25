import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../modals/pokedex/pokedex.module';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private pokemonList: HttpClient) {

  }

  getPokemonList(): Observable<Pokedex> {
    return this.pokemonList.get<Pokedex>('https://pokeapi.co/api/v2/pokemon/');
  }

}
