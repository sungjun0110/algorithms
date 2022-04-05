/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length <= 1) return nums;
    let right = 1;
    let left = 0;
    while (left < right) {
        if (nums[left] === 0) {
            if (nums[right] !== 0) {
                nums[left] = nums[right];
                nums[right] = 0;
                left ++;
                right = left + 1;
                if (right >= nums.length) return nums;
            } else {
                right += 1;
                if (right >= nums.length) return nums;
            }
        } else {
            left++;
            right = left + 1;
            if (right >= nums.length) return nums;
        }
    }
    return nums;
};

// input: nums = [0, 1, 0, 3, 12] 
// output: [1, 3, 12, 0, 0]