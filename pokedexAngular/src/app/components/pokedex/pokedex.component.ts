import { Component, OnInit } from '@angular/core';
import { Pokedex, Pokemon } from 'src/app/modals/pokedex/pokedex.module';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  PokemonList: Pokemon[] = []

  constructor(private pokedexService: PokedexService) { }
  ngOnInit(): void {

    this.pokedexService.getPokemonList().subscribe(res => {
      this.PokemonList = res.results;
    })


  }




}
