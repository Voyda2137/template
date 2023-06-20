export const alcoholAmountCalc = (alcoholPrice, money) => {
    return alcoholPrice > money ? 0 : Math.floor(money / alcoholPrice);
}
export const alcoholTotalPure = (alcoholConcentration, alcoholSize, amount) => {
    return amount === 0 ? 0 : alcoholSize * alcoholConcentration * amount;
}
export const alcoholInOrganism = (alcoholAmount, weight) => {
    return alcoholAmount === 0 || !weight ? undefined : (alcoholAmount / (weight * 0.7)).toFixed(2)
}
/**
 *
 * @param alcoholPercent procent stężenia alkoholu we krwi
 * @returns {string|string} jeśli nie parametru zwracam 0 w przeciwnym wypadku zwracam
 */
export const timeToBeSober = alcoholPercent => {
    if (alcoholPercent === 0 || !alcoholPercent) {
        return undefined;
    }
    else {
        const hours = Math.floor(alcoholPercent / 0.15); // znalazlem taki wzor do wyliczania trzezwienia
        const minutes = Math.round((alcoholPercent / 0.15 - hours) * 60);
        return `${hours} godz. ${minutes} min.`;
    }
};
