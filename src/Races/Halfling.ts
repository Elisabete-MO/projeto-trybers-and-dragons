import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _numberOfInstances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    if (!this._numberOfInstances) {
      this._numberOfInstances = 1;
      return this._numberOfInstances;
    }
    this._numberOfInstances += 1;
    return this._numberOfInstances;
  }
}