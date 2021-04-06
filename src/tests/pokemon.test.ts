import { Pokemon } from "../pokemon";
import { createPokemons } from "..";
test("Test Galopa creation", () => {
  const galopa = new Pokemon("Galopa");
  expect(galopa.name).toBe("Galopa");
});

test("Test all pokemons creation", () => {
  const names = ["bulbizare", "carapuce", "picachu", "evoli", "galopa"];
  const pokemons = createPokemons();
  expect(pokemons.length).toBe(names.length);
  names.forEach((name, i) => {
    expect(pokemons[i].name).toBe(name);
  });
});
