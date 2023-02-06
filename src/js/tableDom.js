import { tableDom } from "@/data/db.json"
// console.log(tableDom);

export const tableInfoDom = document.createElement('div')
tableInfoDom.id = tableDom.tableInfoDom.id


export const table = document.createElement('table');
table.id = tableDom.table.id

export const table_info = document.createElement('th');
table_info.id = tableDom.table_info.id
table_info.innerHTML = "";

export const header = document.createElement('tr');
header.id = tableDom.header.id

export const nameInfo = document.createElement('th');
nameInfo.id = tableDom.nameInfo.id
nameInfo.innerHTML = "name:"

export const ageInfo = document.createElement('th');
ageInfo.id = tableDom.ageInfo.id
ageInfo.innerHTML = "Age:"

export const incomeInfo = document.createElement('th');
incomeInfo.id = tableDom.incomeInfo.id
incomeInfo.innerHTML = "Income:";

export const nameCell = document.createElement('th')
nameCell.id = tableDom.nameCell.id

export const ageCell = document.createElement('th')
ageCell.id = tableDom.ageCell.id

export const incomeCell = document.createElement('th')
incomeCell.id = tableDom.incomeCell.id

header.appendChild(nameInfo);
header.appendChild(ageInfo);
header.appendChild(incomeInfo);

tableInfoDom.appendChild(table_info);
tableInfoDom.appendChild(header);
tableInfoDom.appendChild(table);

table.appendChild(header);



