package main

import "fmt"

func main() {
	var res int
	res = search([]int{-1, 0, 3, 5, 9, 12}, 9)
	fmt.Println(res)

	res = search([]int{-1, 0, 3, 5, 9, 12}, 4)
	fmt.Println(res)
}

func search(nums []int, target int) int {
	return bsearch(nums, target, 0, len(nums)-1)
}

func bsearch(nums []int, target int, low int, high int) int {
	if low > high {
		return -1
	}

	mid := (low + high) / 2
	if target == nums[mid] {
		return mid
	}
	if target < nums[mid] {
		return bsearch(nums, target, low, mid-1)
	}

	return bsearch(nums, target, mid+1, high)
}
