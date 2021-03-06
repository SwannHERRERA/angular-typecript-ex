import { Pokemon } from "../Pokemon";
import { createPokemons } from "..";
import pokeJSON from "../poke.json";

test("Test Galopa creation", () => {
  const galopa = new Pokemon({
    name: "Galopa",
    speed: 70,
    vitalPoint: 100,
    atk: 45,
    def: 23,
  });
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
