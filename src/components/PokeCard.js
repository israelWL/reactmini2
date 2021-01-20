import React from "react";
import { mockPokemonData } from "../mock/pokeData";

export default function PokeCard() {
  return (
    <div>
      <h1>{mockPokemonData.name}</h1>
      <img src={mockPokemonData.sprites.front_default} />
      <img src={mockPokemonData.sprites.front_shiny} />
      <a href={mockPokemonData.video} target="_blank">
        video
      </a>
    </div>
  );
}
