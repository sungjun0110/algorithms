/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let tIdx = 0;
    let sIdx = 0;
    while (tIdx < t.length && sIdx < s.length) {
        if (s[sIdx] === t[tIdx]) {
            tIdx ++;
            sIdx ++;
        } else
            tIdx ++;
    }
    
    return sIdx >= s.length ? true : false;
};

// input s="abc", t="anbgdc"
// output: true
// input: s="axc", t="ahbgdc"
// output: false