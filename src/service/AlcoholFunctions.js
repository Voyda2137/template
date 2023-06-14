export const alcoholAmountCalc = (alcoholPrice, money) => {
    if (alcoholPrice > money) {
        return 0
    }

    const buyableAmount = Math.floor(money / alcoholPrice);
    return buyableAmount;
}
export const alcoholTotalPure = (alcoholConcentration, alcoholSize, amount) => {
    if (amount === 0) return 0
    else {
        return alcoholSize * alcoholConcentration * amount
    }
}