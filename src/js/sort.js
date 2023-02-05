import * as userDom from "@/js/userDom"
import * as tableDom from "@/js/tableDom"
// console.log(tableDom);
import { UserInfoStructure, User, createUser, } from "./user.js"
import sortBy from 'sort-by';

//age的打印
userDom.userAgeInput.addEventListener("input", () => {
  const value = document.querySelector("#value")
  const input = document.querySelector("#user_age")
  value.textContent = input.value

})

const userInfoList = [
  // {
  //   name: "Amy",
  //   age: 28,
  //   income: 20000
  // },
  // {
  //   name: "Vincent",
  //   age: 25,
  //   income: 10000
  // },
  // {
  //   name: "Peter",
  //   age: 22,
  //   income: 30000
  // }
]

//submit 点击事件
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
    userInfo.textContent = sort(["age", "name", "income"])
    // console.log(userInfoList);
  }
})

function sort(attr) {
  return userInfoList.sort(sortBy(...attr))
}

tableDom.nameInfo.addEventListener('click', () => {
  userInfoList.textContent = sort((["name", "age", "income"]))
  console.log(userInfoList);

  userInfoList.forEach((user) => {
    // 创建新一行 html 结构
    let row = document.createElement('tr');

    let nameCell = document.createElement('th')
    nameCell.id = tableDom.nameCell.id

    nameCell.innerHTML = user.name+  '<br>' + '| '+'<br>' +user.age + '<br>' + '| '+'<br>' + user.income
    row.appendChild(nameCell)

    header.appendChild(row)
  });

});

tableDom.ageInfo.addEventListener('click', () => {
  userInfoList.textContent = sort((["age", "name", "income"]))

  userInfoList.forEach((user) => {
    // 创建新一行 html 结构
    let row = document.createElement('tr');

    let ageCell = document.createElement('th')
    ageCell.id = tableDom.ageCell.id

    ageCell.innerHTML = user.age +  '<br>' + '|'+'<br>' + user.name +  '<br>' + '|'+'<br>' +user.income

    row.appendChild(ageCell)

    header.appendChild(row)
  });
});

tableDom.incomeInfo.addEventListener('click', () => {
  userInfoList.textContent = sort((["income", "name", "age"]))

  userInfoList.forEach((user) => {

    let row = document.createElement('tr');

    let incomeCell = document.createElement('th')
    incomeCell.id = tableDom.incomeCell.id

    incomeCell.innerHTML = user.income+ '<br>' + '| '+'<br>' +user.name+  '<br>' + '| '+'<br>' +user.age

    row.appendChild(incomeCell)

    header.appendChild(row)
  });
});