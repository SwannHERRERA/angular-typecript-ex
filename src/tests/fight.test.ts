import { Pokemon, whoAttackFirst } from "../pokemon";

describe("fight", () => {
  test("Galopa outspeed evoli", () => {
    const galopa = new Pokemon({ name: "Galopa", speed: 70 });
    const evoli = new Pokemon({ name: "Evoli", speed: 50 });
    const fastestPokemon = whoAttackFirst(galopa, evoli);
    expect(fastestPokemon).toBe(galopa);
  });

  test("Galopa is outspeed by pikachu", () => {
    const galopa = new Pokemon({ name: "Galopa", speed: 70 });
    const pikatchu = new Pokemon({ name: "Pikachu", speed: 80 });
    const fastestPokemon = whoAttackFirst(galopa, pikatchu);
    expect(fastestPokemon).toBe(pikatchu);
  });

  test("equal speed", () => {
    const galopa1 = new Pokemon({ name: "Galopa", speed: 70 });
    const galopa2 = new Pokemon({ name: "Galopa", speed: 70 });
    const fastestPokemon = whoAttackFirst(galopa1, galopa2);
    expect(fastestPokemon).toBe(galopa2);
  });
});
