/*
    - Write a function called toCamelCase that accepts a single string as argument.
    - The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
    - If the string argument does not contain a "_" or a "-", return the same string.
*/

function toCamelCase(str) {
    let arr = str.split('');
    let caps = false;
    for (let i = 0; i < arr.length; i++) {
      if (caps) {
        arr[i] = arr[i].toUpperCase();
        caps = false;
      }
      if (arr[i] === '-' || arr[i] === '_') {
        arr.splice(i, 1);
        caps = true;
        i--;
      }
    }
    return arr.join('');
  }