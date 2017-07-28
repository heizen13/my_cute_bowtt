let player = {
    maxhealth:100,
    health:100,
    power: 20
}
let opponent = {
    maxhealth:100,
    health:100,
    power:20
}
const attack = () => {
    let attackButton = document.getElementById("attack-button");
    let restartButton = document.getElementById("restart-button");
    let gameMessage = document.getElementById("game-message");
    let playerAttack = determineAttack(player.power);
    opponent.health -= playerAttack;
    printToScreen();
    attackButton.disabled = true;
    gameMessage.innerText ="Opponent recieve " +playerAttack+ "damage";
    if(isGameOver(opponent.health)){
        opponent.health = 0 ;
        gameMessage.innerText = "Player Won.";
        attackButton.hidden = true;
        restartButton.hidden = false;
        printToScreen();
        return;
    }
    setTimeout(() => {
        let opponentAttack = determineAttack(opponent.power);
        player.health -= opponentAttack;
        gameMessage.innerText = "You recieve " + opponentAttack  +"damage";
        attackButton.disabled = false;
        printToScreen();
        if(isGameOver(player.health)){
            player.health =0;
            gameMessage.innerText = "You died.";
            attackButton.hidden = true;
            restartButton.hidden = false;
            printToScreen();
            return;
    }
    }, 2000);

}
const determineAttack = (power) => {
    return Math.floor(Math.random()*power);
}
const isGameOver = (health) => {
    return health <= 0;
}
const endGame = (message) => {
    document.getElementById("game-message").innerText=message;
}

const printToScreen = () => {

    var ohealth = document.getElementById("opponent-health").innerText = opponent.health;
    var phealth = document.getElementById("player-health").innerText = player.health;
    var elem1 = opponent.maxhealth;
    var elem2 = player.maxhealth;
    var oh = document.getElementById("opponent-health");
    var ph = document.getElementById("player-health");
    var oper = Math.floor((ohealth/elem1)*100);
    var pper = Math.floor((phealth/elem2)*100);
    oh.style.width = oper + '%';
    ph.style.width = pper + '%';
    if(oper <= '20'){
        oh.style.backgroundColor ="red";
    }
     if(pper <= '20'){
        ph.style.backgroundColor ="red";
    }
    console.log(pper);

}

printToScreen();
