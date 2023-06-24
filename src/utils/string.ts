import { buildValueToPay } from "./math";

/**
 * Capitalize the first letter of a string
 * @param str String to be capitalized
 * @returns Capitalized string
 */
export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Build the value to pay.
 * @param chosenNumbers Array of chosen numbers
 * @param price Price of each number
 * @returns Value to pay
 */
export const buildMessage = (
    chosenNumbers: string[],
    sellerName: string,
    pix: string,
) => {
    const numbers = chosenNumbers.join(' | ');
    return [
        `Olá, ${capitalize(sellerName)}!`,
        `Gostaria de comprar os números ${numbers}.`,
        `Vou mandar os R$${buildValueToPay(chosenNumbers, 5)},00 para o pix: ${pix}. Tudo bem?`
    ].join(' ');
}