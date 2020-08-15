/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //BFS(广度优先搜索)
var minDepth = function(root) {
  if(!root) return 0;
  let step = 1
  let queue = [root]
  while(queue.length) {
      let index = queue.length
      for(let i = 0; i<index; i++){
          let node = queue.shift()
          if(!(node.left) && !(node.right)) {
              return step
          }
          //这里要标注下其实题目还是很简单了，就是这里犯了个小错误，每次我都是用unshift把新的元素放在了首位，这样导致下一个循环shift取出的元素其实时下一层新放入的元素，正确做法还是应该用push将新的元素放在最后
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
      step++
  }
};

