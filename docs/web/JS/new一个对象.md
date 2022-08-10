## 1、js里new一个对象的过程中发生了什么？（未理解 待完善）

**new对象：**
```
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("Alice", 23);
```
**new一个对象的四个过程：**

1、创建一个空对象
```
var obj = new Object();
```
2、让Person中的this指向obj，并执行Person的函数体
```
var result = Person.call(obj);
```
3、设置原型链，将obj的__proto__成员指向了Person函数对象的prototype成员对象
```
obj.__proto__ = Person.prototype;
```
4、判断Person的返回值类型，如果是值类型，返回obj。如果是引用类型，就返回这个引用类型的对象。
```
if (typeof(result) == "object")
  person = result;
else
  person = obj;
```
用new Object() 的方式新建了一个对象 obj

取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数

将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性

使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性

返回 obj


---

## 2、js事件委托原理（待实践：）
**事件委托让我们添加监听器到父元素上，来避免监听每个子元素。**

比如说现在一个列表里有几千个子元素：

```
<body>
  <div id="container">
   <ul id="list">
     <li><a href="#">Item 1</a></li>
     <li><a href="#">Item 2</a></li>
     <li><a href="#">Item 3</a></li> 
     <li><a href="#">Item 4</a></li>
     ..................................
     <li><a href="#">Item 1000</a></li>
   </ul>
  </div>
</body>
```

如果我们遍历每个 a 元素然后一个一个监听事件的话那就瞬间爆炸了。当 JS 来创建这些元素的时候，页面就会变得很卡。

所以这就有了事件委托：当事件冒泡到 body 元素，我们可以使用 event.target 来检查是哪个元素被点击了。
```
document.addEventListener("click", function(e) {
  if(e.target && e.target.nodeName == "A") {
  console.log("List item ", e.target.textContent, " was clicked!");
  }
});

// When we click the 2nd item, the page prints out:

"List item Item 2 was clicked!"
```
**PS: currentTarget 指向的是监听器直接绑定的那个元素，而 target 指向的是我们点击的那个元素。**

---

## v-for为什么要加key
vue和react的虚拟DOM的Diff算法需要Key做为唯一标识，为了更好地区别各个组件，key的作用主要是为了高效的更新虚拟DOM。

另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。

template是根节点不能循环，但是可以套在div里循环，已经是套好的

`<template></template>` 可以用作模板占位符

为什么template必须有且只能有一个div呢？

先看一看template这个标签，这个标签是HTML5出来的新标签，它有三个特性：

1. 隐藏性：该标签不会显示在页面的任何地方，即便里面有多少内容，它永远都是隐藏的状态；

2. 任意性：该标签可以写在页面的任何地方，甚至是head、body、script标签内；

3. 无效性：该标签里的任何HTML内容都是无效的，不会起任何作用；

但是呢,可以通过innerHTML来获取到里面的内容。



为了让组件能够正常的生成一个vue实例，那么这个div会被自然的处理成程序的入口。
通过这个‘根节点'，来递归遍历整个vue‘树'下的所有节点，并处理为vdom，最后再渲染成真正的HTML，插入在正确的位置
那么这个入口，就是这个树的‘根'，各个子元素，子组件，就是这个树的‘枝叶'，而自然而然地，这棵‘树'，就是指一个vue实例了。

使用index作为key的时候，插入数组会造成多余的diff消费