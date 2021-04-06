import { Pokemon } from "./pokemon";

const main = () => {
  const pokenames = ["bulbizare", "carapuce", "picachu", "evoli", "galopa"];
  const pokemons = pokenames.map((name) => new Pokemon(name));
  console.log(pokemons);
};
main();
