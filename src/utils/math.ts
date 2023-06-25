/**
 * Calculate the value to pay.
 * 
 * @param chosenNumbers Array of chosen numbers
 * @param valuePerRaffle Value of each raffle
 * @returns Value to pay
 */
export const buildValueToPay = (
    chosenNumbers: string[],
    valuePerRaffle: number
) => chosenNumbers.length * valuePerRaffle;