class Game {
 constructor(attacker, target) {
  this.currentAttacker = attacker;
  this.currentTarget = target;
 }


 get attacker() {
  return this.currentAttacker
 }

 set newAttacker(newAttacker) {
  this.currentAttacker = newAttacker;
 }

 get target() {
  return this.currentTarget
 }

 set newTarget(newTarget) {
  this.currentTarget = newTarget;
 }

 battleFight() {
  console.log(this.currentAttacker.name + " à attaqué " + this.currentTarget.race);
  console.log("PV de  " + this.currentTarget.race + ' = ' + this.currentTarget.hp);
  this.currentTarget.newHp = this.currentTarget.hp - this.currentAttacker.damage;

  return this.currentTarget.hp - this.currentAttacker.damage;
 }

 static getRandomInt(max) {
  return Math.floor(Math.random() * max);
 }

 static logInfo(text) {
  return text;
 }

 static nextMonster() {
 }
}

export default Game
