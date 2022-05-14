import Monster from "./monster.js"
import Game from "../game.js"

class Slime extends Monster {
    constructor(race = 'Slime', hp = 25, damage = 20, level = 1, xpGain) {
        super(race, hp, damage, level, xpGain)
    }

    static slimeFlee() {
        let calcFlee = Game.getRandomInt(6);

        console.log(calcFlee)
        if (calcFlee === 4) {
            console.log('fuite')
        }
    }
}

export default Slime;
