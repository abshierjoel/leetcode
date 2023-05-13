defmodule Solution do
  @spec next_greatest_letter(letters :: [char], target :: char) :: char
  def next_greatest_letter(letters, target) do
    ngl(letters, target, 0, length(letters) - 1)
  end

  defp ngl(letters, target, lo, hi) when lo >= hi do
    val = Enum.at(letters, lo)
    if val <= target, do: Enum.at(letters, 0), else: val
  end

  defp ngl(letters, target, lo, hi) do
    mid = div(lo + hi, 2)
    val = Enum.at(letters, mid)

    if val <= target,
      do: ngl(letters, target, mid + 1, hi),
      else: ngl(letters, target, lo, mid)
  end
end
