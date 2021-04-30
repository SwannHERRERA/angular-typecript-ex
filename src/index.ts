import { Pokemon } from "./Pokemon";
import pokemonJSON from "./poke.json";
import { Fight } from "./Fight";
import { FakeRand } from "./tests/FakeRandom";
import { Move } from "./Move";
export const createPokemons = (): Pokemon[] => {
  return pokemonJSON.map((pokeJSON) => new Pokemon(pokeJSON));
};

const main = async () => {
  const fight = new Fight(new FakeRand(), 2000);
  const pokemons = createPokemons();
  const galopa = pokemons.find((poke) => poke.name === "galopa");
  const evoli = pokemons.find((poke) => poke.name === "evoli");
  const jetDeSableBousted = new Move("Jet de sable Bousster", 1880);
  if (galopa && evoli) {
    await fight.attack(evoli, galopa, jetDeSableBousted);
  }
};

main();
