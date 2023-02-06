// import '../css/style.scss' 
// import './utils'

import '@/css/style.scss'
// import '@/js/utils'

import { isString, isNumber } from '@/js/utils'

import { userInfoDom } from '@/js/userDom'
import {  tableDiv,table} from '@/js/tableDom'
import { userInfoList, fillTable } from '@/js/sort'


// import { UserInfoStructure, User } from './user'

import '@/js/sort'

const app = document.getElementById('app')
app.appendChild(userInfoDom)

// const tableDiv = document.getElementById('div')

app.appendChild(tableDiv)

// const table = document.getElementById('table')
// app.appendChild(table)

// console.log(userInfoList);

// userInfoList.forEach((user) => {
//     let row = document.createElement('tr')
//     let nameCell = document.createElement('td')
//     let ageCell = document.createElement('td')
//     let incomeCell = document.createElement('td')
//     nameCell.innerHTML = user.name
//     ageCell.innerHTML = user.age
//     incomeCell.innerHTML = user.income
//     row.appendChild(nameCell)
//     row.appendChild(ageCell)
//     row.appendChild(incomeCell)
//     table.appendChild(row)
// });
fillTable(userInfoList, ["name", "age", "income"])
