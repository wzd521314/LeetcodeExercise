/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/**
 * 总结下套路就是每次拿到要加入或者移除的字符时，先加入window窗口内，在和needArray进行比较来决定valid的更新
 */
var checkInclusion = function(s1, s2) {
  let needArray = {}
  let window = {}
  for (let i of s1) {
      needArray[i] ? needArray[i] = needArray[i] + 1 : needArray[i] = 1
  }

  let right = 0;
  let left = 0
  let valid = 0
  while(right < s2.length) {
      const addStr = s2[right]
      right++
      window[addStr] ? window[addStr] = window[addStr] + 1 : window[addStr] = 1
      if(needArray[addStr] && window[addStr] <= needArray[addStr] ) {
          valid ++
      } 
      while(right - left === s1.length) {
          if(valid === s1.length) return true
          const removeStr = s2[left]
          left ++
          window[removeStr] = window[removeStr] - 1
          if(needArray[removeStr] && window[removeStr] < needArray[removeStr] ) {
              valid --
          }
      }
  }
  return false
};