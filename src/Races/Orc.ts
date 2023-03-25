import Race from './Race';

export default class Orc extends Race {
  private readonly _maxLifePoints = 74;
  private static _numberOfInstances = 0;
  private static readonly _maxNumberOfInstances = 500;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Orc._numberOfInstances >= Orc._maxNumberOfInstances) {
      throw new Error('Max number of instances reached');
    }
    Orc._numberOfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._numberOfInstances;
  }
}