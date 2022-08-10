# TODO

- [ ] 定型数组

- [ ] web worker 

- [ ] css四种引入方式和权重

- [ ] TS

- [ ] 微前端

- [ ] xss攻防

- [ ] 前端错误监控

- [ ] 判断视窗外移除元素

- [ ] Symbol

- [ ] reflect

- [ ] webrtc

- [ ] iframe 通信

- [ ] window.parent 、window.top及window.self 

- [ ] import、require

- [ ] BOM、DOM

- [ ] ​二叉树的前序、中序、后序递归和非递归遍历以及层序遍历

- [ ] ​

      ​


# 面试题



闭包、原型、原型链、new、继承、事件运行机制、for、call、





**对于冒泡模式**，事件首先被事件对象本身知道，然后让其父元素知道，就这样在祖先元素中一层层向外传播，直至window 对象，如果中间有节点设置监听这个事件，就调用其监听函数。

**对于捕获模式**，事件首先被window 对象知道，然后到document 节点，最后才被事件对象本身知道，如果中间有节点监听此事件，就调用监听函数。







- 宏任务微任务区别
- 深拷贝的几种方法
- ​
- [ ] 项目层面
- [ ] hash 在微信浏览器
- [ ] argument[0]()
- [ ] function fn(){return fn}
- [ ] instance of
- [ ] 浏览器垃圾回收
- [ ] 
- [ ] 
- [ ] 


http状态码

1 表示消息
2 表示成功
3 表示重定向
4 表示请求错误
5 表示服务器错误


TOSTUDY

- [ ] Babel 教程
- [ ] webpack
- [ ] 缓存机制
- [ ] 事件委托、代理
- [ ] javascript:(function(){var script=document.createElement('script');script.src='//cdn.erhe.cn/ysc/interface/ysc.js';document.getElementsByTagName('head')[0].appendChild(script);})();
- [ ] xor加密+
- [ ] 


weixin://dl/business/?t=6ldteztsfVd

## 浏览器基础
- [ ] 重绘与回流->浏览器加载过程


----
## JS基础
- [ ] 数据类型->类型判断
- [ ] 构造函数过程
- [ ] eventloop
- [ ] 


----
## ES6+
- [ ] Promise和普通函数的区别、this能不能被改变


----
## VUE基础

----
## 小程序

----

## 设计模式

----

## 数据结构


## hash路由url中的‘#’在微信公众号里不识别

解决：在’#‘前面添加’?’,这个时候微信会把’?‘后面的内容当做参数而vue可以识别’?#’,这样既可以避免出现出现提示当前页面url未注册的错误在视图加载后，修改url（这样不会触发页面重新加载，其他框架也可做类似处理）

    mounted() {
        if (window.location.href.indexOf("?#") < 0) {
        window.location.href = window.location.href.replace("#", "?#");
        }
    }




# 面试题







- 宏任务微任务区别
- 深拷贝的几种方法
- ​
- [ ] 项目层面
- [ ] hash 在微信浏览器
- [ ] argument[0]()
- [ ] function fn(){return fn}
- [ ] instance of
- [ ] 浏览器垃圾回收
- [ ] 
- [ ] 
- [ ] 


http状态码

1 表示消息
2 表示成功
3 表示重定向
4 表示请求错误
5 表示服务器错误


TOSTUDY

- [ ] javascript:(function(){var script=document.createElement('script');script.src='//cdn.erhe.cn/ysc/interface/ysc.js';document.getElementsByTagName('head')[0].appendChild(script);})();


weixin://dl/business/?t=6ldteztsfVd

## 浏览器基础
- [ ] 重绘与回流->浏览器加载过程


----
## JS基础
- [ ] 数据类型->类型判断
- [ ] 构造函数过程
- [ ] eventloop
- [ ] 


----
## ES6+
- [ ] Promise和普通函数的区别、this能不能被改变


----
## VUE基础

----
## 小程序

----

## 设计模式

----

## 数据结构


## hash路由url中的‘#’在微信公众号里不识别

解决：在’#‘前面添加’?’,这个时候微信会把’?‘后面的内容当做参数而vue可以识别’?#’,这样既可以避免出现出现提示当前页面url未注册的错误在视图加载后，修改url（这样不会触发页面重新加载，其他框架也可做类似处理）

    mounted() {
        if (window.location.href.indexOf("?#") < 0) {
        window.location.href = window.location.href.replace("#", "?#");
        }
    }


webpack vite

https://blog.csdn.net/weixin_42991716/article/details/115803348

https://www.jianshu.com/p/331257216bc4


tips：一次只做一件事

- [ ] TypeScript
- [ ] Java
- [ ] Node
- [ ] Jerkins（gitlab、CI、CD）
- [ ] ​



2022.7.6计划