import * as userDom from "@/js/userDom"
import * as tableDom from "@/js/tableDom"
import { tableDiv, table } from '@/js/tableDom'

// console.log(tableDom);
import { UserInfoStructure, User, createUser, } from "./user.js"
import sortBy from 'sort-by';

//age的打印
userDom.userAgeInput.addEventListener("input", () => {
  const value = document.querySelector("#value")
  const input = document.querySelector("#user_age")
  value.textContent = input.value

})

export const userInfoList = [
  {
    name: "Amy",
    age: 28,
    income: 20000
  },
  {
    name: "Vincent",
    age: 25,
    income: 10000
  },
  {
    name: "Peter",
    age: 22,
    income: 30000
  }
]
function sort(attr) {
  return userInfoList.sort(sortBy(...attr))
}

// 提交数据
userDom.userInfoSubmit.addEventListener('click', () => {

  const userInfo = new UserInfoStructure()

  userInfo.name = userDom.userNameInput.value
  userInfo.age = +userDom.userAgeInput.value
  userInfo.income = +userDom.userIncomeInput.value
  // 筛查
  const user = createUser(userInfo)

  if (user instanceof User) {
    //正确
    userInfoList.push({ ...userInfo })
    let row = document.createElement('tr')
    let nameCell = document.createElement('td')
    let ageCell = document.createElement('td')
    let incomeCell = document.createElement('td')
    nameCell.innerHTML = user.name
    ageCell.innerHTML = user.age
    incomeCell.innerHTML = user.income
    row.appendChild(nameCell)
    row.appendChild(ageCell)
    row.appendChild(incomeCell)
    table.appendChild(row)
    // userInfo.textContent = sort(["name","age", "income"])
    // console.log(userInfoList);
  }
})

// 按 Name 排序
tableDom.nameInfo.addEventListener('click', () => {
  fillTable(userInfoList, ["name", "age", "income"])

});

tableDom.ageInfo.addEventListener('click', () => {
  fillTable(userInfoList, ["age", "name", "income"])

});

tableDom.incomeInfo.addEventListener('click', () => {
  fillTable(userInfoList, ["income", "name", "age"])

});



export function fillTable(userInfoList, sortRule) {
  // 排序
  userInfoList.textContent = sort((sortRule))

  let rowsToRemove = []
  for (let index = 0; index < table.rows.length; index++) {
    // console.log(index, table.rows.length);
    const element = table.rows[index];
    if (element.id != "header") {
      rowsToRemove.push(element)
    }
  }
  rowsToRemove.forEach((row) => {
    row.remove()
  })

  userInfoList.forEach((user) => {
    let row = document.createElement('tr')
    let nameCell = document.createElement('td')
    let ageCell = document.createElement('td')
    let incomeCell = document.createElement('td')
    nameCell.innerHTML = user.name
    ageCell.innerHTML = user.age
    incomeCell.innerHTML = user.income
    row.appendChild(nameCell)
    row.appendChild(ageCell)
    row.appendChild(incomeCell)
    table.appendChild(row)
  });
}