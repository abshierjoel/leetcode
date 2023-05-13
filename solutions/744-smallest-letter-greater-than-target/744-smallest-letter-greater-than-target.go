func nextGreatestLetter(letters []byte, target byte) byte {
	return nextGreatestChar(letters, target, 0, len(letters)-1)
}

func nextGreatestChar(nums []byte, target byte, lo int, hi int) byte {
	if lo >= hi {
		if nums[lo] <= target {
			return nums[0]
		}
		return nums[lo]
	}

	mid := (lo + hi) / 2
	if nums[mid] <= target {
		return nextGreatestChar(nums, target, mid+1, hi)
	}

	return nextGreatestChar(nums, target, lo, mid)
}
