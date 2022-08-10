
## 三、按钮权限

1. 定义按钮权限的指令

        // vue2.0

        import Vue from 'vue'

        Vue.directive('has', {
            inserted: function (el, binding, vnode){
                let isExist = false
                // 从配置获取用户按钮权限
                let btnPermissions = vnode.context.$route.meta.btnPermissions
                if (btnPermissions && btnPermissions.indexOf(binding.value) > -1) {
                    isExist = true
                }
                //不存在时删除节点
                if (el.parentNode && !isExist) {
                    el.parentNode.removeChild(el)
                }
            }
        })

        // vue 3.0

        import App from './App.vue'
        const app = createApp(App);

        app.directive('button', {
            mounted(el, binding) {
                let isExist = false
                // 从配置获取用户按钮权限
                let btnPermissions = router.currentRoute.value.meta.btnPermissions
                if (btnPermissions && btnPermissions.indexOf(binding.value) > -1) {
                    isExist = true
                }
                //不存在时删除节点
                if (el.parentNode && !isExist) {
                    el.parentNode.removeChild(el)
                }
            }
        })       


2. 

## 四、vue.directive

- 完全使用vue3还是兼容v2，setup
- 如何理解单项数据流
- 插槽

## 1. vue双向数据绑定原理？
采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

## 2. v-model使用？
v-model本质上是一个语法糖,通过编译模板文件，为控件的v-model绑定input事件
```
<input v-model="sth" />
//  等同于
<input :value="sth" @input="sth = $event.target.value" />
```
满足语法糖规则：属性必须为value，方法名必须为：input。

如果不是输入框，没有value属性。可以通过伪造拼凑成语法糖的样子，实现v-model
```
// 比如复选框，没有value，也没有input方法
<input type="checkbox" :checkd="value" @change="handleChecked"/>

// 自定义组件，拼凑语法糖
<my-component :value="price" @input="price = $event.target.value"></my-component>

template: `
    <span>
      <input
        type="checkbox"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
      >
    </span>
  `,
  props: ['value'],
})

//  得到了一样的结果
<my-component v-model="price"></my-component>
```

## 3. data为什么是函数不是对象？
为了让组件有自己的作用域，它必须包含私有变量data
```
var component=function(){
    this.data=this.data();//存在私有的data属性
}
```
如果不以函数的形式处理
```
var component=function(){
//不存在私有的data属性
}
component.propotype.data= {count:0}
//此时，data不作为私有变量，就会有暴露的风险，而且，它指向的是{count:0}的引用，所以当重复创建
```
所以单页面中引入vue时可以让data成为对象，组件中必须用return包裹，成为函数






## vue3不再支持 v-model ，而使用 .sync 来代替


## 权限管理+指令
## watch和computed的用法区别是什么？


#### 在简单的vue实例中看到的Vue实例中data属性是如下方式展示的：
```
let app= newVue({
    el:"#app",
    data:{
        msg:''
    },
    methods:{
    }
})
```
#### 在使用组件化的项目中使用的是如下形式：

```
export default{
 data(){
  return {
   showLogin:true,
   // def_act: '/A_VUE',
   msg: 'hello vue',
   user:'',
   homeContent: false,
  }
 },
 methods:{
   
 }
}
```
## 一、父子props传参
### 1、父向子传参
子组件 header.vue 中：
```
<h>{{logo}}</h>
```
```
props: ['logo']
```
父组件中：
 ```
<v-header :logo="logoMsg"></v-header>
```
```
import Header from './components/header'
data(){
    return{
        logoMsg: '哈哈哈哈'
    }
},
components: {
    v-header: Header,
}
```
### 2、子向父传数据
子组件 login.vue 中：
```
<input v-model="username" @change="sendUser" />
```
```
methods: {
    sendUser(){
        this.$emit('transferFun', this.username)
    },
}
```
父组件中：
 ```
<v-login @transferFun="getUser"></v-login>
<p>{{user}}</p>
```
```
import Login from './components/login'
data(){
    return{
        user: ''
    }
},
components: {
    v-login: Login,
},
methods:{
    getUser(msg){
        this.user = msg
    }
}
```
==ps:== Vue 没有直接子对子传参的方法，建议将需要传递数据的子组件，都合并为一个组件。如果一定需要子对子传参，可以先从传到父组件，再传到子组件。

## 二、状态管理工具Vuex
```
```