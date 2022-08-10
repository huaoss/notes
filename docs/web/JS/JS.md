## 一、event loop

- 常见的 macro task 有 script、setTimeout、 setInterval、 MessageChannel、 postMessage、 setImmediate 、 I/O操作、UI渲染
- 常见的 micro task 有 process.nextTick、MutationObsever、Promise.then 

### 执行优先级

主线程script>
微任务process.nextTick>promise>
宏任务setTimeout>setInterval>setImmediate>I/O>UI rendering

### I/O是什么

mouse click , keypresses, network events



**JS执行模型**

JavaScript是一个单线程（Single-threaded）异步（Asynchronous）非阻塞（Non-blocking）并发（Concurrent）语言，这些语言效果通过一个调用栈（Call Stack）、一个事件循环（Event Loop）、一个回调队列（Callback Queue）有些时候也叫任务队列（Task Queue）与跟运行环境相关的API组成。

https://www.jb51.net/article/199827.htm



## 二、this指针

https://www.jb51.net/article/191946.htm

- 全局作用域下以及全局作用域的函数中，this默认指向全局对象window
- 严格模式下，全局作用域的函数中，this默认指向 undefined
- 对象里的函数，this指向该对象

找到函数直接调用的位置后用下面的几条规则就可以判断出 this 的绑定对象。

1. 由 new 调用？绑定到新创建的实例对象上。
2. 由 call、apply、bind调用？绑定到指定的对象上。
3. 由上下文对象调用？绑定到那个上下文对象上。
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象 Window 上。
5. ES6 中的箭头函数会继承外层函数调用的 this 绑定，这和 var self = this;的绑定机制一样。

改变this指向的方法：https://www.jb51.net/article/191945.htm

1. func.call(thisArg, arg1, arg2, ...)，call 方法需要一个指定的 this 值（ this要指向的对象 ）和一个或者多个参数。提供的 this 值会更改调用函数内部的 this 指向。

注：call()不传参的话，在严格模式下，this 的值将会是 undefined；否则将会指向全局对象 Window。

2. func.apply(thisArg, [argsArray])，apply 的用法与 call 方法类似，只不过 call 方法接受的是参数列表，而 apply 方法接受的是一个数组或者类数组对象。
3. func.bind(thisArg, arg1, arg2, ...)，bind 的参数与 call 相同，但是 bind 返回的是一个改变this指向后的函数实例。
4. ES6的箭头函数更改this指向，箭头函数中的 this 是在定义函数的时候绑定，而不是在执行函数的时候绑定。 所谓定义时候绑定，就是指 this 是继承自父执行上下文的 this。

## 三、继承的五种方法

https://www.jb51.net/article/204744.htm

https://www.jb51.net/article/217803.htm

- 构造函数：继承来的只有实例属性，而原型上的属性是访问不到的。这种模式解决了两个问题，就是可以传参，可以继承，但是没有原型，就没有办法复用。
- 原型式继承：是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。
- 组合继承：用使用原型链的方式来实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。无论什么情况下，都会调用过两次超类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。子类型最终会包含超类型对象的全部实例属性，但我们不得不在调用子类型构造函数时重写这些属性。
- 寄生式继承：与构造函数模式类似不能做到函数复用。
- 寄生组合式继承：即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背后的基本思路是：不必为了制定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

## 四、深拷贝

https://www.jb51.net/article/229259.htm

浅拷贝只会发生在引用类型身上，对于引用类型如果之进行简单的赋值，只会赋值指向堆内存的指针，这种称为浅拷贝。

而深拷贝就是完全拷贝一个引用类型，不是地址指针。

**实现深拷贝：**

1. 通过JSON.stringify和JSON.parse

   可以深拷贝的数组和对象，但是不能拷贝函数，可以进行对象或者数组的嵌套拷贝。

   缺点：无法实现对对象中方法的深拷贝

2. 扩展运算符

    `var brr={...arr}`

   利用了对象的结构赋值特性方法。

   缺点：无对对象里面嵌套的对象进行深拷贝，相当于只是对一层引用对象进行深拷贝

3. 递归（推荐）

## 五、jsBridge

https://www.jb51.net/article/221777.htm

## 六、内存管理

https://baijiahao.baidu.com/s?id=1724154593847635488&wfr=spider&for=pc



## 七、async与await捕捉错误

https://blog.csdn.net/weixin_43845137/article/details/123239430

https://www.jb51.net/article/239540.htm

promise里能try catch

try-catch 主要用于捕获异常，注意，这里的异常，是指同步函数的异常，如果 try 里面的异步方法出现了异常，此时catch 是无法捕获到异常的。
原因是因为：当异步函数抛出异常时，对于宏任务而言，执行函数时已经将该函数推入栈，此时并不在 try-catch 所在的栈，所以 try-catch 并不能捕获到错误。对于微任务而言，比如 promise，promise 的构造函数的异常只能被自带的 reject 也就是.catch 函数捕获到