import { buildValueToPay } from "./math";

/**
 * Capitalize the first letter of a string
 * @param str String to be capitalized
 * @returns Capitalized string
 */
export const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

/**
 * 
 * @param singular The singular sentence
 * @param plural The plural sentence
 * @param number The number to be evaluated
 * @returns The singular sentence if the number is 1, otherwise the plural sentence
 */
const buildNumeral = (
    singular: string,
    plural: string,
    number: number,
) => {
    return number > 1 ? plural : singular
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

    const chosenNumbersLength = chosenNumbers.length;
    const numeral = buildNumeral(
        'o número',
        'os números',
        chosenNumbersLength,
    )
    chosenNumbers.sort((a, b) => a.length - b.length || a.localeCompare(b, 'en', { numeric: true }));
    const numbers = chosenNumbers.join(' | ');
    return [
        `Olá, ${capitalize(sellerName)}! `,
        `Gostaria de comprar ${numeral} ${numbers}.\r\n`,
        `Vou mandar os R$${buildValueToPay(chosenNumbersLength, 5)},00 para o pix: ${pix}.`,
        `\r\nTudo bem?`
    ].join('');
}