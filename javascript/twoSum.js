/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const numsDict = {};
    nums.forEach((number, idx) => {
        numsDict[number] = idx;
    });
    for (let i = 0; i < nums.length; i++) {
        if (numsDict[target-nums[i]] && numsDict[target-nums[i]] !== i) return [i, numsDict[target-nums[i]]];
    }
    return;
};