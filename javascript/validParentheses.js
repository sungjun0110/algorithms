/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const lookUp = {
        "}" : "{",
        ")" : "(",
        "]" : "["
    }
    
    const openingBrakets = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (openingBrakets.pop() !== lookUp[s[i]]) return false;
        } else {
            openingBrakets.push(s[i]);
        }
    }
    if (openingBrakets.length > 0) return false;
    return true;
};

console.log(isValid('(){}[]'));
// -> true

console.log(isValid('()]'));
// -> false