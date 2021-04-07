import { createPokemons } from "..";
import { Pokemon, Fight } from "../pokemon";
import { FakeRand } from "./FakeRandom";

describe("fight", () => {
  const fight = new Fight(new FakeRand());
  const pokemons = createPokemons();
  test("Galopa outspeed evoli", () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const evoli = pokemons.find((poke) => poke.name === "evoli");
    const fastestPokemon = fight.whoAttackFirst(galopa, evoli);
    expect(fastestPokemon).toBe(galopa);
  });

  test("Galopa is outspeed by pikachu", () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const pikatchu = pokemons.find((poke) => poke.name === "pikachu");
    const fastestPokemon = fight.whoAttackFirst(galopa, pikatchu);
    expect(fastestPokemon).toBe(galopa);
  });

  test("equal speed", () => {
    const galopa1 = pokemons.find((poke) => poke.name === "galopa");
    const galopa2 = pokemons.find((poke) => poke.name === "galopa");
    const fastestPokemon = fight.whoAttackFirst(galopa1, galopa2);
    expect(fastestPokemon).toBe(galopa2);
  });
});
