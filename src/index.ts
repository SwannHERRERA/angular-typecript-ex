import { Pokemon } from "./pokemon";

export const createPokemons = (): Pokemon[] => {
  const pokenames = ["bulbizare", "carapuce", "picachu", "evoli", "galopa"];
  return pokenames.map((name) => new Pokemon(name));
};

const main = () => {
  const pokemons = createPokemons();
  console.log(pokemons);
};

main();
