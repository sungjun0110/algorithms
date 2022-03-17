/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    return [...nums, ...nums];
};

console.log([1, 2, 3]);
// -> [1, 2, 3, 1, 2, 3]