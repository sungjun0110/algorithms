/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const dict = {};
    for (let i = 0; i < s.length; i++) {
        if (!dict[s[i]]) 
            dict[s[i]] = [i];
        else
            dict[s[i]].push(i);
    }
    for (const [key, value] of Object.entries(dict)) 
        if (value.length === 1) 
            return value[0];
    return -1;
};