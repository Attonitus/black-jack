

export const whoWin = (playerPoints, pcPoints) => {
    console.log(`Puntos player: ${playerPoints}`);
    console.log(`Puntos pc: ${pcPoints}`);
    if(playerPoints === pcPoints){
        alert("Han empatado! 😱😱😱😱😱");
    } else if(playerPoints === 21){
        alert("Has ganado mi causa!! 🦙🦙🦙🦙🐅🐅");
    } else if(playerPoints > pcPoints){
        alert("Has ganado mi causa!! 🦙🦙🦙🦙🐅🐅");
    } else if (pcPoints > 21){
        alert("Has ganado mi causa!! 🦙🦙🦙🦙🐅🐅")
    }  else if (pcPoints > playerPoints){
        alert("Has perdido tronco!! 👈👈👈🤣🤣🤣")
    } else {
        alert("Has perdido tronco!! 👈👈👈🤣🤣🤣");
    }

}