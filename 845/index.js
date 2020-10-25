/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let len = 0
    for( let i = 1; i < A.length - 1; i++) {
        if(A[i] > A[i-1] && A[i] > A[i+1]) {
            let tmp = i
            let count = 1
            while( A[tmp] > A[tmp-1] && tmp > 0) {
                count++
                tmp--
            }
            tmp = i
            while( A[tmp] > A[tmp+1] && tmp < A.length) {
                count++
                tmp++
            }
            len = len > count ? len : count
        }
    }
    return len
};