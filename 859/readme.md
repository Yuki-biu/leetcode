[859.亲密字符串](https://leetcode-cn.com/problems/buddy-strings/)

## 解题思路
1. 如果A和B的长度不等，直接返回false
2. 如果A == B, 只要A中有两个及以上相同的字符就返回true<br/>
    这里可以将A(String)转成Set格式，如果Set.size < A.length 则A中含有相同字符
3. 剩下的情况中，只有A和B有两个不同字符且交叉相等才返回true, 其他情况均为false