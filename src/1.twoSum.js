/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * O(N)
 */
var twoSum = function(nums, target) {
  let list = new Map()

  for(let i = 0; i<nums.length; i++) {
    if(list.has(target - nums[i]) && list.get(target - nums[i]) !== i) {
      return [i, list.get(target - nums[i])]
    }
    list.set(nums[i], i)
  }

  return []
};

/**
 * 这里思路为采用map数据结构，将数组元素的值作为key,下标作为value,通过一次遍历判断target和当前元素的差值是否是map里面的键名之一
 * 注意的点有：
 *  1.要判断是否是相同的两个值相加所得
 *  2.当数组有两个相同的值时，且恰好两个相同的值加起来是target，这里就不能在if之前就往map结构里set数据，因为相同的键名会替代掉之前的值，
 *    这样会让判断是否是同一个值相加的值产生错误
 */