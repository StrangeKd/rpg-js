// add goldGain

class Monster {
    constructor(race, hp, damage, level, xpGain = 25) {
        this.currentRace = race;
        this.hpValue = hp;
        this.damageValue = damage;
        this.levelValue = level;
        this.xpGainValue = xpGain;
    }

    get race() {
        return this.currentRace
    }
    get hp() {
        return this.hpValue
    }
    get damage() {
        return this.damageValue
    }
    get level() {
        return this.levelValue
    }
    get xpGain() {
        return this.xpGainValue
    }

    set newRace(newRace) {
        this.currentRace = newRace;
    }
    set newHp(newHp) {
        this.hpValue = newHp;
    }
    set newDamage(newDamage) {
        this.damageValue = newDamage;
    }
    set newLevel(newLevel) {
        this.levelValue = newLevel;
    }
    set newXpGain(newXpGain) {
        this.xpGainValue = newXpGain;
    }
}

export default Monster
