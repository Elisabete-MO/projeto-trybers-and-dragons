import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private readonly _energyType: EnergyType;
  private static _numberOfInstances = 0;
  private static readonly _maxNumberOfInstances = 500;

  constructor(
    name: string,
  ) {
    super(name);
    if (Necromancer._numberOfInstances >= Necromancer._maxNumberOfInstances) {
      throw new Error('Max number of instances reached');
    }
    Necromancer._numberOfInstances += 1;
    this._energyType = 'mana';
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfInstances;
  }
}