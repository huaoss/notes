## 1. js数据类型
- 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
- 引用数据类型：对象(Object)、数组(Array)、函数(Function)。

1. 值类型和引用数据类型的区别？
```
基本数据类型 ----- 直接在栈内存中保存数据值，按值访问。
当copy数据时，copy到的是数据值本身。基本数据类型的变量与变量之间是独立存在，修改其中一个变量，不会影响其他变量。
例：
var str = 'aaa';
var str1 = str;
str1 = 'bbb';
console.log(str); // aaa
console.log(str1); // bbb

引用数据类型 ----- 变量保存的是内存地址(对象的引用)，访问时访问的也是内存地址（相当于指针，在各自的内存地址里存储了数据）
当copy数据时，copy到的是保存数据的内存地址而不是数据值本身。当两个变量保存的是同一个引用数据对象，则其中一个变量的属性发生改变，另一个变量也会随之变化。
例：
var arr = ['1','2'];
var arr1 = arr;
arr1[1] = '3';
console.log(arr); // ["1", "3"]
console.log(arr1);// ["1", "3"]

当比较数据时：基本数据比较的是数据值的大小；而引用型数据比较的是保存数据的内存地址——若两个变量的数据一模一样，但内存地址不同，则会返回false。
例：
// 基础类型
var i = 5;
var j = '5';
console.log( i == j);// true
console.log( i === j);// false
//引用类型
var obj = {a:1,b:2};
var obj1 = {a:1,b:2};
var obj2 = obj1 ;
console.log( obj == obj1);// false
console.log( obj === obj1);// false
console.log( obj1 === obj2);// true
```
2. symbol：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。
3. object和array的区别：object是无序数据集合，array是有序数据集合。

## 2. a++ 与 ++a
a++、a--先参与程序运行再计算；
++a、--a先计算再运行。

## 3. undefined 和 null
- 都属于基础数据类型
- 都是假值，转换为 boolean 值是都是 false
- undefined是尚未分配特定值的变量的默认值；或没有显式返回值的函数，例如console.log(1)；或对象中不存在的属性。JavaScript引擎为我们分配了undefined这个值以实现上述目的
```
let _thisIsUndefined;
const doNothing = () => { };
const someObj = {
    a: "ay",
    b: "bee",
    c: "si"
};

console.log(_thisIsUndefined); //logs undefined
console.log(doNothing()); //logs undefined
console.log(someObj["d"]); //logs undefined
```
- null意味着“变量值为空”。null是已明确定义给变量的值。在示例中，当fs.readFile方法未引发错误时，我们将得到的值为null。
```
fs.readFile('path/to/file', (e, data) => {
    console.log(e); //it logs null when no error occurred
    if (e) {
        console.log(e);
    }
    console.log(data);
});
```
-比较null和undefined时，使用==时为true，使用===时为false。
```
console.log(null == undefined); // logs true
console.log(null === undefined); // logs false
```
## 4. && 运算符
&&运算符会在其操作数中找到第一个为假的表达式，并将其返回；如果未找到任何为假的表达式，则将返回最后一个表达式。它采取短路以防止不必要的工作。
```
console.log(false && 1 && []); //logs false
console.log(" " && true && 5); //logs 5
```
使用&&运算符简写if语句，并提高js性能
```
const router: Router = Router();

// 使用if语句
router.get('/endpoint', (req: Request, res: Response) => {
    let conMobile: PoolConnection;
    try {
        //do some db operations
    } catch (e) {
        if (conMobile) {
            conMobile.release();
        }
    }
});

// 使用&&运算符
router.get('/endpoint', (req: Request, res: Response) => {
    let conMobile: PoolConnection;
    try {
        //do some db operations
    } catch (e) {
        conMobile && conMobile.release()
    }
});

```

## 5. || 运算符
||运算符会在其操作数中找到第一个为真的表达式，然后将其返回。这也采用了短路以防止不必要的工作。在支持ES6默认函数参数之前，它曾用于初始化函数中的默认参数值。
```
console.log(null || 1 || undefined); //logs 1

function logName(name) {
  var n = name || "Mark";
  console.log(n);
}

logName(); //logs "Mark"
```

## 6. 字符串转换为数字的最快方法？
使用 + 或一元加操作符，因为如果已经是数字，则对值不执行任何操作。
```
var num = "25";
num = +num; // 25
```
ps：

布尔值false 和true 将被转换为0 和1

一元减法运算符对十六进制和十进制的处理方式与一元加法运算符相似，只是它还会对该值求负

## 7. 什么是DOM？
DOM即Document Object Model（文档对象模型），是HTML和XML文档的接口（API）。当浏览器第一次读取（解析）我们的HTML文档时，它会创建一个大对象，一个非常大的基于HTML文档的对象，这就是DOM。它是从HTML文档建模的树状结构。DOM用于交互和修改DOM结构或特定的元素或节点。

## 8. 什么是事件传递？
当事件发生在DOM元素上时，该事件并不完全发生在一个元素上。在“冒泡阶段”中，事件冒泡或向上传递至其父代，其祖代，其祖代的父代，直到到达window为止；而在“捕获阶段”中，事件则从window开始向下直到触发该事件的元素或event.target。

事件传递分为三个阶段：
- 捕获阶段 – 事件从window开始，然后下降到每个元素，直到到达目标元素。
- 目标阶段 – 事件已达到目标元素。
- 冒泡阶段 – 事件从目标元素冒泡，然后上升到每个元素，直到到达window。

## 9. 什么是事件冒泡？
当事件发生在DOM元素上时，该事件并不完全发生在一个元素上。在冒泡阶段，事件向上冒泡，或去到它的父代，祖代，祖代的父代，直到到达window为止。
```
// 假设有这样的html标记：
<div class="grandparent">
    <div class="parent">
        <div class="child">1</div>
    </div>
</div>

// 以及js代码：
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  });

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  });

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  });

  addEvent(document, 'click', function (e) {
    console.log('document');
  });

  addEvent('html', 'click', function (e) {
    console.log('html');
  })

  addEvent(window, 'click', function (e) {
    console.log('window');
  })

});
```
addEventListener方法的第三个可选参数useCapture，其默认值如果为false，事件将在冒泡阶段中触发；默认值如果为true，则事件将在捕获阶段中触发。如果单击child元素，它将分别在控制台上打印child，parent，grandparent，html，document和window。这就是事件冒泡。

## 10. 什么是事件捕获？
当事件发生在DOM元素上时，该事件并不完全发生在一个元素上。在捕获阶段，事件从window出发一直向下直到到达触发事件的元素。
```
// 假设有这样的html标记：
<div class="grandparent">
    <div class="parent">
        <div class="child">1</div>
    </div>
</div>

// 以及js代码：
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== 'function') return;
  if (typeof el === 'string') {
    el = document.querySelector(el);
  };
  el.addEventListener(event, callback, isCapture);
}

addEvent(document, 'DOMContentLoaded', () => {
  const child = document.querySelector('.child');
  const parent = document.querySelector('.parent');
  const grandparent = document.querySelector('.grandparent');

  addEvent(child, 'click', function (e) {
    console.log('child');
  }, true);

  addEvent(parent, 'click', function (e) {
    console.log('parent');
  }, true);

  addEvent(grandparent, 'click', function (e) {
    console.log('grandparent');
  }, true);

  addEvent(document, 'click', function (e) {
    console.log('document');
  }, true);

  addEvent('html', 'click', function (e) {
    console.log('html');
  }, true)

  addEvent(window, 'click', function (e) {
    console.log('window');
  }, true)

});
```
addEventListener方法的第三个可选参数useCapture，其默认值如果为false，事件将在冒泡阶段中触发；如果默认值为true，则事件将在捕获阶段中触发。如果我们单击child元素，它将分别在控制台上打印window，document，html，grandparent，parent和child。这就是事件捕获。

## 11. event.preventDefault()和event.stopPropagation()方法之间有什么区别？
- event.preventDefault()方法可阻止元素的默认行为。如果在form元素中使用，它将阻止其提交。如果在anchor元素中使用，它将阻止其导航。如果用于contextmenu，它将阻止其显示或展示。
- 而event.stopPropagation()方法则是阻止事件的传递，或者在冒泡或捕获阶段阻止事件触发。

## 12. 如何知道是否在元素中使用了event.preventDefault()方法？
可以在事件对象中使用event.defaultPrevented属性。它返回boolean，指出是否在特定元素中调用event.preventDefault()。

## 13. 一行代码如何实现深拷贝？
- 递归实现深拷贝函数，缺点：代码复杂
```
function deepClone(obj) {
	var objClone = Array.isArray(obj) ? [] : {};
	if (obj && typeof obj === 'object') {
		for (key in obj) {
			if (obj.hasOwnProperty(key)) {
				//判断obj的子元素是否为object对象，如果是则就递归拷贝
				if (obj[key] && typeof obj[key] === 'object') {
					objClone[key] = deepClone(obj[key])
				} else {
					//如果不为对象就直接拷贝
					objClone[key] = obj[key]
				}
			}
		}
	};
	return objClone;
};
```
- 使用json实现深拷贝，缺点：1.无法拷贝对象中的方法属性；2.无法拷贝 对象中值为undefined的属性
```
function deepClone2(obj) {
	let _obj = JSON.stringify(obj);
	return JSON.parse(_obj);
}
// 写成一行
let obj = JSON.parse(JSON.stringify(ar));
```
- 使用jquery中的extend属性：1.需要引用jQuery库；2.无法拷贝 对象中值为undefined的属性
```
$.extend(true,[],object)

语法：jQuery.extend( [deep ], target, object1 [, objectN ] )
深浅拷贝对应的参数就是[deep]，是可选的，为true或false。默认情况是false（浅拷贝），并且false是不能够显示的写出来的。如果想写，只能写true（深拷贝）
```
## 14. 一行代码实现数组去重（ES6）？
ES6中新增了Set数据结构，类似于数组，但是 它的成员都是唯一的 ，其构造函数可以接受一个数组作为参数，如：
```
let array = [1, 1, 1, 1, 2, 3, 4, 4, 5, 3];
let set = new Set(array);
console.log(set);
// => Set {1, 2, 3, 4, 5}
```
ES6中Array新增了一个静态方法Array.from，可以把类似数组的对象转换为数组，如通过querySelectAll方法得到HTML DOM Node List，以及ES6中新增的Set和Map等可遍历对象，如：
```
let set = new Set();
set.add(1).add(2).add(3);
let array = Array.from(set);
console.log(array);
// => [1, 2, 3]
```
于是，现在我们可以用一行代码实现数组去重了：
```
let array = Array.from(new Set([1, 1, 1, 2, 3, 2, 4]));
console.log(array);
// => [1, 2, 3, 4]
```
附：ES5实现数组去重
```
var array = [1, '1', 1, 2, 3, 2, 4];
var tmpObj = {};
var result = [];
array.forEach(function(a) {
  var key = (typeof a) + a;
  if (!tmpObj[key]) {
    tmpObj[key] = true;
    result.push(a);
  }
});
console.log(result);
// => [1, "1", 2, 3, 4]
```
## 15. js中new一个对象的过程？

使用new关键字调用函数（new ClassA(…)）的具体步骤：

1. 创建空对象{}
2. 使用新对象，调用函数，函数中的this被指向新实例对象：{}.构造函数();
3. 设置新对象的constructor属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的prototype对象
4. 将初始化完毕的新对象地址，保存到等号左边的变量中
```
function Tennis(){
    let this = {
        __proto__: Tennis.prototype
    }
    // .....
    // let this.xxx = xxx
    // .....
    return this    
}
```
注意：若构造函数中没有返回值或返回值是基本类型（Number、String、Boolean）的值，则返回新实例对象；若返回值是引用类型的值，则实际返回值为这个引用类型。
```
var foo = "bar";
function test () {
 this.foo = "foo";
}
new test();// test中的this指新对象，并未改变全局的foo属性
console.log(this.foo);  // "bar"
console.log(new testThis().foo); // "foo";new和属性访问.运算符优先级相通，从左往右执行
```
## 16. javascript定义函数的方法
- 一、函数声明，使用关键字 function 定义函数
```
function functionName(parameters) {
    执行的代码
}
```
函数声明后不会立即执行，会在我们需要的时候调用到。
- 二、函数表达式（使用表达式定以的函数无法提升）
JavaScript 函数可以通过一个表达式定义，函数表达式可以存储在变量中：
```
var x = function (a, b) {return a * b};
```
- 三、Function() 构造函数，通过内置的 JavaScript 函数构造器（Function()）定义
```
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
```
- 四、Lambda 表达式：es6箭头函数（fat arrow function）
```
var greet = (greeting, name) => {
 return `${greeting}, ${name}`
}
// 上面这个函数的主体部分只有一行，就是 return 了一个字符串，所以我们可以让它更简洁一些：
var greet = (greeting, name) => `${greeting}, ${name}`
// 箭头右边的东西会自动被返回（return）。
```
 
- 自调用函数：1.如果表达式后面紧跟 () ，则会自动调用；2.不能自调用声明的函数。
通过添加括号，来说明它是一个函数表达式：
```
(function () {
  var x = "Hello!!";   // 我将调用自己
})();

// 也可以如下写：
!function(){}();
+function(){}();
-function(){}();
~function(){}();
~(function(){})();
void function(){}();
(function(){}());

// 以上函数实际上是一个 匿名自我调用的函数 (没有函数名)。
```











---
- 跨域常用后端解决，前端如何解决
- 双向数据加密传输
- 移动端、pc端加载优化，首页优化，分模块打包等
- 各框架网络请求对比
- 虚拟dom为什么能提高性能
它通过js的Object对象模拟DOM中的节点，然后再通过特定的render方法将其渲染成真实的DOM节点 dom。
- es6新特性
- promise
- 理解 JavaScript 的 async/await
