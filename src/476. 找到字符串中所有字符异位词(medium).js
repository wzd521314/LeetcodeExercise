/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let window = {}
  let needArray = {}
  for (let i of p) {
      needArray[i] ? needArray[i] = needArray[i] + 1 : needArray[i] = 1
  }
  let right = 0 
  let left = 0
  let valid = 0
  let start = []

  while (right < s.length) {
      const addStr = s[right]
      right++
      window[addStr] ? window[addStr] = window[addStr] + 1 : window[addStr] = 1
      if(needArray[addStr] && window[addStr] <= needArray[addStr]) valid++ ;
      while (right - left === p.length) {
          if(valid === p.length) start.push(left) ;
          let removeStr = s[left]
          left ++
          window[removeStr] = window[removeStr] - 1
          if(needArray[removeStr] && window[removeStr] < needArray[removeStr]) valid-- ;

      }
  }

  return start
};