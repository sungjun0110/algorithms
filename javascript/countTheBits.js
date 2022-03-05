/*
    - Write a function called countTheBits that accepts a single numeric argument that will be an integer.
    - The function should return the number of bits that are set to 1 in the number's binary representation.
*/

function countTheBits(num) {
    const bits = num.toString(2).split('');
    let numOfBits = 0;
    bits.forEach(bit => bit == '1'? numOfBits++ : bit);
    return numOfBits;
  }