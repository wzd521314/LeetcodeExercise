//给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。


//解法1 自上而下，带备忘录
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 
let coinsChange =function (coins, amount)  {
    if(amount === 0) return 0
    let dict = new Array(amount + 1).fill(Infinity)
    return coins(coins, amount, dict)
  }
  function coins (coins, amount, dict) {
    //如果备忘录已经记录了该值就不用计算了，直接返回该值就行了
   if(dict[amount] != Infinity) {
     return dict[amount]
   }
   if(amount === 0) {
     return 0
   }
   for(i of coins) {
     //负数的可以直接排除进入下一个循环了
     if(amount - i < 0 ) continue ;
     //res是当金额是amount -  i时的最优步数，因此amount的最优步数就是 res + 1，因此我们只需要比较coins.length次 res+1就能得到金额为amount的最优步数
     //这里res只有在刚好凑齐的情况下 也就是amount减到了0或者amount-i在备忘录里有值了就是返回一个值,注意当返回了-1时，说明是无解的，也就不必更新dict[amount
     let res = coins(coins, amount - i, dict)
     //这里我们用备忘录对应的amount元素来存储最小值
     if(res != -1) {
       dict[amount] = Math.min(dict[amount], res + 1 )
     }
   }
   //for循环后也就能确定当前金额的最佳步数是多少了,如果dict[amount]的值还是Infinity，说明没有一个amount - i 是能凑出来的，所以该amount也凑不出来，就给它赋值 -1
   return dict[amount] = Number.isFinite(dict[amount]) ? dict[amount] : -1;
  }

//解法2 自下而上,要求钱数为i时的最小步数，其实就是求min{i - j1  , i - j2 , i -j3}的最小步数再加上1，并且可以根据这个思想一直往下推，而我们从上往上求，则保证了i-j的结果是一定提前算好了了的，所以我们只需要比较两个数的大小就好。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0
    for(let i = 1; i <= amount; i++) {
        for(j of coins) {
            if(i - j < 0) {
                continue
            }
            dp[i] = Math.min(1 + dp[i - j], dp[i])
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount]
};