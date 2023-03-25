import Race from './Race';

export default class Dwarf extends Race {
  private readonly _maxLifePoints = 80;
  private static _numberOfInstances = 0;
  private static readonly _maxNumberOfInstances = 500;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    if (Dwarf._numberOfInstances >= Dwarf._maxNumberOfInstances) {
      throw new Error('Max number of instances reached');
    }
    Dwarf._numberOfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._numberOfInstances;
  }
}
