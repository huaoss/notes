// 原生JS仿JQ方法：hide() 、show() 
Object.prototype.hide = function () {
    this.style.display = "none";
    return this;
};
Object.prototype.show = function () {
    this.style.display = "block";
    return this;
};


// 数组排序：冒泡、快排
var arr = [3, 6, 1, 2, 5];
var temp;
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [];
    var right = [];
    var middle = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < middle) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat([middle], quicksort(right));
}


// 数组去重
Array.prototype.unique = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}
var arr = [112, 112, 34, '你好', 112, 112, 34, '你好', 'str', 'str1'];
alert(arr.unique());


// 递归实现深拷贝
function deepCopy(source) {
    var result = {};
    for (var i in source) {
        if (typeof source[i] === "object") {
            result[i] = deepCopy(source[i]);
        } else {
            result[i] = source[i];
        }
    }
    return result;
};


// 日期倒计时
let starttime = new Date("2021/01/01");
setInterval(() => {
    let nowtime = new Date();
    let time = starttime - nowtime;
    let day = parseInt(time / 1000 / 60 / 60 / 24);
    let hour = parseInt(time / 1000 / 60 / 60 % 24);
    let minute = parseInt(time / 1000 / 60 % 60);
    let seconds = parseInt(time / 1000 % 60);
    console.log(`${day}:${hour}:${minute}:${seconds} `)
}, 1000);
// 60秒倒计时
var countdown = 60;
function settime(obj) {
    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.value = "免费获取验证码";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.value = "重新发送(" + countdown + ")";
        countdown--;
    }
    setTimeout(function () {
        settime(obj)
    }, 1000)
}


// 获取时间戳
var timestamp = Date.parse(new Date()); // 把毫秒改成000显示:1280977330000
var timestamp = (new Date()).valueOf(); // 毫秒时间戳：1280977330748
var timestamp = new Date().getTime(); // 毫秒时间戳：1280977330748