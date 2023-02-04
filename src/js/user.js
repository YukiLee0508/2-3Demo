import { isNumber, isString, last } from "lodash";
// // 构造函数
// export function UserInfoStructure() {

//     this.name = 'Yuki',
//         this.age = 18,
//         this.income = 10000,
//         this.eat = function () {
//             console.log('eat');
//         }
// }

// export class User {
//     //构造函数
//     #name = undefined
//     #age = undefined
//     #income = undefined

//     constructor(name, age, income) {
//         this.#name = name
//         this.#age = age
//         this.#income = income
//     }
// }

// get name(){
//     return this.#name
// }
// set name(name){
//      this.#name = name
// }

// const user = {

// }
// user.age = 10
// user.name = "yuki"


// // 构造函数
// const user2 = new UserInfoStructure()
// user.age = 10
// user.name = "yuki"

// // class
// const user3 = new User('yuki',18,0)

// console.log("user3:",user3);

// // user3.name = "Dannie"
// console.log("user3:",user3);

// console.log(user3.name);



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
  
  export function createUser(userInfo) {
    let errorFlag = false
    let errorInfo = ''
    if (!isString(userInfo.name)) {
      errorFlag = true
      errorInfo += 'name is not string '
    }
  
    if (!isNumber(userInfo.age)) {
      errorFlag = true
      errorInfo += 'age is not number '
    }
  
    if (!isNumber(userInfo.income)) {
      errorFlag = true
      errorInfo += 'income is not number'
    }
  
    if (errorFlag) {
      return { errorInfo }
    } else {
      return new User(userInfo)
    }
  }