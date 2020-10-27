/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var res = []
    while(arr.length) {
        let flag = arr.pop()
        let count = 1
        for (let i = arr.length; i >= 0; i--) {
            if(arr[i] == flag) {
                arr.splice(i, 1)
                count++
            }
        }
        res.push(count)
    }
    let s = new Set(res)
    return res.length == s.size
};