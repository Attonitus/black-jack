

const letters = ['C', 'D', 'H', 'S'];

const specials = ['A', 'J', 'K', 'Q'];

export const createDeck = () => {
    let deck = [];
    for(let x = 2; x <= 10; x++){
        for (const letter of letters) {
            deck.push(`${x}${letter}`);
        }
    }

    for (const special of specials) {
        for (const letter of letters) {
            deck.push(`${special}${letter}`);
        }
    }
    return deck;
}

