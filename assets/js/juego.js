
import {cardValue, createDeck, createShuffle, Player, createCard, PCTurn, PC} from './autoload.js';
import { whoWin } from './utils/whoWin.js';

const d = document,
    $btnDraw = d.querySelector(".btnDraw"),
    $btnStop = d.querySelector(".btnStop"),
    $btnNew = d.querySelector(".btnNew"),
    $playerCards = d.getElementById("playerCards"),
    $pcCards = d.getElementById("pcCards"),
    $playerPoints = d.getElementById("playerPoints"),
    $pcPoints = d.getElementById("pcPoints");

    
let deck = [];
const player = new Player();
const cpu = new PC();
    
$btnNew.addEventListener("click", e => {
 
    $btnDraw.disabled = false;
    $btnStop.disabled = false;

    $playerCards.innerHTML = "";
    $pcCards.innerHTML = "";
    
    player.resetPoints();
    cpu.resetPoints();

    $pcPoints.innerText = 0;
    $playerPoints.innerText = 0;

    deck = createDeck();
    deck = createShuffle(deck);


});

$btnDraw.addEventListener("click", e => {

    const card = player.drawACard(deck),
    value  = cardValue(card);
    
    createCard(card, $playerCards);

    player.sumPoints(value);
    $playerPoints.textContent = player.getPoints();

    if(player.getPoints() > 21){
        alert("Bruh... has perdido 🧔🧔🧔");
        PCTurn( cpu,$btnDraw, $btnStop, player.getPoints(), deck, $pcCards, $pcPoints, 5);
    } else if(player.getPoints() === 21){
        alert("21!! geniaaaal 🦨🦨🦨");
        PCTurn(cpu, $btnDraw, $btnStop, player.getPoints(), deck, $pcCards, $pcPoints, 5);
        whoWin(player.getPoints(), cpu.getPoints());
    }
});

$btnStop.addEventListener("click", e => {
    PCTurn(cpu, $btnDraw, $btnStop, player.getPoints(), deck, $pcCards, $pcPoints, 5);
    whoWin(player.getPoints(), cpu.getPoints());
});



