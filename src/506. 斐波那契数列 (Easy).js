//解法1，较为粗糙，重复计算了很多值，可以采用一张表来记录已经存储过的值，重复记录过的则直接返回那个值
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if(N===0 || N ===1) {
      return N;
  }

  return fib(N - 1) + fib(N - 2)
};


//解法2 用for循环来
var fib = function(N) {
  if(N === 1 || N === 0){
      return N
  }
  let prevent = 0
  let current = 1
  for(let i = 2; i<=N; i++) {
      var node = current + precent
      prevent = current
      current = node
  }
  
  return current
};