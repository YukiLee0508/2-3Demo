import { userDom } from "@/data/db.json"
// console.log(userDom);


//外围框

export const userInfoDom = document.createElement('div')

export const userNameLabel = document.createElement('label')
export const userNameInput = document.createElement('input')

export const userAgeLabel = document.createElement('label')
export const userAgeInput = document.createElement('input')
export const userAge = document.createElement('p')

export const userIncomeLabel = document.createElement('label')
export const userIncomeInput = document.createElement('input')

export const userInfoSubmit = document.createElement('button')


// 单例模式  在此处是不需要的
// let flag = false
// function init() {
//     if (flag) return
//     flag = true

    //userInfoDom 加上 id
    userInfoDom.id = userDom.userInfoDom.id

    //userNameInput加上 id
    userNameInput.id = userDom.userNameInput.id
    //userNameInput添加类型
    userNameInput.type='text'
    //for
    userNameLabel.htmlFor = userNameInput.id
    // userNameLabel.setAttribute('for', userNameInput.id)
    //文本内容
    userNameLabel.textContent =userDom.userNameLabel.textContent
    userInfoDom.appendChild(userNameLabel)
    userInfoDom.appendChild(userNameInput)

    //age
    userAgeInput.id = userDom.userAgeInput.id
    userAge.id = "value"
    userAgeInput.type='range'
    userAgeLabel.htmlFor = userAgeInput.id
    userAgeLabel.textContent = userDom.userAgeLabel.textContent
    userAge.textContent = "50"
    userInfoDom.appendChild(userAgeLabel)
    userInfoDom.appendChild(userAgeInput)
    userInfoDom.appendChild(userAge)

    //income
    userIncomeInput.id = userDom.userIncomeInput.id
    userIncomeInput.type='text'
    userIncomeLabel.htmlFor = userIncomeInput.id
    userIncomeLabel.textContent = userDom.userIncomeLabel.textContent
    userInfoDom.appendChild(userIncomeLabel)
    userInfoDom.appendChild(userIncomeInput)

    //submit
    userInfoSubmit.id = userDom.userInfoSubmit.id
    userInfoSubmit.textContent = "Submit"
    userInfoDom.appendChild(userInfoSubmit)

    // console.log('1');

// }
// init()




