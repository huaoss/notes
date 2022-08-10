## Vue 3.x 废弃和修改的用法

一、filters

Filters的功能可以通过方法调用或计算属性轻松复制，因此它主要提供的是语法价值，而不是实际价值。
Filters需要一个自定义的小语法，然而这打破表达式只是JavaScript的假设——这增加了学习和实现的成本。事实上，它与JavaScript自己的位或运算符(|)相冲突，并使表达式解析更加复杂。
Filters还会在模板IDE支持中增加额外的复杂性(同样因为它们不是真正的JavaScript)。

```
<li>运输状态:{{ item.expressState | showState }}</li>

<li>运输状态:{{ computedText(item.expressState) }}</li>

export default {
  // data ...... 篇幅有限直接省略掉
  computed: {
    computedText() {
      // 计算属性要return一个函数接收参数
      return function (state) {
        switch (state) {
          case "1":
            return "待发货";
            break;
          case "2":
            return "已发货";
            break;
          case "3":
            return "运输中";
            break;
          case "4":
            return "派件中";
            break;
          case "5":
            return "已收货";
            break;
          default:
            return "快递信息丢失";
            break;
        }
      };
    },
  },
};

export default {
  // data ...... 篇幅有限直接省略掉
  computed: {
    computedText() {
      // 计算属性要return一个函数接收参数
      return function (state) {
        switch (state) {
          case "1":
            return "待发货";
            break;
          case "2":
            return "已发货";
            break;
          case "3":
            return "运输中";
            break;
          case "4":
            return "派件中";
            break;
          case "5":
            return "已收货";
            break;
          default:
            return "快递信息丢失";
            break;
        }
      };
    },
  },
};
```





二、`$on`,`$off`和`$once`



## JS 运行机制➡️nextTick

JS 执行是单线程的，它是基于事件循环的。事件循环大致分为以下几个步骤：

- 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
- 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
- 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

主线程不断重复上面的第三步。

2.1 macro task

宏任务，称为task

macro task作用是为了让浏览器能够从内部获取javascript / dom的内容并确保执行栈能够顺序进行。

macro task调度是随处可见的，例如解析HTML，获得鼠标点击的事件回调等等。

2.2 micro task

微任务，也称job

micro task通常用于在当前正在执行的脚本之后直接发生的事情，比如对一系列的行为做出反应，或者做出一些异步的任务，而不需要新建一个全新的task。

只要执行栈没有其他javascript在执行，在每个task结束时，micro task队列就会在回调后处理。

在micro task期间排队的任何其他micro task将被添加到这个队列的末尾并进行处理。

在浏览器环境中，

常见的 macro task 有 setTimeout、MessageChannel、postMessage、setImmediate；

常见的 micro task 有 MutationObsever 和 Promise.then。



vue用异步队列的方式来控制DOM更新和nextTick回调先后执行

microtask因为其高优先级特性，能确保队列中的微任务在一次事件循环前被执行完毕

因为兼容性问题，vue不得不做了microtask向macrotask的降级方案





## props

-------让组件接收外部传来的数据

 接收数据三种方式：

（1）只接收值：props: ['name','age','sex']

（2）接收并限制类型：props: { "name":Number }

（3）限制类型、限制必要性指定默认值：

注意：props是只读的，vue底层会检测你对props的修改，如果进行了修改，控制台会报错，必须修改，就复制一份到data中，通过data去修改数据。

![img](https://upload-images.jianshu.io/upload_images/25078225-10806c40c1edb333.png?imageMogr2/auto-orient/strip|imageView2/2/w/817/format/webp)



## watch

watch 最初绑定时不会执行，只有数据改变才会执行监听

handler(newVal, oldVal)

immediate:true 会在watch里声明监听对象后立即handler方法，所以可以监听到第一次的值

deep深度监听，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样性能开销就会非常大了，任何修改obj里面任何一个属性都会触发这个监听器里的 handler。

优化为字符串监听：

```
watch: {
  'obj.a': {
    handler(newName, oldName) {
      console.log('obj.a changed');
    },
    immediate: true,
    // deep: true
  }
} 

```

这样Vue.js才会一层一层解析下去，直到遇到属性a，然后才给a设置监听函数

注销watch:
为什么要注销 watch？因为我们的组件是经常要被销毁的，比如我们跳一个路由，从一个页面跳到另外一个页面，那么原来的页面的 watch 其实就没用了，这时候我们应该注销掉原来页面的 watch 的，不然的话可能会导致内置溢出。好在我们平时 watch 都是写在组件的选项中的，他会随着组件的销毁而销毁。

但是，如果我们使用下面这样的方式写 watch，那么就要手动注销了，这种注销其实也很简单

```

const unWatch = app.$watch('text', (newVal, oldVal) => {
  console.log(`${newVal} : ${oldVal}`);
})
 
unWatch(); // 手动注销watch

```

## watchEffect



