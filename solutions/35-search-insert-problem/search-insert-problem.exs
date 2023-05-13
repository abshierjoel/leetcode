defmodule Solution do
  @spec search_insert(nums :: [integer], target :: integer) :: integer
  def search_insert(nums, target) do
    binary_insert(nums, target, 0, length(nums) - 1)
  end

  defp binary_insert(_nums, _target, lo, hi) when lo > hi, do: -1

  defp binary_insert(nums, target, lo, hi) do
    mid = div(lo + hi, 2)
    val = Enum.at(nums, mid)

    cond do
      target > val -> binary_insert(nums, target, mid + 1, hi)
      target < val -> binary_insert(nums, target, lo, mid - 1)
      true -> mid
    end
  end
end
