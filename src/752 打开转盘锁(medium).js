/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {

  //这里有个小优化就是可以把死亡号码提前放入已访问名单中，这样就省去了一个对象来保存死亡号码
  let visited = new Set(deadends);
  if(visited.has(target) || visited.has("0000")) return -1;
  let queue = new Set(["0000"])
  let step = 0
  while(queue.size) {
    step++
    //每次循环都初始化一个新的set集合来保存新一轮扩散的所有节点
    let set1 = new Set()

    //遍历queue集合，将该步扩散的所有节点都拿出来，再把它们下一步扩散的节点都保存到set1中
    for(let node of queue) {
      visited.add(node)
      for(let i = 0; i<4; i++) {
        let down = getDownString(node, i);
        if( down === target) return step;
        if(!visited.has(down)) {
            set1.add(down)
        }
        let up = getUpString(node, i);
        if(up === target) return step;
        if(!visited.has(up)) {
            set1.add(up)
        }
      }
    }
    //当前步的所有节点都遍历完成，并且下一步的扩散节点也已经保存在了set1中，则将set1重新赋值给queue循环下一次的遍历
    queue = new Set(set1)
  }
  function getUpString (str, i) {
    let index = [...str]
    if(index[i] == 9) {
      index[i] =  '0'
    }else {
      index[i] = (parseInt(index[i]) + 1).toString()
    }
    return index.join('')
  }
  function getDownString (str, i) {
    let index = [...str]
    if(index[i] == 0) {
      index[i] =  '9'
    }else {
      index[i] = (parseInt(index[i]) - 1).toString()
    }
    return index.join('')
  }
  return -1
};