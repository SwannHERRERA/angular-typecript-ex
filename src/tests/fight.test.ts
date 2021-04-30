import { createPokemons } from "..";
import { Fight } from "../Fight";
import { FakeRand } from "./FakeRandom";
import { Move } from "../Move";

describe("fight", () => {
  const fight = new Fight(new FakeRand(), 0);
  const pokemons = createPokemons();
  test("Galopa outspeed evoli", () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const evoli = pokemons.find((poke) => poke.name === "evoli");
    const fastestPokemon = fight.whoAttackFirst(galopa, evoli);
    expect(fastestPokemon).toBe(galopa);
  });

  test("Bulbizare is outspeed by pikachu", () => {
    const bulbizare = pokemons.find((poke) => poke.name === "bulbizare");
    const pikatchu = pokemons.find((poke) => poke.name === "pikachu");
    const fastestPokemon = fight.whoAttackFirst(bulbizare, pikatchu);
    expect(fastestPokemon).toBe(pikatchu);
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
    expect(pikatchu.vitalPoint).toBe(48);
  });

  test("galopa KO by evoli", async () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const evoli = pokemons.find((poke) => poke.name === "evoli");
    const jetDeSableBousted = new Move("Jet de sable Bousster", 1880);
    await fight.attack(evoli, galopa, jetDeSableBousted);
    expect(galopa.vitalPoint).toBe(0);
  });
  test("heal pikatchu", async () => {
    const galopa = pokemons.find((poke) => poke.name === "galopa");
    const pikatchu = pokemons.find((poke) => poke.name === "pikachu");
    const doublePied = new Move("double Pied", 30);
    await fight.attack(galopa, pikatchu, doublePied);
    const heal = new Move("Heal", -20);
    await fight.attack(galopa, pikatchu, heal);
    expect(pikatchu.vitalPoint).toBe(0);
  });
});
