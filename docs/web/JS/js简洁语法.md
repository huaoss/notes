# js常用简洁封装

## 数组遍历方法效率对比

> for-len > for > for-of > forEach > map > for-in

javascript原生遍历方法的建议用法：

- 用for循环遍历数组
- 用for...in遍历对象
- 用for...of遍历类数组对象（ES6）,使用Object.keys
- 用Object.keys()获取对象属性名的集合

为何for… in会慢？
因为for … in语法是第一个能够迭代对象键的JavaScript语句，循环对象键（{}）与在数组（[]）上进行循环不同，引擎会执行一些额外的工作来跟踪已经迭代的属性。因此不建议使用for...in来遍历数组

## 根据日期计算星座

`array.find(function(currentValue, index, arr),thisValue)` 方法返回通过测试（函数内判断）的数组的第一个元素的值

    const arr = [
        { name: '白羊座', date: '3.21-4.19' },
        { name: '金牛座', date: '4.20-5.20' },
        { name: '双子座', date: '5.21-6.21' },
        { name: '巨蟹座', date: '6.22-7.22' },
        { name: '狮子座', date: '7.23-8.22' },
        { name: '处女座', date: '8.23-9.22' },
        { name: '天秤座', date: '9.23-10.23' },
        { name: '天蝎座', date: '10.24-11.22' },
        { name: '射手座', date: '11.23-12.21' },
        { name: '摩羯座', date: '12.22-1.19' },
        { name: '水瓶座', date: '1.20-2.18' },
        { name: '双鱼座', date: '2.19-3.20' }
    ];

    // function getSign(m, d) {
    //     const n = (+m) + (+d) / 100;
    //     const obj = arr.find(a => {
    //         const date = a.date.split('-');
    //         const min = +date[0];
    //         const max = +date[1];
    //         return n >= (n >= min && n <= max);
    //     });
    //     return obj.name;
    // };
    // console.log(this.getSign(05, 9))

    function getSign(m, d) {
        const n = (+m) + (+d) / 100;
        let name = '';
        for (let i = 0; i < 12; i++) {
            const date = arr[i].date.split('-');
            const min = +date[0];
            const max = +date[1];
            if (n >= min && n <= max) {
                name = arr[i].name;
                break;
            }
        };
        return name;
    };
    console.log(this.getSign(05, 09))   


## 合并Json对象

    $.mergeJsonObject = function(jsonbject1, jsonbject2) {
    var resultJsonObject = {};
    for (var attr in jsonbject1) {
        resultJsonObject[attr] = jsonbject1[attr];
    }
    for (var attr in jsonbject2) {
        resultJsonObject[attr] = jsonbject2[attr];
    }
    return resultJsonObject;
    };

    var jsonObj1 = {a : 1};
    var jsonObj2 = {b : 2, c : 3, d : 4};

    result = {a : 1, b : 2, c: 3, d : 4}.






----













----
#### for、for in、for of

`string.substr(start,length)` 方法可在字符串中抽取从开始下标开始的指定数目的字符
`string.charAt(index)` 方法可返回指定位置的字符