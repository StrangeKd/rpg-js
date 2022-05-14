// function attack(attacker, victim) {
//     let result = victim.hp - attacker.damage;
//     console.log(result)

//     victim.newHp = result;
// }


// function xpCalcul(monsterLevel, monsterXpGain) {
//     let xpResult = monsterLevel * monsterXpGain
// }

class Fight {
    constructor(character, monster) {
        this.characterValue = character;
        this.monsterValue = monster;
    }


}

class DamageDealing extends Fight {
    constructor(character, monster, characterHp, monsterHp, characterDamage, monsterDamage) {
        super(character, monster)
        this.characterHpValue = characterHp;
        this.monsterHpValue = monsterHp;
        this.characterDamageValue = characterDamage;
        this.monsterDamageValue = monsterDamage;
    }


}


class FightResume {
    constructor(characterLevel, monsterLevel, characterXpRange, monsterXpGain) {
        this.characterLevelValue = characterLevel;
        this.monsterLevelValue = monsterLevel;
        this.characterXpRangeValue = characterXpRange;
        this.monsterXpGainValue = monsterXpGain;
    }




}
