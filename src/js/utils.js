export function isNumber(element) {
    return element === +element
}

export function isString(element) {
    return typeof (element) === 'string'
}

const list = [324, 12, 434, 54, 1213]

const list2 = [324, "sdffgf", 324, [12, 434], "1213", [[[54]], "1213"], "1213"]

export function mySort(sortList) {

    const flagList = sortList.flat(Infinity)
    console.log(flagList);

    //此方法不是深拷贝,仍然是浅拷贝
    const filterList = flagList.filter(element => isNumber(+element))
    console.log(filterList);

    const setList = [...new Set(filterList)]
    console.log(setList);

    const mapList = setList.map(element => +element)
    console.log(mapList);

    mapList.sort((a, b) => a - b)
    console.log(mapList);

    mapList.sort((a, b) => b - a)
    console.log(mapList);

}
// mySort(list2)
