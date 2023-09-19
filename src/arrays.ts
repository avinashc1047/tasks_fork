/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let nums: number[] = [];

    if (numbers.length == 1) {
        nums = [...numbers, ...numbers];
    } else if (numbers.length >= 2) {
        const firstLast = (num: number): boolean =>
            numbers.indexOf(num) == 0 ||
            numbers.indexOf(num) == numbers.length - 1;
        nums = [...numbers].filter(firstLast);
    }

    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const nums = [...numbers];
    const tripled = nums.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const toInt = (num: string): number => (parseInt(num) ? parseInt(num) : 0);
    const inted = numbers.map(toInt);
    return inted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const remv$ = (amount: string): string =>
        amount.charAt(0) != "$" ? amount : amount.replace("$", "");
    const str = amounts.map(remv$);
    const toInt = (num: string): number => (parseInt(num) ? parseInt(num) : 0);
    const ints = str.map(toInt);
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const upper = (msg: string): string =>
        msg.endsWith("!") ? msg.toUpperCase() : msg;
    const uppered = messages.map(upper);
    const filt = (msg: string): boolean => !msg.endsWith("?");
    const final = uppered.filter(filt);
    return final;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const filt = (word: string): boolean => word.length < 4;
    const smallWords = words.filter(filt);
    return smallWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        const rgb = ["red", "blue", "green"];
        const filt = (word: string): boolean =>
            rgb.includes(word.toLowerCase());
        const clr = colors.filter(filt);
        return clr.length == colors.length;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    return "";
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *p
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    return [];
}
