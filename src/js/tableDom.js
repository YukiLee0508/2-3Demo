import { tableDom } from "@/data/db.json"
// console.log(tableDom);

export const tableDiv = document.createElement('div');
tableDiv.id = tableDom.tableDiv.id

export const table = document.createElement('table');
table.id = tableDom.table.id

export const header = document.createElement('tr');
header.id = tableDom.header.id

export const nameInfo = document.createElement('th');
nameInfo.id = tableDom.nameInfo.id
nameInfo.innerHTML = "Name"

export const ageInfo = document.createElement('th');
ageInfo.id = tableDom.ageInfo.id
ageInfo.innerHTML = "Age"

export const incomeInfo = document.createElement('th');
incomeInfo.id = tableDom.incomeInfo.id
incomeInfo.innerHTML = "Income";

export const nameCell = document.createElement('th')
nameCell.id = tableDom.nameCell.id

export const ageCell = document.createElement('th')
ageCell.id = tableDom.ageCell.id

export const incomeCell = document.createElement('th')
incomeCell.id = tableDom.incomeCell.id

header.appendChild(nameInfo);
header.appendChild(ageInfo);
header.appendChild(incomeInfo);

table.appendChild(header);
tableDiv.appendChild(table);

function createTableDiv(params) {

}


