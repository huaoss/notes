[ECMAScript 6.0](https://www.runoob.com/w3cnote/es6-tutorial.html)
## 1.1
## 1.2 环境搭建
## 2.1 ES6 let 与 const
新增 let 和 const 关键字：
- let 声明的变量只在 let 命令所在的代码块{}内有效，var 是在全局范围内有效
- let 只能声明一次， var 可以声明多次
- 

次；

const 声明一个只读的常量，一旦声明，常量的值就不能改变。



[参考：ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/function
)
```
一、块及作用域：{}
在ES6语法中，{}中的内容作为一个代码块；
通过let声明的变量，只有在其定义的代码块中生效。

二、新的变量赋值模式：
var [a, b, c] = [1, 2, 3];
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
可以通过数组和对象的形式给群组变量赋值

三、模板字符串``：通过``定义的字符串当中，可以通过${}直接加入变量。
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
var text=`输出字符串:${baz}`;
console.log(text);

四、函数中形参的默认值：
function f(x, y, z=0) {
  console.log(z);
}
f(0,1,2);

五、箭头函数：=>
//f为函数名，v是参数，=>后面相当于return的内容
var f = v => v;
//等同于
var f = function(v) {
  return v;
};
参数可以通过()传如多个参数，如：
var f=(a,b,c)=>a+b+c;

六、功能强大的扩展运算符：”...”
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
上面代码通过扩展运算符将伪数组转数组

// ES5的写法
Math.max.apply(null, [14, 3, 77])
// ES6的写法
Math.max(...[14, 3, 77])
上面代码通过扩展运算符取数组最大值
扩展运算符功能不仅于此，详情请参阅ES6官方文档

对象扩展：
var o = {
  method() {
    return "Hello!";
  }
};
对象属性简写

Object.is(null, null);
判断严格相等函数,上面函数结果返回true

Object.assign(obj,obj02)
对象合并，但是使用浅拷贝机制，类似jquery.extend()函数用法

Set类型：类似数组，但不是数组，ES6中的新类型，不会接收重复的值
var arr=[1,2,3,4,4,5,6,78,8,4,4,3];
// 去除数组的重复成员
console.log([...new Set(arr)]);
详细属性及方法请参阅文档

Map类型：真正的键值对类型，可以以任何类型作为建，也可以赋值任何类型为键的值
var m = new Map();
var o = {p: 'Hello World'};
m.set(o, 'content')
m.get(o) // "content"

Promise异步操作对象：
以下代码为异步加载图片函数
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}
loadImageAsync("img/4-15012G52133.jpg").then(function(img){
console.log(img);
},function(err){

});

Class：JS中的类
//定义类
class Point {
/*构造器*/
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

/*prototype中的函数*/
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
类的继承extends：其中super指向父类构造器
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
}
模块处理：export和import
模块输出页面,exText.js
export var a="vvvvv";
模块引入：{a}接收的模块，'./exText'模块所在文件位置
import {a} from './exText';
console.log(a);
```
