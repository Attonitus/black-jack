

export const createCard = (card, $placeCard) =>{
    const $img = document.createElement("img");
    $img.setAttribute("src", `/black-jack/assets/cartas/${card}.png`);
    $placeCard.appendChild($img);
}