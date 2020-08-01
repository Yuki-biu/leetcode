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
    // console.log(lo, hi)
    for (let i = lo; i <= hi; i++) {
        if(cal(piles, H, i)){
            lo = i
            break
        }
    }

    return lo
}

function cal(piles, H, speed) {
    let temp = 0
    for (let j = 0; j < piles.length; j++) {
        temp += Math.ceil(piles[j] / speed)
    }
    if (temp <= H) {
        return true
    } else {
        return false
    }
}

// console.log(minEatingSpeed([3, 6, 7, 11], 8)) // 4
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) // 30
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)) // 23