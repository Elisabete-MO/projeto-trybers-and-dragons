import Race from './Race';

export default class Elf extends Race {
  private readonly _maxLifePoints = 99;
  private static _numberOfInstances = 0;
  private static readonly _maxNumberOfInstances = 500;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    if (Elf._numberOfInstances >= Elf._maxNumberOfInstances) {
      throw new Error('Max number of instances reached');
    }
    Elf._numberOfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._numberOfInstances;
  }
}