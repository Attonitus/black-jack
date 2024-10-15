import { cardValue, createCard } from '../autoload.js';


export const PCSystem = (playerPoints, deckShuffle, $pcPlaceCard, $pcPoints, pc) => {


    do{
        const card = pc.drawACard(deckShuffle),
        value = cardValue(card);

        createCard(card, $pcPlaceCard);
        pc.sumPoints(value);
        $pcPoints.textContent = pc.getPoints();

        console.log(pc.getPoints());
        if(playerPoints > 21) break;
    }while(pc.getPoints() < playerPoints && pc.getPoints() < 21);
}