import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    player1: Fighter,
    player2: Fighter,
  ) {
    super(player1);
    this.player2 = player2;
  }

  player2: Fighter;

  getNextAttacker(attacker: Fighter | null, defender: Fighter | null)
    : [Fighter, Fighter] {
    if (!attacker || !defender) {
      // In the first round, the attacker is chosen randomly
      return Math.random() < 0.5 ? [this.player, this.player2] 
        : [this.player2, this.player];
    }
    // In the subsequent rounds, the attacker is the one who was not the defender in the previous round
    return attacker === this.player ? [this.player2, this.player] 
      : [this.player, this.player2];
  }

  fight(): number {
    let winner: Fighter | null = null;
    let attacker: Fighter | null = null;
    let defender: Fighter | null = null;
  
    while (!winner) {
      [attacker, defender] = this.getNextAttacker(attacker, defender);
      attacker.attack(defender);
  
      if (defender.lifePoints <= 0) {
        winner = attacker;
      }
    }  
    return winner === this.player ? 1 : -1;
  }
}
