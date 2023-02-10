// import '../css/style.scss' 
// import './utils'

import '@/css/style.scss'
// import '@/js/utils'

import { isString, isNumber } from '@/js/utils'

import { userInfoDom } from '@/js/userDom'
import {  tableDiv,table, header} from '@/js/tableDom'
import { userInfoList, fillTable } from '@/js/sort'

// import { UserInfoStructure, User } from './user'

import '@/js/sort'


const app = document.getElementById('app')

app.appendChild(userInfoDom)

app.appendChild(tableDiv)

// header.appendChild(colgroup)



fillTable(userInfoList, [])
