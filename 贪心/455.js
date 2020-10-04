
// 较小的饼干分配给胃口较小的孩子
// 数组升序排序


var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[total]) {
            total++;
        }
        if (total >= g.length) return total
    }
    return total;
};