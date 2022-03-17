/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        if (digits[i] === 10) {
            digits[i] = 0;
            carry = 1;
        } else if (carry === 0) {
            return digits;
        } else {
            carry = 0;
        }
    }

    if (carry > 0) {
        digits.unshift(1);
    }

    return digits;
};

console.log(plusOne([8, 9, 9, 9]));