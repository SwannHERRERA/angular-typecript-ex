import { Pokemon } from "./pokemon";
import pokemonJSON from "./poke.json";

export const createPokemons = (): Pokemon[] => {
  return pokemonJSON.map((pokeJSON) => new Pokemon(pokeJSON));
};

const main = () => {
  const pokemons = createPokemons();
  // console.log(pokemons);
};

main();
