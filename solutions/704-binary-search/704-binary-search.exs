defmodule Solution do
  @spec search(nums :: [integer], target :: integer) :: integer
  def search(nums, target), do: search(nums, target, 0, length(nums) - 1)

  defp search(nums, target, low, high) when low > high, do: -1

  defp search(nums, target, low, high) do
    mid = div(low + high, 2)
    midVal = Enum.at(nums, mid)

    cond do
      target < midVal -> search(nums, target, low, mid - 1)
      target > midVal -> search(nums, target, mid + 1, high)
      target == midVal -> mid
    end
  end
end
