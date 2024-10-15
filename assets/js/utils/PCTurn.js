import { PCSystem } from "../system/PCSystem.js";

export const PCTurn = (pc, $btnDraw, $btnStop, playerPoints, deckShuffle, $pcCards, $pcPoints, time) =>{
    $btnDraw.disabled = true;
    $btnStop.disabled = true;
    PCSystem(playerPoints, deckShuffle, $pcCards, $pcPoints, pc);

}
