import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _numberOfInstances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
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