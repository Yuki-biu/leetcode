/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    var h = new Map, r = [], odd = -1, even = -2, m = S.length >> 1, b = S.length + 1 >> 1
    for(var i = 0; i < S.length; i++) h.set(S[i], h.has(S[i]) ? h.get(S[i]) + 1 : 1)
    h.forEach((n, s, _, i = n) => {
        if (n > b) r = [], h.clear()
        else while(i--) r[n <= m && odd < S.length - 2 ? odd += 2 : even += 2] = s
    })
    return r.join('')
};