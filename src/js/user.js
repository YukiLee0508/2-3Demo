// import { isNumber, isString, last } from "lodash";

import { isString, isNumber } from '@/js/utils'

export function UserInfoStructure() {
  this.name = undefined
  this.age = undefined
  this.income = undefined
}

export class User {
  #name = undefined
  #age = undefined
  #income = undefined
  constructor(userInfo) {
    this.#name = userInfo.name
    this.#age = userInfo.age
    this.#income = userInfo.income
  }

  get name() {
    return this.#name
  }
  get age() {
    return this.#age
  }
  get income() {
    return this.#income
  }
}


//筛查 并创造
export function createUser(userInfo) {
  let errorFlag = false
  let errorInfo = ''

  if (!isString(userInfo.name)) {
    errorFlag = true
    errorInfo += alert(`userInfo ${' name '} error`)
  }

  if (!isNumber(userInfo.income)) {
    errorFlag = true
    errorInfo += alert(`userInfo ${' income '} error`)
  }
  if (errorFlag) {
    //返回 错误提示
    return { errorInfo }
  }
   else {
    //返回 用户信息
    return new User(userInfo)
  }
}