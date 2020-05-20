//击鼓传花实现
let personList = ['张三', '李四', '王五', '赵六', '金七']

function achieve(peoples, number) {
  let list = peoples.concat();

  while (list.length > 1) {
    for (let index = 0; index < number - 1; index++) {
      let firstElment = list.shift()
      list.push(firstElment)
    }
    list.shift()
  }
  console.log(personList)
  alert(`胜出者是${list[0]} 排在第${personList.indexOf(list[0]) + 1}`)
}

achieve(personList, 1)