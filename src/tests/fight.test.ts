import { Pokemon, whoAttackFirst } from "../pokemon";

describe("fight", () => {
  test("Galopa outspeed evoli", () => {
    const galopa = new Pokemon({ name: "Galopa", speed: 70 });
    const evoli = new Pokemon({ name: "Evoli", speed: 50 });
    const fastestPokemon = whoAttackFirst(galopa, evoli);
    expect(fastestPokemon).toBe(galopa);
  });
});
