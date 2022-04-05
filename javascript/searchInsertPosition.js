/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {    
    let right = nums.length - 1;
    let left = 0;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right)/2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] > target)
            right = mid - 1;
        else
            left = mid + 1;
    }
    
    return left;
};

// [1, 3, 5, 7] target = 5
// output -> 2