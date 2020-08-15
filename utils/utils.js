export function deleteElement(nums, num) {
  let index = nums.indexOf(num)

  nums.splice(index, 1)
}