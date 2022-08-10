## 参考文献

https://www.jb51.net/article/239030.htm

https://www.jb51.net/article/242763.htm

https://www.jb51.net/article/224323.htm

## 描述

vuex是为vue提供了全局的状态仓库（store），就像一个状态机，避免了父子、兄弟组件之前复杂的传参。他维持了全局共用的数据的一致性。

1，state 共用的数据

2，getters 处理state后得到想要的数据

3，mutations 唯一可以修改state的函数

4，actions 只能显式的调用mutations，可以异步、请求数据

5，moudles 把1、2、3、4包装起来的当成一个模块，可以有多个也可以没有

主要的4个模块，有对应的四个辅助函数，用处是把状态 和 操作映射到当前页面

- `mapState `和 `mapGetters`,是状态数据，放在计算属性；
- `mapMutations`和 `mapActions `是操作函数， 显然放在方法里面；

this.$store.state.name





import { mapState, mapGetters } from 'vuex';

`...mapState([``'name'``]),`

 ``...mapGetters([``'getMessage'``])`



## 优缺点

### 优点

1.响应式

属于 vue 生态一环,，能够触发响应式的渲染页面更新。 (localStorage 就不会)

2.可预测的方式改变数据

避免数据污染

3.无需转换数据

JS 原生的数据对象写法（不需要做转换）。（localStorage 需要做转换）

### 缺点

1.复杂

适合大应用，不适合小型应用

2.不能持久化（刷新页面后vuex中的state会变为初始状态）

解决方案

结合localStorage

vuex-persistedstate插件Ï