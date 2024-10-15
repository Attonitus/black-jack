

export const drawCard = (deck) => {
    if(deck.length == 0) throw "No hay mas cartas";
    return deck.shift();
}