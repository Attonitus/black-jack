
export const cardValue = (card) => {
    let value = card.substring(0, card.length -1);

    if( isNaN(value) ) value === 'A' ? value = 11 : value =10;

    return value * 1;
}