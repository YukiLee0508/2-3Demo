import * as userDom from "@/js/userDom"
import * as tableDom from "@/js/tableDom"
import { tableDiv, table } from '@/js/tableDom'

// console.log(tableDom);
import { UserInfoStructure, User, createUser, } from "./user.js"
import sortBy from 'sort-by';
import { head } from "lodash";

//Income的打印
userDom.userAgeInput.addEventListener("input", () => {
  const value = document.querySelector("#value")
  const input = document.querySelector("#user_age")
  value.textContent = input.value

})

export const userInfoList = [
  {
    name: "Amy",
    age: 28,
    income: 20001
  },
  {
    name: "Amy",
    age: 23,
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
    // userInfo.textContent = sort(["name","Income", "income"])
    // console.log(userInfoList);
  }
})

// 点击 name的事件 按 Name 排序
tableDom.nameInfo.addEventListener('click', () => {
  // fillTable(userInfoList, ["name", "age", "income"])
  selectHeader(tableDom.nameInfo)

});

tableDom.ageInfo.addEventListener('click', () => {
  // 给表格数据排序
  // fillTable(userInfoList, ["age", "name", "income"])
  selectHeader(tableDom.ageInfo)
});



tableDom.incomeInfo.addEventListener('click', () => {
  // fillTable(userInfoList, ["income", "name", "Income"])

  selectHeader(tableDom.incomeInfo)
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

function selectHeader(header) {
  // 遍历所有表头, 找到已选中的所有表头
  // console.log(table.rows[0].childNodes)
  let allHeaders = table.rows[0].childNodes
  // 已选中的表头数量, 默认是0
  let selectedCount = 0
  // 是否已选中当前表头
  let selectedThisHeader = false
  allHeaders.forEach((h) => {
    if (h.hasAttribute('is_selected') == true && h.getAttribute('is_selected') == 'true') {
      selectedCount += 1
      if (h.getAttribute('id') == header.getAttribute('id')) {
        selectedThisHeader = true
      }
    }
  })

  let idMap = {
    'name_info': 'name',
    'age_info': 'age',
    'income_info': 'income',
  }

  // 是否执行排序, 默认情况要排序
  if (selectedCount == 0) {
    // 第一种情况, 没选中任何表头
    // 点击, 则+1
    header.innerHTML += '<sup>1</sup>'
    // 添加属性 - 是否选中当前表头
    header.setAttribute('is_selected', true)
    header.setAttribute('select_order', 1)

    // 排序
    fillTable(userInfoList, [idMap[header.id]])
    return
  } else {
    if (selectedThisHeader == true) {
      // 已选中当前表头
      if (selectedCount == 1) {
        // 只选中当前的表头, 点击取消+1
        if (header.lastChild.nodeName == 'SUP') {
          header.lastChild.remove()
          header.setAttribute('is_selected', false)
          header.removeAttribute('select_order')
        }
        return
      } else {
        // 除了选中当前的, 还选了其它一个
        let order = header.getAttribute('select_order')
        if (order == 1) {
          // 当前是首要排序, 没变化
          return
        } else {
          // 当前是次要排序, 点击, 移除
          if (header.lastChild.nodeName == 'SUP') {
            header.lastChild.remove()
            header.setAttribute('is_selected', false)
            header.removeAttribute('select_order')
          }
          allHeaders.forEach((h) => {
            if (h.hasAttribute('is_selected') == true && h.getAttribute('is_selected') == 'true' && h.getAttribute('select_order') == 1) {
              fillTable(userInfoList, [idMap[h.id]])
              return
            }
          })
        }
      }
    } else {
      // 未选中当前的
      if (selectedCount == 1) {
        header.innerHTML += '<sup>2</sup>'
        // 添加属性 - 是否选中当前表头
        header.setAttribute('is_selected', true)
        header.setAttribute('select_order', 2)
        allHeaders.forEach((h) => {
          if (h.hasAttribute('is_selected') == true && h.getAttribute('is_selected') == 'true' && h.getAttribute('select_order') == 1) {
            fillTable(userInfoList, [idMap[h.id], idMap[header.id]])
            return
          }
        })
      } else {
        return
      }
    }
  }
}