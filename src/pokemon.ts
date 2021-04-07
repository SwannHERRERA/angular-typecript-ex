import { Random } from "./Random";

export interface IPokemonProps {
  name: string;
  speed: number;
  pv: number;
  atk: number;
  def: number;
}

export class Pokemon implements IPokemonProps {
  constructor(props: IPokemonProps) {
    this.name = props.name;
    this.speed = props.speed;
    this.pv = props.pv;
    this.atk = props.atk;
    this.def = props.def;
  }
  name: string;
  speed: number;
  pv: number;
  atk: number;
  def: number;
}

export class Fight {
  random: Random;
  constructor(random: Random) {
    this.random = random;
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
