import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private readonly _energyType: EnergyType;
  private static _numberOfInstances = 0;
  private static readonly _maxNumberOfInstances = 500;

  constructor(
    name: string,
  ) {
    super(name);
    if (Ranger._numberOfInstances >= Ranger._maxNumberOfInstances) {
      throw new Error('Max number of instances reached');
    }
    Ranger._numberOfInstances += 1;
    this._energyType = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfInstances;
  }
}