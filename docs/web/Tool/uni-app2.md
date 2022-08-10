# uni-app

### 获取元素高

```
uni.createSelectorQuery().in(this).select('.' + class).boundingClientRect(result => {
　　if (result) {
　　    console.log(result)
　　} 
});

uni.createSelectorQuery().in(this).select('.' + class).boundingClientRect().exec((res)=>{
　　if(res[0]) {
        console.log(res[0])
　　}
});
```

### 剪贴板

1. uni api
```
uni.setClipboardData({
    data: 'hello',
    success: function () {
        console.log('success');
    }
});

uni.getClipboardData({
    success: function (res) {
        console.log(res.data);
    }
});
```
2. 使用Native.js插件

### 实现HBuilderX对scss自动编译成css

1. 安装scss/sass编辑插件
    工具 - 插件安装 - scss/sass编译
2. 修改配置，允许保存scss文件后，自动编译成css
    工具 - 插件配置 - compile-node-sass - package.json
    将"onDidSaveExecution"设置成true
3. 重启HBuilderX

### 引用自定义组件

```
import x from ...
export default {
    components: {
        x
    }
}
```


## 条件编译

- #ifdef：if defined 仅在某平台存在
- #ifndef：if not defined 除了某平台均存在
- PLATFORM：H5 || MP-WEIXIN

// 注释
/* 注释 */
<!-- 注释 -->





## uniapp性能优化



## 1.复杂页面数据区域封装成组件

场景：

例如项目里包含类似论坛页面：点击一个点赞图标，赞数要立即+1，会引发页面级所有的数据从js层向视图层的同步，造成整个页面的数据更新，造成点击延迟卡顿

优化方案：

对于复杂页面，更新某个区域的数据时，需要把这个区域做成组件，这样更新数据时就只更新这个组件

注：app-nvue和h5不存在此问题；造成差异的原因是小程序目前只提供了组件差量更新的机制，不能自动计算所有页面差量

## 2.避免使用大图

场景：

页面中若大量使用大图资源，会造成页面切换的卡顿，导致系统内存升高，甚至白屏崩溃；对大体积的二进制文件进行 base64 ，也非常耗费资源

优化方案：

图片请压缩后使用，避免大图，必要时可以考虑雪碧图或svg，简单代码能实现的就不要图片

## 3.小程序、APP分包处理pages过多

[前往官网手册查看配置](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)

## 4.图片懒加载

功能描述：
此功能只对微信小程序、App、百度小程序、字节跳动小程序有效，默认开启
[前往uView手册查看配置](https://uniapp.dcloud.io/collocation/manifest?id=app-vue-optimization)

## 5.禁止滥用本地存储

不要滥用本地存储，局部页面之间的传参用url，如果用本地存储传递数据要命名规范和按需销毁

## 6.可在外部定义变量

在 uni-app 中，定义在 data 里面的数据每次变化时都会通知视图层重新渲染页面；所以如果不是视图所需要的变量，可以不定义在 data 中，可在外部定义变量或直接挂载在 vue实例 上，以避免造成资源浪费

## 7.分批加载数据优化页面渲染

场景：
页面初始化时，逻辑层一次性向视图层传递很大的数据，使视图层一次性渲染大量节点，可能造成通讯变慢、页面切换卡顿

优化方案：
以局部更新页面的方式渲染页面；如：服务端返回 100条数据 ，可进行分批加载，一次加载 50条 ， 500ms  后进行下一次加载

## 8.避免视图层和逻辑层频繁进行通讯

- 减少  scroll-view  组件的  scroll  事件监听，当监听  scroll-view  的滚动事件时，视图层会频繁的向逻辑层发送数据
- 监听  scroll-view  组件的滚动事件时，不要实时的改变  scroll-top / scroll-left  属性，因为监听滚动时，视图层向逻辑层通讯，改变  scroll-top / scroll-left  时，逻辑层又向视图层通讯，这样就可能造成通讯卡顿
- 注意  onPageScroll  的使用， onPageScroll  进行监听时，视图层会频繁的向逻辑层发送数据
- 多使用 css动画 ，而不是通过js的定时器操作界面做动画
- 如需在 canvas 里做跟手操作， app端 建议使用 renderjs ，小程序端建议使用 web-view 组件； web-view 里的页面没有逻辑层和视图层分离的概念，自然也不会有通信折损

## 9.CSS优化

要知道哪些属性是有继承效果的，像字体、字体颜色、文字大小都是继承的，禁止没有意义的重复代码

## 10.善用节流和防抖

防抖：
等待n秒后执行某函数，若等待期间再次被触发，则等待时间重新初始化
节流：
触发事件n秒内只执行一次，n秒未过，再次触发无效

## 11.优化页面切换动画

场景：
页面初始化时存在大量图片或原生组件渲染和大量数据通讯，会发生新页面渲染和窗体进入动画抢资源，造成页面切换卡顿、掉帧

优化方案：

- 建议延时 100ms~300ms 渲染图片或复杂原生组件，分批进行数据通讯，以减少一次性渲染的节点数量
- App 端动画效果可以自定义; popin/popout 的双窗体联动挤压动画效果对资源的消耗更大，如果动画期间页面里在执行耗时的js，可能会造成动画掉帧;此时可以使用消耗资源更小的动画效果，比如 slide-in-right / slide-out-right
- App-nvue 和 H5 ，还支持页面预载，[uni.preloadPage](https://uniapp.dcloud.io/api/preload-page)，可以提供更好的使用体验

## 12.优化背景色闪白

场景：
进入新页面时背景闪白，如果页面背景是深色，在vue页面中可能会发生新窗体刚开始动画时是灰白色背景，动画结束时才变为深色背景，造成闪屏

优化方案：

将样式写在  App.vue  里，可以加速页面样式渲染速度； App.vue  里面的样式是全局样式，每次新开页面会优先加载  App.vue  里面的样式，然后加载普通 vue 页面的样式

app端 还可以在 pages.json 的页面的 style 里单独配置页面原生背景色，比如在 globalStyle->style->app-plus->background 下配置全局背景色

```
 "style": { "app-plus": { "background":"#000000" } } 
```

nvue页面不存在此问题，也可以更改为nvue页面

## 13.优化启动速度

- 工程代码越多，包括背景图和本地字体文件越大，对小程序启动速度有影响，应注意控制体积
- App端的 splash 关闭有白屏检测机制，如果首页一直白屏或首页本身就是一个空的中转页面，可能会造成 splash 10秒才关闭
- App端使用v3编译器，首页为 nvue页面 时，并设置为[fast启动模式](https://ask.dcloud.net.cn/article/36749)，此时App启动速度最快

App设置为纯 nvue项目 （manifest里设置app-plus下的renderer:"native"），这种项目的启动速度更快，2秒即可完成启动；因为它整个应用都使用原生渲染，不加载基于webview的那套框架

## 14.优化包体积

- uni-app 发行到小程序时，如果使用了 es6 转 es5 、css 对齐的功能，可能会增大代码体积，可以配置这些编译功能是否开启
- uni-app 的 H5端，uni-app 提供了摇树优化机制，未摇树优化前的 uni-app 整体包体积约 500k，服务器部署 gzip 后162k。开启摇树优化需在[manifest配置](https://uniapp.dcloud.io/collocation/manifest?id=optimization)
- uni-app 的 App端，Android 基础引擎约 9M ，App 还提供了扩展模块，比如地图、蓝牙等，打包时如不需要这些模块，可以裁剪掉，以缩小发行包；体积在 manifest.json-App 模块权限里可以选择
- App端支持如果选择纯nvue项目 （manifest里设置app-plus下的renderer:"native"），包体积可以进一步减少2M左右
- App端在 HBuilderX 2.7 后，App 端下掉了 非v3 的编译模式，包体积下降了3M

## 15.禁止滥用外部js插件

描述：
有官方API的就不要额外引用js插件增加项目体积
例如：
url传参加密直接用 encodeURIComponent() 和 decodeURIComponent()