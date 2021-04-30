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
