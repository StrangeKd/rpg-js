import Character from "./character.js"

class Archer extends Character {
    constructor(job, name, level, xpRange, hp = 60, damage = 23, arrows = 40) {
        super(job, name, level, xpRange, hp, damage)
        this.arrowsValue = arrows;
    }
    get arrows() {
        return this.arrowsValue
    }
    set newArrows(newArrows) {
        this.arrowsValue = newArrows;
    }
}

export default Archer;
