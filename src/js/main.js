// import '../css/style.scss' 
// import './utils'

import '@/css/style.scss'
// import '@/js/utils'

import { isString, isNumber } from '@/js/utils'

import { userInfoDom } from '@/js/userDom'

import { UserInfoStructure, User } from './user'

// import '@/js/sort'

const app = document.getElementById('app')

app.appendChild(userInfoDom)

const user = new UserInfoStructure()

const user2 = new User()

console.log(user);
console.log(user2);
