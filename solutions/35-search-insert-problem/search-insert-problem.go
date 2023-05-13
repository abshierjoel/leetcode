package main

func main() {
	searchInsert()
}

func searchInsert(nums []int, target int) int {
	return binaryInsert(nums, target, 0, len(nums)-1)
}

func binaryInsert(nums []int, target int, lo int, hi int) int {
	if lo > hi {
		return lo
	}

	mid := (lo + hi) / 2
	if target == nums[mid] {
		return mid
	}
	if target < nums[mid] {
		return binaryInsert(nums, target, lo, mid-1)
	}

	return binaryInsert(nums, target, mid+1, hi)
}
