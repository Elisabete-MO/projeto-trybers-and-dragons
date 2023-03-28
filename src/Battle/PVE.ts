import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(player: Fighter, private monsters: SimpleFighter[]) {
    super(player);
  }

  override fight(): number {
    let battleInProgress = true;

    while (battleInProgress) {
      this.monsterAttack();
      if (this.player.lifePoints === -1) {
        battleInProgress = false;
        return -1;
      }

      this.playerAttack();
      if (this.monsters.every((monster) => monster.lifePoints === -1)) {
        battleInProgress = false;
        return 1;
      }
    }

    return 0;
  }

  private monsterAttack(): void {
    this.monsters.forEach((monster) => {
      if (this.player.lifePoints !== -1) {
        monster.attack(this.player);
      }
    });
  }
  
  private playerAttack(): void {
    this.monsters.forEach((monster) => {
      if (monster.lifePoints !== -1) {
        this.player.attack(monster);
      }
    });
  } 
}
