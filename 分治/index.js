// 归并排序： [1, 3, 2, 6, 9, 4, 5, 7]

const merge_sort = function (arr) {
    if(arr.length == 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge_sort(merge_sort(left), merge_sort(right))  // 合并左右部分
}

const Merge = function(a, b) {
    let n = a && a.length
    let m = b && b.length
    let c = []
    let i = 0, j = 0
    while (i < n && j < m) {
        if (a[i] < b[j]) {
            c.push(a[i++])
        } else {
            c.push(b[j++])
        }
    }
    while (i < n) {
        c.push(a[i++])
    }
    while (j < m) {
        c.push(b[j++])
    }

    return c
}