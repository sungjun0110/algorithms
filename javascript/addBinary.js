/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let output = '';

    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) sum += Number(a[i]);
        if (j >= 0) sum += Number(b[j]);
        i--;
        j--;
        sum > 1 ? carry = 1 : carry = 0;
        output += (sum % 2).toString();
    }

    if (carry > 0) output += carry.toString();
    return output.split('').reverse().join('');
};

console.log(addBinary('11', '1'));
// '100'