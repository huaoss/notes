## 一、数据类型

值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、符号（symbol, ES6中新增)、大整数（BigInt, ES2020 引入）。

引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。

Symbol： 是ES6中引入的一种原始数据类型，表示独一无二的值。

BigInt：是 ES2020 引入的一种新的数据类型，用来解决 JavaScript中数字只能到 53 个二进制位（JavaScript 所有数字都保存成 64 位浮点数，大于这个范围的整数，无法精确表示的问题。

一、typeof

优点：能够检查undefined,string,number,boolean类型

缺点：无法区分object、array、null三者，三者都是返回object

typeof是一个操作符而不是函数，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 8 种：number、boolean、symbol、string、object、undefined、function 、bigInt等。

typeof原理是不同的对象在底层都表示为二进制，在Javascript中二进制前（低）三位存储其类型信息。

000: 对象
010: 浮点数
100：字符串
110：布尔
1：整数

测试：
    console.log('测试 Number ->', typeof 1); // number
    console.log('测试 Boolean ->', typeof true); // boolean
    console.log('测试 String ->', typeof ''); // string
    console.log('测试 null ->', typeof null); // object
    console.log('测试 undefined ->', typeof undefined); // undefined
    console.log('测试 NaN ->', typeof NaN); // number
    console.log('测试 function ->', typeof function () { }); // function
    console.log('测试 Object ->', typeof {}); // object
    console.log('测试 Array ->', typeof []); // object
    console.log('测试 Date ->', typeof new Date()); // object
    console.log('测试 Error ->', typeof new Error()); // object
    console.log('测试 RegExp ->', typeof new RegExp()); // object
    console.log('测试 Symbol ->', typeof Symbol()); // symbol
    console.log('测试 Map ->', typeof new Map()); // object
    console.log('测试 Set ->', typeof new Set()); // object

总结：

1、typeof只能判断:
String(返回string),
Number(返回number),
Boolean(返回boolean),
undefined(返回undefined),
function(返回function),
Symbol(返回symbol)
2、对于new构造出来的都是返回object

3、对于Object和Array都是返回object


二、instanceof

优点：能够检查object、array、function类型

缺点：检查不了number、boolean、string类型，结果都是返回false

instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：instanceof 检测的是原型

通俗一些讲，instanceof 用来比较一个对象是否为某一个构造函数的实例。注意，instanceof可以准确的判断复杂数据类型，但是不能正确判断基本数据类型

测试：

    console.log('测试 Number ->', 1 instanceof Number); // false
    console.log('测试 Boolean ->', true instanceof Boolean); // false
    console.log('测试 String ->', '' instanceof String); // false
    // console.log('测试 null ->', null instanceof null); // TypeError: Cannot read property 'constructor' of null
    // console.log('测试 undefined ->', undefined instanceof undefined); // TypeError: Cannot read property 'constructor' of undefined
    console.log('测试 NaN ->', NaN instanceof Number); // false
    console.log('测试 function ->', function () { } instanceof Function); // true
    console.log('测试 Object ->', {} instanceof Object); // true
    console.log('测试 Array ->', [] instanceof Array); // true
    console.log('测试 Date ->', new Date() instanceof Date); // true
    console.log('测试 Error ->', new Error() instanceof Error); // true
    console.log('测试 RegExp ->', new RegExp() instanceof RegExp); // true
    console.log('测试 Symbol ->', Symbol() instanceof Symbol); // false
    console.log('测试 Map ->', new Map() instanceof Map); // true
    console.log('测试 Set ->', new Set() instanceof Set); // true

    console.log('测试 new Number ->', new Number(1) instanceof Number); // true
    console.log('测试 new Boolean ->', new Boolean(true) instanceof Boolean); // true
    console.log('测试 new String ->', new String('') instanceof String); // true


总结：

1、不能判断 null,undefined

2、基本数据类型 Number,String,Boolean 不能被判断

3、instanceof 用来判断对象是否为某一数据类型的实例，
上例中1,true,''不是实例，所以判断为false

三、使用 constructor 判断数据类型

constructor属性，可以得知某个实例对象，到底是哪一个构造函数产生的。

constructor属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改constructor属性，防止引用的时候出错。所以，修改原型对象时，一般要同时修改constructor属性的指向。

注意：

1、null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。

2、函数的 constructor 是不稳定的，这个主要体现在自定义对象上，当开发者重写 prototype 后，原有的 constructor 引用会丢失，constructor 会默认为 Object


    console.log('测试 Number ->', (1).constructor === Number); // true
    console.log('测试 Boolean ->', true.constructor === Boolean); // true
    console.log('测试 String ->', ''.constructor === String); // true
    // console.log('测试 null ->', null.constructor === null); // TypeError: Cannot read property 'constructor' of null
    // console.log('测试 undefined ->', undefined.constructor); // TypeError: Cannot read property 'constructor' of undefined
    console.log('测试 NaN ->', NaN.constructor === Number); // true 注意:NaN和infinity一样是Number类型的一个特殊值
    console.log('测试 function ->', function () { }.constructor === Function); // true
    console.log('测试 Object ->', {}.constructor === Object); // true
    console.log('测试 Array ->', [].constructor === Array); // true
    console.log('测试 Date ->', new Date().constructor === Date); // true
    console.log('测试 Error ->', new Error().constructor === Error); // true
    console.log('测试 RegExp ->', new RegExp().constructor === RegExp); // true
    console.log('测试 Symbol ->', Symbol().constructor === Symbol); // true
    console.log('测试 Map ->', new Map().constructor === Map); // true
    console.log('测试 Set ->', new Set().constructor === Set); // true

总结：

不能判断null,undefined,其它的都可以


四、object.prototype.toString.call

优点：任何类型都能准确的检查出来

缺点：写法复杂

toString() 是 Object 的原型方法，调用该方法，默认返回当前对象的 [[Class]] 。这是一个内部属性，其格式为 [object Xxx] ，其中 Xxx 就是对象的类型。

对于 Object 对象，直接调用 toString() 就能返回 [object Object] 。而对于其他对象，则需要通过 call / apply 来调用才能返回正确的类型信息。

    console.log('测试 Number ->', Object.prototype.toString.call(1)); // [object Number]
    console.log('测试 Boolean ->', Object.prototype.toString.call(true)); // [object Boolean]
    console.log('测试 String ->', Object.prototype.toString.call('')); // [object String]
    console.log('测试 null ->', Object.prototype.toString.call(null)); // [object Null]
    console.log('测试 undefined ->', Object.prototype.toString.call(undefined)); // [object Undefined]
    console.log('测试 NaN ->', Object.prototype.toString.call(NaN)); // [object Number]
    console.log('测试 function ->', Object.prototype.toString.call(function () { })); // [object Function]
    console.log('测试 Object ->', Object.prototype.toString.call({})); // [object Object]
    console.log('测试 Array ->', Object.prototype.toString.call([])); // [object Array]
    console.log('测试 Date ->', Object.prototype.toString.call(new Date())); // [object Date]
    console.log('测试 Error ->', Object.prototype.toString.call(new Error())); // [object Error]
    console.log('测试 RegExp ->', Object.prototype.toString.call(new RegExp())); // [object RegExp]
    console.log('测试 Symbol ->', Object.prototype.toString.call(Symbol())); // [object Symbol]
    console.log('测试 Map ->', Object.prototype.toString.call(new Map())); // [object Map]
    console.log('测试 Set ->', Object.prototype.toString.call(new Set())); // [object Set]


五、实用封装

    // isType
    let isType = (type, obj) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
    console.log(isType('Number', 12))  // true
    console.log(isType('Number', '12')) // false

    // getType
    let getType = function(o) {
        let s = Object.prototype.toString.call(o);
        return s.match(/\[object (.*?)\]/)[1].toLowerCase();
    };
    console.log(type(12)) // number
    console.log(type('12')) // string
    console.log(type({})) // object
    console.log(type([])) // array

## 二、构造函数

构造函数就是初始化一个实例对象，对象的prototype属性是继承一个实例对象。

## 三、eventloop

## 四、promise this指向


