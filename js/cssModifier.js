let ngBtn = document.getElementById('ngBtn');
let formArea = document.getElementById('registerForm');
let fancy = document.getElementById('fancy-border');
let statBox = document.getElementById('idCharacter');
let statArea = document.querySelectorAll('.stats');
let gameArea = document.getElementById('battlefield');
let slimeBattle = document.getElementById('slimeFightBtn');
let fightBtn = document.getElementById('buttonArea')

ngBtn.addEventListener('click', function(e) {
    fancy.classList.add('border-register');
    formArea.classList.remove('registerForm');
    formArea.classList.add('hidden');
    statArea.forEach(box => {
        box.classList.remove('height-web');
    });
    fightBtn.classList.remove('hidden');
});


slimeBattle.addEventListener('click', function() {
    gameArea.classList.remove('hidden');

});
