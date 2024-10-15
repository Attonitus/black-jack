import { drawCard } from "../utils/drawCard.js";

export class Player{
    points = 0;
    constructor(){
        this.points = 0;
    }

    getPoints(){
        return this.points;
    }

    sumPoints(points){
        return this.points += points;
    }

    drawACard(deck){
        return drawCard(deck);
    }

    resetPoints(){
        this.points = 0;
    }

}