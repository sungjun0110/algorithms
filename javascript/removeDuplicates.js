/**
 * @param {number[]} nums
 * @return {number}
 */
// Remove duplecate elements from a sorted array
 var removeDuplicates = function(nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[idx] != nums[i]) 
            nums[++idx] = nums[i];
    }
    return ++idx;
};