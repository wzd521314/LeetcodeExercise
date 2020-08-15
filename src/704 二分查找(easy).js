/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0 ;
  let right = nums.length - 1
  while(left <= right){
    //....没什么好说的就是这里需要注意的是奇数除以2会出现小数问题，向下取整就好了
      let mid = left + parseInt((right - left) / 2)
      if(nums[mid] === target) {
          return mid
      }else if(nums[mid] < target){
          left = mid + 1
      }else if(nums[mid] > target){
          right = mid - 1
      }
  }

  return -1
};

console.log(search([1,3,4,7,8], 2))