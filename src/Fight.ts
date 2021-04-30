import { Pokemon } from "./pokemon";
import { Random } from "./Random";

export class Fight {
  random: Random;
  constructor(random: Random) {
    this.random = random;
  }

  /**
   * @TODO Move Effect not implemented
   */
  attack(attacker: Pokemon, defender: Pokemon, attackMove: Move) {
    defender.vitalPoint -= attackMove.damage - defender.def + attacker.atk;
  }

  whoAttackFirst(poke1: Pokemon, poke2: Pokemon): Pokemon {
    const pokeSpeed1 = poke1.speed + this.random.nextInt(15);
    const pokeSpeed2 = poke1.speed + this.random.nextInt(15);
    if (pokeSpeed1 > pokeSpeed2) {
      return poke1;
    } else {
      return poke2; // if speed are equal return poke2
    }
  }
}
