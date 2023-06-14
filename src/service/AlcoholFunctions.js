export const alcoholAmountCalc = (alcoholPrice, money) => {
    return alcoholPrice > money ? 0 : Math.floor(money / alcoholPrice);
}
export const alcoholTotalPure = (alcoholConcentration, alcoholSize, amount) => {
    return amount === 0 ? 0 : alcoholSize * alcoholConcentration * amount;
}
export const alcoholInOrganism = (alcoholAmount, weight) => {
    return alcoholAmount === 0 ? 0 : (alcoholAmount / (weight * 0.7)).toFixed(2)
}