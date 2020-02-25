module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    const arrNumbCharacter = String(number).split("");
    const numberValues = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred"
    };

    if (number <= 20) {
        return `${numberValues[number]}`;
    }

    if (number >= 21 && number <= 100) {
        if (numberValues[number]) {
            return `${numberValues[number]}`;
        } else {
            arrNumbCharacter[0] = arrNumbCharacter[0] + 0;
            const componentsOfNumber = arrNumbCharacter.map(n => Number(n));
            return `${numberValues[componentsOfNumber[0]]} ${
                numberValues[componentsOfNumber[1]]
            }`;
        }
    }

    if (number > 100 && number < 1000) {
        const hundredTeens = Number(arrNumbCharacter[1] + arrNumbCharacter[2]);

        if (arrNumbCharacter[1] === "0" && arrNumbCharacter[2] === "0") {
            return `${numberValues[arrNumbCharacter[0]]} hundred`;
        }

        if (arrNumbCharacter[1] === "0" && arrNumbCharacter[2] !== "0") {
            return `${numberValues[arrNumbCharacter[0]]} hundred ${
                numberValues[arrNumbCharacter[2]]
            }`;
        }

        if (hundredTeens > 10 && hundredTeens < 20) {
            return `${numberValues[arrNumbCharacter[0]]} hundred ${
                numberValues[hundredTeens]
            }`;
        }

        if (arrNumbCharacter[1] !== "0" && arrNumbCharacter[2] === "0") {
            arrNumbCharacter[1] = arrNumbCharacter[1] + 0;
            const arrCompNumb = arrNumbCharacter.map(n => Number(n));
            return `${numberValues[arrCompNumb[0]]} hundred ${
                numberValues[arrCompNumb[1]]
            }`;
        }

        if (arrNumbCharacter[1] !== 0 && arrNumbCharacter[2] !== 0) {
            arrNumbCharacter[1] = arrNumbCharacter[1] + 0;
            const arrCompHundred = arrNumbCharacter.map(n => Number(n));
            return `${numberValues[arrCompHundred[0]]} hundred ${
                numberValues[arrCompHundred[1]]
            } ${numberValues[arrCompHundred[2]]}`;
        }
    }
};
