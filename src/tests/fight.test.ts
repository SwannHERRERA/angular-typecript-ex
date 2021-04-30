import { createPokemons } from "..";
import { Pokemon } from "../pokemon";
import { Fight } from "../Fight";
import { FakeRand } from "./FakeRandom";
import { Move } from "../Move";

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

  test("galopa attack picachu", () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const pikatchu = pokemons.find((poke) => poke.name === "pikachu");
    const doublePied = new Move("double Pied", 30);
    fight.attack(galopa, pikatchu, doublePied);
    expect(pikatchu.vitalPoint).toBe(48);
  });

  test("galopa KO by evoli", () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const evoli = pokemons.find((poke) => poke.name === "evoli");
    const jetDeSableBousted = new Move("Jet de sable Bousster", 1880);
    fight.attack(evoli, galopa, jetDeSableBousted);
    expect(galopa.vitalPoint).toBe(0);
  });
});
