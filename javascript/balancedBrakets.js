/*
    - Write a function called balancedBrackets that accepts a single string as argument.
    - The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
    - The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
    - The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...
*/

function balancedBrackets(str) {
    if (str.length % 2 !== 0) return false;
  
    const lookup = {
      ')': '(',
      ']': '[',
      '}': '{'
    }
    openBrackets = []
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{')
        openBrackets.push(str[i]);
      if (str[i] === ')' || str[i] === ']' || str[i] === '}')
        if (lookup[str[i]] !== openBrackets.pop()) return false;
    }
  
    if (openBrackets.length > 0) return false;
    return true;
  }