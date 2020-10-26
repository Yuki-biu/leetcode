/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length
    let res = []
    for(let i = 0; i < n; i++) {
        let count = 0
        for(let j = 0; j < n; j++) {
            if(nums[i] > nums[j])  count++
        }
        res.push(count)
    }
    return res
};