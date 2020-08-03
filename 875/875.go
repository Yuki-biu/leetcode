package main	// 包声明 模块化
// go 是一个天生支持多核计算的云开发时代C语言
// node + go 服务器有关
// require('fs') fileSystem
import (
	"fmt"	// 向命令行输出hello world	format
	"math"
)	// es6
// node 脚本类语言
// go c 二进制文件
// 编译原理器
func minEatingSpeed(piles []int, H int) int {
	low := 1 // let low = 1
	// 最大pile的数量 11 交给一个函数
	// 函数是组织代码的最小单元 { 块级作用域 }
	hi := maxPiles(piles)
	// mid := (low + hi) / 2
	// fmt.Println(mid)
	for {
		if low > hi {
			break;
		}
		if canEatAllBananas(piles, H, low) {

		}
		low++
	}

	// 是否可以吃完  1--max  low
	return low
}

func canEatAllBananas(piles []int, H int, k int) bool {
	h := 0
	for i := 0; i < len(piles); i++ {
		h += int(math.Ceil(piles[i] / k)) 
	}
	if H < h {
		return false
	}
	return true
}

func maxPiles(piles []int) int {
	h := 0
	// for 循环遍历出piles中的最大值
	// range
	for _, n := range piles {
		h = max(n, h)
	}
	return h
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {	// func 函数关键字
	// main 开始
	// go 是一个静态语言 有类型约束
	fmt.Printf("%d小时内吃完香蕉的最慢速度是%d只/小时", 8, minEatingSpeed([]int{3, 6, 7, 11}, 8))
}