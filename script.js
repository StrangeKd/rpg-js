import Game from "./module/game.js"
import Character from "./module/characters/character.js"
import Warrior from "./module/characters/warrior.js"
import Wizard from "./module/characters/wizard.js"
import Archer from "./module/characters/archer.js"
import Monster from "./module/monsters/monster.js"
import Slime from "./module/monsters/slime.js"
import Dragon from "./module/monsters/dragon.js"


/*let game = new Game(warrior1, dragon1);*/
/*console.log(game.attacker.damageValue);
console.log(game.target.hp);
console.log(game.battleFight());*/

// let counter = 1;

// let mybtn = document.getElementById('mybtn');

// mybtn.addEventListener('click', function(event) {
//     event.preventDefault();
//     if (counter === 3) {
//         dragon1.attackFire();
//     }
//     counter++;
// })


let userCharacter = '';
let userCharacterForm = document.forms['userCharacterForm'];

let idArea = document.getElementsByClassName('idItem')
let fillCardLoop = '';

document.addEventListener('DOMContentLoaded', function(event) {
    console.log('ready');
    console.log(event);

    userCharacterForm.onsubmit = function(e) {
        e.preventDefault();

        let userName = document.userCharacterForm.userName.value;
        let userClassSelection = document.userCharacterForm.userClassSelection.value;

        if (userClassSelection === 'Warrior') {
            userCharacter = new Warrior(userClassSelection, userName);
        }
        else if (userClassSelection === 'Wizard') {
            userCharacter = new Wizard(userClassSelection, userName);
        }
        else userCharacter = new Archer(userClassSelection, userName);

        console.log(userCharacter);
    }

    fillCardLoop = setInterval(idCardFill, 800);

    function idCardFill() {
        if (userCharacter !== '') {
            idArea[0].innerHTML = `Class : ${userCharacter.job}`;
            idArea[1].innerHTML = `Name : ${userCharacter.name}`;
            idArea[2].innerHTML = `Level : ${userCharacter.level}`;
            idArea[3].innerHTML = `Life : ${userCharacter.hp}`;
            idArea[4].innerHTML = `Attack : ${userCharacter.damage}`;
            if (userCharacter.job === 'Warrior') {
                idArea[5].innerHTML = `Armor : ${userCharacter.armor}`;
            }
            else if (userCharacter.job === 'Wizard') {
                idArea[5].innerHTML = `Mana : ${userCharacter.mana}`;
            }
            else {
                idArea[5].innerHTML = `Arrows : ${userCharacter.arrows}`;
            }
        }
    }


    // Slime.slimeFlee();
});
