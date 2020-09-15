/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) { 
  //父字符串数组
  //需要匹配的字符串对象
  let needObject = {}
  for (item of t) {
    if(!needObject[item]) {
      needObject[item] = 1
    }else {
      needObject[item] = needObject[item] + 1
    }
  }
  //窗口字符串数组
  let window = {}
  let left = 0 
  let right = 0
  //乙匹配的字符个数
  let valid = 0
  let minLen = Infinity
  let start = -1
  while(right < s.length) { 
    //需要添加到窗口中的字符
    let addString = s[right]
    right++
    //判断窗口中是否有该字符串，有则+1，无则=1
    window[addString] ? window[addString] ++ : window[addString] = 1
    //如果该字符是需要的字符之一，并且window[addString]不大于needObject[addString]（意味着还有坑位），则说明又找到一个符合标准的字符
    if(needObject[addString] && window[addString]<=needObject[addString]) valid++;
    //当符合的字符个数满足需要的字符串长度说明都找到了
    while(valid === t.length) {
      //要从窗口移去的字符
      let removeString = s[left]
      left++
      //这里移去的字符窗口中是肯定存在的，所以不用判断是否有该字符串，直接-1就好了
      window[removeString]-- 
      //如果移去字符是需要的字符之一，并且移去后窗口中该字符的个数小于需要数组该字符串的个数，说明确实移除了一个需要的字符串,将valid--,也会跳出这个循环
      //同时我们需要记录一下该窗口的长度和该窗口的起始下标
      if(needObject[removeString] && window[removeString] < needObject[removeString]) {
        valid--
        //更新最小窗口长度以及最小窗口的起始下标
        if(right - left < minLen - 1) {
          minLen = right - left + 1
          start =  left - 1
        }
      } ;

    }
  }
  return start === -1 ? "" : s.substr(start, minLen)
}

console.log(minWindow("ADOBECODEBANC", "ABC"))