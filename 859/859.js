/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length != B.length) {
        return false
    }
    if(A == B && searchSame(A)) {
        return true
    }
    return searchDiff(A, B)
};

var searchDiff = function(A, B) {
    let diff = []
    for(let i in A) {
        if(A[i] != B[i]) {
            diff.push(i)
        }
    }
    if(diff.length == 2 && A[diff[0]] == B[diff[1]] && A[diff[1]] == B[diff[0]]) {
        return true
    } else {
        return false
    }
}

var searchSame = function(s) {
    var mySet = new Set(s)
    if (mySet.size != s.length) {
        return true
    } else {
        return false
    }
}