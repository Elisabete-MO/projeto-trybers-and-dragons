import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _numberOfInstances: number;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    if (!this._numberOfInstances) {
      this._numberOfInstances = 1;
      return this._numberOfInstances;
    }
    this._numberOfInstances += 1;
    return this._numberOfInstances;
  }
}