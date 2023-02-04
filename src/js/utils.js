
//是不是一个数字
export function isNumber(element) {
    return element === +element
    
}
//是不是字符串
export function isString(element) {
    return typeof (element) == 'string'
}
// console.log(1);

const list = [324, 12, 434, 54, 1213]

const list2 = [324, "sdffgf", 324, [12, 434], "1213", [[[54]], "1213"], "1213"]

//扁平化处理
export function mySort(sortList) {

    //拆开无限层次
    const flagList = sortList.flat(Infinity)
    // console.log(flagList);

    //判断是否是数字  加上➕不能编程数字的 (筛选)
    //此方法不是深拷贝,仍然是浅拷贝
    const filterList = flagList.filter(element => isNumber(+element))
    // console.log(filterList);

    //去掉重复的选项 (产生一个新的)
    const setList = [...new Set(filterList)]
    // console.log(setList);

    //重新创建一个新数组  (变形)
    const mapList = setList.map(element => +element) 
    console.log(mapList);

    //从小到大
    mapList.sort((a, b) => a - b)
    console.log(mapList);
    //从大到小
    mapList.sort((a, b) => b - a)
    // console.log(mapList);

}
// mySort(list2)
