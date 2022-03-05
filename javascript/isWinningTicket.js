/*
    - Write a function called isWinningTicket that accepts a single array an as argument.
    - The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
    - The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
    - If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.
*/

function isWinningTicket(tickets) {
    let str;
    for (let n = 0; n < tickets.length; n++) {
      str = tickets[n][0];
      result = false;
      for(let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === tickets[n][1]) result = true;
      }
      if (!result) return false;
    }
    return true;
  }