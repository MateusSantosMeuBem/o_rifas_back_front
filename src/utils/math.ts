/**
 * Calculate the value to pay.
 * 
 * @param chosenNumbers Array of chosen numbers
 * @param valuePerRaffle Value of each raffle
 * @returns Value to pay
 */
export const buildValueToPay = (
    chosenNumbersLength: number,
    valuePerRaffle: number
) => chosenNumbersLength * valuePerRaffle;