/**
 * @param {number} n
 * @return {string[][]}
 */
let solveNQueens = function(n) {
  //存储每一个符合要求的棋盘的地方
  let end = []
  //先定义一个棋盘
  let res = []
  let step = 0
  let queen = function(n,res) {
    //如果step等于n，说明已经走到了尽头了，则返回
    if(step == n) {
      //把res这个二维数组转换为一维数组的形式，即把子数组变成字符串的形式，然后把结果塞到end里
      end.push(toOne(res))
      return true
    }
    //定义棋盘的行
    let item = new Array(n).fill('.')
    for(let i = 1; i<=n; i++) {
      //往下一行放入新的棋子
      step ++  
      // 如果皇后可以下子则进入下面的代码中，不行则执行下一个循环
      if(check(res,  step , i )) {
        item.splice(i-1,1, 'Q')
        res.push(item)
        queen(n, res)
        //这条路行不通则步数重置回来走下一条路径,并将棋盘重置
        item.splice(i-1,1,'.')
        res.pop()
      }
      step --
      //撤回放入的棋子
    }

  }
  //二维数组转换函数
  let toOne = function(res) {
    
    let result = []
    for(let i of res) {
      result.push(i.join(''))
    }
    return result
  }
  //此时棋子被放在了raw行column列上
  let check = function(res, raw , column) {
    //开始遍历每一行的棋子，获取它们的位置，只要找到一个冲突的就立马中断函数的执行并返回
    for (let i = 0; i<res.length; i++) {
      //该棋子在i+1行，第res[i].indexOf('Q') + 1列
      //如果在同一列则直接返回false
      if(column === res[i].indexOf('Q') + 1) return false;
      //如果在同一对角线上也直接返回false,对角线则可以用y1-y2/x1-x2计算出它们的斜率，斜率为-1或1则都在同一对角线上
      if(((column - res[i].indexOf('Q') - 1) / (raw - i - 1)) === -1 || ((column - res[i].indexOf('Q') - 1) / (raw - i - 1)) === 1) return false
    }
    return true
    
  }
  queen(n , res)
  return end
};











