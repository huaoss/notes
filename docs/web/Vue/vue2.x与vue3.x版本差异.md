# vue2.x与vue3.x版本差异

### 一、keepAlive

keepalive是Vue的内置组件，作用是将组件缓存在内存当中，防止重复渲染DOM，属于消耗内存获取速度。常用的用法是将组件或者路由缓存，现有的用法vue2.x与vue3.x有部分差别。

通常我们可以配置整个页面缓存或只让特定的某个组件保持缓存信息，配置了keepalive的路由或者组件，只会在页面初始化的时候执行created->mounted生命周期，第二次及以后再进入该页面将不会执行改生命周期，而是会去读取缓存信息。

#### 1. 配置App.vue

```
<template>
	<!-- vue2.x配置 -->
   <keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive"/>
</template>
```

```
<template>
  <!-- vue3.0配置 -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component"  v-if="!$route.meta.keepAlive"/>
  </router-view> 
</template>
```

#### 2. 添加meta属性

```
{
  path: "/keepAliveTest",
   name: "keepAliveTest",
   meta: {
       keepAlive: true //设置页面是否需要使用缓存
   },
   component: () => import("@/views/keepAliveTest/index.vue")
 },

```





