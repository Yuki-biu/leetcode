/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
    let res = 0
    let count = 0
    let p = 0 // 起始位置
    let max = 0 // 最大的结束位置
    while (1) {
        if(clips.length == 0) return -1 // 如果所有片段都没了，说明无法完成任务
        if (count == clips.length) {
            if (max == 0) return -1
            p = max
            max = 0
            res++
            count = 0
        }
        if (clips[count][0] <= p) {
            if (max < clips[count][1]) {
                max = clips[count][1]  
                if (max >= T) return res + 1
            }
            clips.splice(count, 1)
        } else {
            count++
        }
    }
}