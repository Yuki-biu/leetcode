// 分数背包问题
// 可以装入分数的物品，使得装入的总质量一定，价值最大的装法。
// 如果容量为 6，
// 可以装入 1 和 2，25%容量装入 3，重量为 6 的物品总价值为 8.25。

// 物品  重量  价值
//  1     2     3
//  2     3     4
//  3     4     5

// 迭代整个商品，总质量小于背包的容量，装入物品
// 如果物品可以完整装入背包，就将其价值和重量分别计入已装总价值和总质量
// 如果物品不能完整装入背包，就计算可以装入的比例，再计算总价值和总质量
function knapSack(capacity, values, weights) {
    let n = values.length, load = 0, i = 0, val = 0
    for ( i = 0; i < n && load < capacity; i++) {
        if (weights[i] <= (capacity - load)) {
            val += values[i]
            load += weights[i]
        } else {
            
        }
    }
}
