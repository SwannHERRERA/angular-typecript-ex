import { Random } from "./Random";

export interface IPokemonProps {
  name: string;
  speed: number;
  vitalPoint: number;
  atk: number;
  def: number;
}

export class Pokemon implements IPokemonProps {
  constructor(props: IPokemonProps) {
    this.name = props.name;
    this.speed = props.speed;
    this.maxPv = props.vitalPoint;
    this.atk = props.atk;
    this.def = props.def;

    this.vitalPoint = this.maxPv;
    this.status = [];
  }

  public get vitalPoint(): number {
    return this._vitalPoint;
  }
  public set vitalPoint(value: number) {
    if (value > this.vitalPoint) {
      this._vitalPoint = this.maxPv;
    } else if (value < 0) {
      this._vitalPoint = 0;
    } else {
      this._vitalPoint = value;
    }
  }

  name: string;
  speed: number;
  private _vitalPoint!: number;
  maxPv: number;
  atk: number;
  def: number;
  status: Effect[];
}

export enum Effect {
  burned,
  asleep,
  poisoned,
}
export class Move {
  name: string;
  damage: number;
  effets?: Effect[];
  constructor(name: string, damage: number, effets?: Effect[]) {
    this.damage = damage;
    this.name = name;
    this.effets = effets;
  }
}

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
