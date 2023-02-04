import { userDom } from "@/data/db.json"
// console.log(userDom);


export const userInfoDom = document.createElement('div')

export const userNameLabel = document.createElement('label')
export const userAgeLabel = document.createElement('label')
export const userIncomeLabel = document.createElement('label')

export const userNameInput = document.createElement('input')
export const userAgeInput = document.createElement('input')
export const userIncomeInput = document.createElement('input')

export const userInfoSubmit = document.createElement('button')


// 单例模式  在此处是不需要的
let flag = false
function init() {
    if (flag) return
    flag = true

    userInfoDom.id = userDom.userInfoDom.id
    userNameInput.id = userDom.userNameInput.id
    userNameInput.type='text'
    userAgeInput.id = userDom.userAgeInput.id
    userAgeInput.type='range'
    userIncomeInput.id = userDom.userIncomeInput.id
    userIncomeInput.type='text'

    userInfoSubmit.id  =userDom.userInfoSubmit.id

    userNameLabel.htmlFor = userNameInput.id
    // userNameLabel.setAttribute('for', userNameInput.id)
    userAgeLabel.htmlFor = userAgeInput.id
    userIncomeLabel.htmlFor = userIncomeInput.id


    userNameLabel.textContent = 'Name:'
    userAgeLabel.textContent = 'Age:'
    userIncomeLabel.textContent = 'Income:'

    userInfoSubmit.textContent = 'Submit'


    userInfoDom.appendChild(userNameLabel)
    userInfoDom.appendChild(userNameInput)


    userInfoDom.appendChild(userAgeLabel)
    userInfoDom.appendChild(userAgeInput)


    userInfoDom.appendChild(userIncomeLabel)
    userInfoDom.appendChild(userIncomeInput)

    userInfoDom.appendChild(userInfoSubmit)

    console.log('1');
    

}
init()
