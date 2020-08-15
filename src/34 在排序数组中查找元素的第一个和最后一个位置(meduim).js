/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 这个就属于二分查找找左右边界的例子 假设数组为[5,7,7,8,8,10],如果我们要找8的左边界
 * 我们就是看作是找7.9999999999，这样哪怕是找到了8右指针也会继续向左移动，直到遇到比8小的数字7才会停下来不再移动
 * 而这是左指针会在循环内不断向左移动直到超过了右指针也就是7往后一位指向了第一个8这时候就可以返回left的位置也即是左边界了
 * 
 * 找右边界也是如此，我们看作找8.0000000001，这样就算找到了8左指针也会向右移动直到遇到比8大的数字，然后右指针会不断向左移动
 * 直到左指针超过自己这时右指针也指向了最后一个8的位置，返回右指针就是右边界了
 * 
 * 这里我们需要注意越界的问题，
 * 1.target比里面所有元素都要大，那么左指针会移动length处越界，右指针保持在length-1处
 * 2.target比里面所有元素都要小，那么左指针会保持在0处，右指针会到-1处越界
 * 3.target是数组两个元素之间的值，但是在数组中，那么左指针会在第一个比他大的元素那里，右指针会在第一个比他小的元素那里
 */

var serchLeft = function(nums, target) {
  let left = 0 ;
  let right = nums.length - 1
  while(left <= right){
      let mid = left + parseInt((right - left) / 2)
      if(nums[mid] === target) {
          right = mid - 1
      }else if(nums[mid] < target){
          left = mid + 1
      }else if(nums[mid] > target){
          right = mid - 1
      }
  }
  if(left >=nums.length || nums[left] != target) {
      return -1
  }
  return left
}

var serchRight = function(nums,  target){
  let left = 0 ;
  let right = nums.length - 1
  while(left <= right){
      let mid = left + parseInt((right - left) / 2)
      if(nums[mid] === target) {
          left = mid + 1
      }else if(nums[mid] < target){
          left = mid + 1
      }else if(nums[mid] > target){
          right = mid - 1
      }
  }
  if(right < 0 || nums[right] != target) {
      return -1
  }
  return right

}

var searchRange = function(nums, target) {
    return [serchLeft(nums, target), serchRight(nums, target)]
};
