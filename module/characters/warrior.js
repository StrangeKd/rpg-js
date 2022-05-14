import Character from "./character.js"

class Warrior extends Character {
    constructor(job, name, level, xpRange, hp = 90, damage = 19, armor = 5) {
        super(job, name, level, xpRange, hp, damage)
        this.armorValue = armor;
    }
    get armor() {
        return this.armorValue
    }
    set newArmor(newArmor) {
        this.armorValue = newArmor;
    }
}

export default Warrior
