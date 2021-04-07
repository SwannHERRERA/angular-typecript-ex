export interface IPokemonProps {
  name: string;
  speed: number;
}

export class Pokemon implements IPokemonProps {
  constructor(props: IPokemonProps) {
    this.name = props.name;
    this.speed = props.speed;
  }
  name: string;
  speed: number;
}

export function whoAttackFirst(poke1: Pokemon, poke2: Pokemon): Pokemon {
  if (poke1.speed > poke2.speed) {
    return poke1;
  } else {
    return poke2; // if speed are equal return poke2
  }
}
