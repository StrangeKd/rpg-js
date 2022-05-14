import Character from "./character.js"

class Wizard extends Character {
    constructor(job, name, level, xpRange, hp = 45, damage = 27, mana = 50) {
        super(job, name, level, xpRange, hp, damage)
        this.manaValue = mana;
    }
    get mana() {
        return this.manaValue
    }
    set newMana(newMana) {
        this.manaValue = newMana;
    }
}

export default Wizard;
