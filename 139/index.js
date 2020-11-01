/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, wd = new Set(wordDict), dp = [true]) {
    for(let i = 0; ++i<= s.length; i) {
        for(let j = -1; ++j < i; j) {
            if(dp[i] = dp[j] & wd.has(s.substring(j,i)))
                break
        }
    }
    return dp[s.length]
};