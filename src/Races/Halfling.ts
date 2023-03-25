import Race from './Race';

export default class Halfling extends Race {
  private readonly _maxLifePoints = 60;
  private static _numberOfInstances = 0;
  private static readonly _maxNumberOfInstances = 500;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Halfling._numberOfInstances >= Halfling._maxNumberOfInstances) {
      throw new Error('Max number of instances reached');
    }
    Halfling._numberOfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._numberOfInstances;
  }
}