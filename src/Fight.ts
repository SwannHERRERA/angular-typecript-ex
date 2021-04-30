import { Move } from "./Move";
import { Pokemon } from "./Pokemon";
import { Random } from "./Random";
import { wait } from "./utils/wait";

export class Fight {
  random: Random;
  timeToWait: number;
  constructor(random: Random, timeToWait: number) {
    this.random = random;
    this.timeToWait = timeToWait;
  }

  /**
   * @TODO Move Effect not implemented
   */
  async attack(
    attacker: Pokemon,
    defender: Pokemon,
    attackMove: Move
  ): Promise<void> {
    await wait(this.timeToWait);
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
