import Monster from "./monster.js"

class Dragon extends Monster {
    constructor(race = 'Dragon', hp = 200, damage = 44, level = 15, xpGain, fire = 1.5) { // fire as dammage multiplier 
        super(race, hp, damage, level, xpGain)
        this.fireValue = fire;
    }

    get fire() {
        return this.fireValue
    }

    set newFire(newFire) {
        this.fireValue = newFire;
    }

    attackFire() {
        console.log(this.damageValue);
        console.log(this.fireValue);
        console.log(this.newDamage = this.damageValue * this.fire);
        return this.newDamage = this.damageValue * this.fire;
    }
}

export default Dragon;
