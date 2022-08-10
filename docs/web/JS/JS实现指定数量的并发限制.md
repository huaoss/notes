```
// 用 for + slice 根据指定的并发数量来分割数组
const group = (list = [], max = 0) => {
    if (!list.length) {
        return list
    }
    let results = []
    for (let i = 0, len = list.length; i < len; i += max) {
        results.push(list.slice(i, i + max))
    }
    return results
}
// 用 async + await 实现的请求集合封装
// 通过 for...of 去遍历每一个异步函数，然后用 async + await 确保函数的执行顺序，再用 try...catch 来保证即使 reject 报错也不会导致无法继续执行任务。
const requestHandler = async (
    groupedUrl = [],
    callback = () => {}
) => {
    if (!groupedUrl.length) {
        callback()
        return groupedUrl
    }
    const newGroupedUrl = groupedUrl.map(fn => fn())
    const resultsMapper = (results) => results.map(callback)
    const data = await Promise.allSettled(newGroupedUrl).then(resultsMapper)
    return data;
}

// 主函数
const sendRequest = async (
    urls = [],
    max = 0,
    callback = () => {}
) => {
    if (!urls.length) {
        return urls
    }
    const groupedUrls = group(urls, max)
    const results = []
    console.log('start !')
    for (let groupedUrl of groupedUrls) {
        try {
            const result = await requestHandler(groupedUrl, callback)
            results.push(result)
            console.log('go')
        } catch {}
    }
    console.log('done !')
    return results
}

// 总结：利用了 for + async + await 来限制并发。等每次并发任务结果出来之后再执行下一次的任务。

// 执行以下例子：
const p1 = () => new Promise((resolve, reject) => setTimeout(reject, 1000, 'p1'))
const p2 = () => Promise.resolve(2)
const p3 = () => new Promise((resolve, reject) => setTimeout(resolve, 2000, 'p3'))
const p4 = () => Promise.resolve(4)
const p5 = () => new Promise((resolve, reject) => setTimeout(reject, 2000, 'p5'))
const p6 = () => Promise.resolve(6)
const p7 = () => new Promise((resolve, reject) => setTimeout(resolve, 1000, 'p7'))
const p8 = () => Promise.resolve(8)
const p9 = () => new Promise((resolve, reject) => setTimeout(reject, 1000, 'p9'))
const p10 = () => Promise.resolve(10)
const p11 = () => new Promise((resolve, reject) => setTimeout(resolve, 2000, 'p10'))
const p12 = () => Promise.resolve(12)
const p13 = () => new Promise((resolve, reject) => setTimeout(reject, 1000, 'p11'))
const p14 = () => Promise.resolve(14)

const ps = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14]
sendRequest(ps, 3, ({
    reason,
    value
}) => {
    console.log(reason || value)
});
// start!
//  p1
//  2
//  p3
//  go
//  4
//  p5
//  6
//  go
//  p7
//  8
//  p9
//  go
//  10
//  p10
//  12
//  go
//  p11
//  14
//  go
// done!
```