/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const output = [];    
    for (let i = 0; i < (nums.length) * 2; i++) {
        output.push(nums[i % nums.length]);
    }
    return output;
};

console.log(getConcatenation([1, 2, 3]));
// -> [1, 2, 3, 1, 2, 3]