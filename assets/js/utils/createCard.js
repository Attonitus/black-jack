

export const createCard = (card, $placeCard) =>{
    const $img = document.createElement("img");
    $img.setAttribute("src", `../assets/cartas/${card}.png`);
    $placeCard.appendChild($img);
}