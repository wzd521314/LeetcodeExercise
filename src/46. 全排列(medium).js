/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var answerItem = []
  var res = []
  var test = function(nums, answerItem) {
    //如果路径表answerItem满了则看作排列成功
    if(nums.length === answerItem.length) {
        res.push([].concat(answerItem))
        return true
    }

    for(let i of nums) {
      //这里需要注意的是已经走过的路就不要再进入函数内了
        if(answerItem.indexOf(i) === -1) {
          answerItem.push(i)
          test(nums, answerItem)
          answerItem.pop(i)
        }
    }
}
  test(nums, answerItem)
  return res
};
 

