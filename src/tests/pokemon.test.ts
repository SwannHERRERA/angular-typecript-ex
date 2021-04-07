import { Pokemon } from "../pokemon";
import { createPokemons } from "..";
import pokeJSON from "../poke.json";

test("Test Galopa creation", () => {
  const galopa = new Pokemon({ name: "Galopa", speed: 70 });
  expect(galopa.name).toBe("Galopa");
});

test("Test all pokemons creation", () => {
  const pokemons = createPokemons();
  expect(pokemons.length).toBe(pokeJSON.length);
  pokeJSON.forEach((pokemon, i) => {
    expect(pokemons[i].name).toBe(pokemon.name);
    expect(pokemons[i].speed).toBe(pokemon.speed);
  });
});
