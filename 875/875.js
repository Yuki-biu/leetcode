// 尝试一下！暴力解法 
/**
 * 
 * @param {number[]} piles 
 * @param {Number} H 
 * @return {Number}
 */
var minEatingSpeed = function(piles, H) {
    let lo = 1
    // 求出最大香蕉数，在某堆中
    let hi = Math.max(...piles)
    console.log(lo, hi)
    return lo
}

minEatingSpeed([3, 6, 7, 11], 8)