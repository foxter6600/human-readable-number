module.exports = function toReadable(number) {
    const single = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tys = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundred = "hundred";
    const numberArr = number.toString().split("");

    if (number < 10) {
        return single[number];
    } else if (number < 20) {
        return teens[numberArr[1]];
    } else if (number < 100) {
        return tys[numberArr[0]] + " " + single[numberArr[1]];
    } else {
        return (
            single[numberArr[0]] +
            " " +
            hundred +
            " " +
            tys[numberArr[1]] +
            " " +
            single[numberArr[2]]
        );
    }
};
