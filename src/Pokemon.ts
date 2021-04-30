import { Effect } from "./Move";

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
    if (value < 0) {
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
