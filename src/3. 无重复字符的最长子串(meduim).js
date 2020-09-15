/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s.length === 1) return 1
  let right = 0
  let left = 0
  let maxLen = 0
  let window = {}
  while (right < s.length) {
      const addStr = s[right]
      right++
      window[addStr] ? window[addStr] = window[addStr] + 1 : window[addStr] = 1
      //只要窗口内的字符串出现重复的时候就开始收缩窗口知道该重复字符不重复为止
      while(window[addStr] > 1) {
          const reomveStr = s[left]
          left ++
          window[reomveStr] = window[reomveStr] - 1
          
      }
      //  这里需要注意的是最长子字符串更新的时机，该位置可以保证此时的窗口内的子字符串一直都是无重复，并且涵盖了所有的无重复子字符串
      maxLen = Math.max(right - left , maxLen)
  }
  return maxLen
};