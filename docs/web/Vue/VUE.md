# vue基础

## 一、组件生命周期

https://www.jb51.net/article/238394.htm#_lab2_0_2

- 创建：

  - new Vue()
  - 初始化事件和生命周期
  - **beforeCreate**
  - 数据观测、属性、监听器配置等
  - **Created**
  - 模板编译到render
  - **beforeMount**
  - render
  - **mounted**：异步请求、操作DOM、定时器等 

- 更新：
  - 依赖数据改变或$forceUpdate强制刷新
  - **beforeUpdate**：移除已添加的事件监听等（不可更改依赖数据）
  - render
  - **updated**：操作DOM添加事件监听等（不可更改依赖数据）

- 销毁：
  - **beforeDestroy**：移除已添加的事件监听、子组件、计时器等
  - **destroyed**

  ​

  ![2022031410035210.jpg](https://img.jbzj.com/file_images/article/202203/2022031410035210.jpg)

- 父子组件生命周期执行顺序：

  - 创建：父beforeCreate -> 父created -> 父beforeMount ->子beforeCreate -> 子created -> 子beforeMount -> 子mounted-> 父mounted
  - 更新：父beforeUpdate -> 子beforeUpdate -> 子updated-> 父updated
  - 销毁：父beforeDestroy -> 子beforeDestroy -> 子destroyed-> 父destroyed

## 二、组件通信和调用

**通信**

1. 使用**自定义属性**，父向子传值
   1. 父组件通过 v-bind 绑定数值
   2. 子组件通过 props 声明自定义属性
2. 使用**自定义事件**，子向父传值
   1. 子组件通过 `$emit` 将值传递给父组件
   2. 父组件 @ 绑定自定义事件
3. 使用**eventBus**，兄弟通信
   1. 创建 `eventBus.js` 模块，并**向外共享一个 Vue 的实例对象**
   2. 在数据发送方，调用 `bus.$emit('事件名称'，发送的数据)` 方法触发自定义事件
   3. 在数据接收方，调用 `bus.$on('事件名称'，事件处理函数)` 方法注册一个自定义事件方法
4. 使用**vuex**
5. 其他：$parent、$children、插槽、ref、父组件进行过渡、Vue.observable()
6. 汇总：props，$emit , vuex , provide/inject , $attrs/$ listeners，$root , $parent, $refs, eventBus

**调用**

1. 子直接调父 this.$parent.event
2. 子传参数父监听触发 this.$emit("envnt")
3. 父直接调子 this.$refs.child.envnt
4. 父按照索引找到子 this.$children[0].envnt
5. 兄弟之间可以用父传递方法和事件、也可以用bus注册触发
6. 祖孙之间可以用父传递、也可以bus
7. 孙调祖：祖`provide(){ return{ saveFun:this.saveFun } },` provide和methods同级；孙`inject:['saveFun'],`
   inject data同级

**VUE3**

https://www.jb51.net/article/244484.htm#_lab2_0_3

1.  父调子 setup 语法糖 + defineExpose
2.  子调父  setup 语法糖 + defineEmits
3.  defineProps 接收与 props 选项相同的值，defineEmits 也接收 emits 选项相同的值。

## 三、setup语法糖

https://www.jb51.net/article/201199.htm

- setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数 也就说在 setup函数中是无法 使用 data 和 methods 中的数据和方法的；Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined
- setup函数是 Composition API（组合API）的入口
- 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用
- setup函数只能是同步的不能是异步的



1. 用法1:结合ref使用
2. 用法2：代码分割

## 四、$nextTick

- 监听DOM更新完成回调，本身类似一个promise
- created()阶段dom未进行渲染，此刻操作dom要放在 $nextTick 回调里，mounted() 不用

https://www.jb51.net/article/154823.htm



## 五、$set

当vue的data里边声明或者已经赋值过的对象或者数组（数组里边的值是对象）时，向对象中添加新的属性，如果更新此属性的值，是不会更新视图的。如果我们要让这个新字段是响应式的，就要使用到this.$set来注入数据

受 ES5 的限制，Vue.js 不能检测到对象属性的添加或删除

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。

https://www.jb51.net/article/229450.htm



## 六、$forceUpdate()

迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

https://www.jb51.net/article/232447.htm#_label1



## 七、keep-alive

1. 页面权限
2. 动态菜单
3. 前进刷新后退不刷新
4. ...

https://www.jb51.net/article/208900.htm



## 八、watch

25 



## 九、ref和reactive

https://www.jb51.net/article/216895.htm

- Ref 用来创建基础类型的响应式数据，

  Reactive 用来创建引用类型的响应式数据，

- Ref的本质是通过Reactive创建的，Ref(10)=>Reactive({value:10});

  Ref在模板调用可以直接省略value，在方法中改变变量的值需要修改value的值，才能修改成功。Reactive在模板必须写全不然显示整个数据。

- Reactive的本质是将每一层的数都解析成proxy对象，Reactive 的响应式默认都是递归的，改变某一层的值都会递归的调用一遍，重新渲染dom。

**ref捆绑页面标签**

vue2.0 可以通过this.refs拿到dom元素，vue3取消了这一操作，没有了refs拿到dom 元素，vue3取消了这一操作，没有了refs拿到dom元素，vue3取消了这一操作，没有了refs这个属性值，可以直接用ref()方法生成响应式变量与dom 元素捆绑

```
<template>
   <div ref="box"></div>

</template>
import {ref,onMounted} from 'vue'
/*
 setup 方法调用是在生命周期beforeCreate与created 之间
*/
<script>
   setup(){
      var box = ref(null)
      onMounted(()=>{
         console.log('onMounted',box.value)
      })
      console.log(box.value)
      return {box}

   }

</script>

```

## 十、插槽 solt

https://www.jb51.net/article/214428.htm



插槽，其实就相当于占位符。它在组件中给你的HTML模板占了一个位置，让你来传入一些东西。插槽又分为 匿名插槽、具名插槽、作用域插槽。

在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope

**匿名插槽**

我们也可以叫它单个插槽或者默认插槽。和具名插槽相对，它是不需要设置 name 属性的，它隐藏的name属性为default。

## 十一、自定义组件使用v-model

父组件，在引用子组件的地方，使用v-model绑定需要传给子组件的要改变的值

我们也可以改写默认绑定的prop名称和event名称，利用下面的model，(在子组件内)



## 十二、vue3.0 中为什么要使用 Proxy，它相比以前的实现方式有什么改进

https://blog.csdn.net/qq_43456781/article/details/120679648 ？？？

1. Vue2.x通过给每个对象添加`getter setter`属性去改变对象,实现对数据的观测,Vue3.x通过Proxy代理目标对象,且一开始只代理最外层对象,嵌套对象`lazy by default` ,性能会更好
2. 支持数组索引修改,对象属性的增加,删除

## 十三、computed、methods和watch

## 十四、nextTick原理

## 十五、组合式api

## Vue3里的setup中如何使用this.$router.push等路由方法

https://blog.csdn.net/zy21131437/article/details/113868975

## Vue3中SetUp函数的参数props、context详解

https://www.jb51.net/article/216441.htm

# vue3在 setup 中使用 props

# vuex

# vuex中commit与dispatch的区别

### vue为什么不兼容ie8

因为ie8没有实现Object.defineProperty()


不常用语法
# vue :style 使用calc()

```
<div :style="aaa"></div>

aaa() {
    let w = '50%';
    let ml = '10%';
    return {width: `calc(${w} + 2px)`, marginLeft: `calc(${ml} - 1px)`};
}
```

- [ ] keep-alive
