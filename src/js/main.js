// import '../css/style.scss' 
// import './utils'

import '@/css/style.scss'
// import '@/js/utils'

import { isString, isNumber } from '@/js/utils'

import { userInfoDom  } from '@/js/userDom'
import {tableInfoDom} from '@/js/tableDom'

// import { UserInfoStructure, User } from './user'

import '@/js/sort'

const app = document.getElementById('app')
app.appendChild(userInfoDom)

const user = document.getElementById('user')
user.appendChild(tableInfoDom)
