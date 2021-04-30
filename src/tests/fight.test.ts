import { createPokemons } from "..";
import { Fight } from "../Fight";
import { FakeRand } from "./FakeRandom";
import { Move } from "../Move";

describe("fight", async () => {
  const fight = new Fight(new FakeRand(), 0);
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

  test("galopa attack picachu", async () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const pikatchu = pokemons.find((poke) => poke.name === "pikachu");
    const doublePied = new Move("double Pied", 30);
    await fight.attack(galopa, pikatchu, doublePied);
    await expect(pikatchu.vitalPoint).toBe(48);
  });

  test("galopa KO by evoli", async () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const evoli = pokemons.find((poke) => poke.name === "evoli");
    const jetDeSableBousted = new Move("Jet de sable Bousster", 1880);
    await fight.attack(evoli, galopa, jetDeSableBousted);
    await expect(galopa.vitalPoint).toBe(0);
  });
});
