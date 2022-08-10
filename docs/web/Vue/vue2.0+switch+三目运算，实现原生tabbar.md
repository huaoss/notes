# vue2.0+switch+三目运算，实现原生tabbar
1. 路由搭建
```
export default new Router({
  routes: [
    {
      path: "/Home",
      component: Home,
    },
    {
      path: "/recommend",
      component: Recommend
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/chat",
      component: Chat
    },
    {
      path: "/me",
      component: Me
    },
　　{
     path: '/',<br>     redirect: '/home'<br>   },
  ]
});
```
2. 页面模板搭建，src和on都要动态绑定，使用三目运算判断每次点击切换
```
<div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/home')">
            <img :src="'/home' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
            <span :class="{on: '/home' === $route.path}">首页</span>
        </div>
    <div class="tab-item" @click="switchTo('/recommend')">
            <img :src="'/recommend' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">
            <span :class="{on: '/recommend' === $route.path}">推荐</span>
        </div>
    <div class="tab-item" @click="switchTo('/search')">
            <img :src="'/search' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="搜索">
            <span :class="{on: '/search' === $route.path}">搜索</span>
        </div>
    <div class="tab-item" @click="switchTo('/chat')">
            <img :src="'/chat' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="聊天">
            <span :class="{on: '/chat' === $route.path}">聊天</span>
        </div>
    <div class="tab-item" @click="switchTo('/me')">
            <img :src="'/me' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="我的">
            <span :class="{on: '/me' === $route.path}">我的</span>
        </div>
  </div>
```

3. 在data里定于tabBarImgArr数组用于存放图片
```
tabBarImgArr:[   //图片切换
    {normal: require('./../../../static/img/icon_home.png'), selected: require('./../../../static/img/icon_home_selected.png')},
    {normal: require('./../../../static/img/icon_intro.png'), selected: require('./../../../static/img/icon_intro_selected.png')},
    {normal: require('./../../../static/img/icon_search.png'), selected: require('./../../../static/img/icon_search_selected.png')},
    {normal: require('./../../../static/img/icon_chat.png'), selected: require('./../../../static/img/icon_chat_selected.png')},
    {normal: require('./../../../static/img/icon_mine.png'), selected: require('./../../../static/img/icon_mine_selected.png')}
  ]
```

4. 在methods里实现switchTo切换
```
methods:{
    switchTo(path){
      // console.log(this.$router)
      this.$router.replace(path)
    }
  }
```

5. css样式
```
.bottom-tab
    width 100%
    height 50px
    background-color #fff
    position fixed
    left 0px
    bottom 0px
    display flex
    z-index 999
    .tab-item
      display flex
      flex 1
      flex-direction column
      align-items center
      justify-content center
      font-size 14px
      color #666
      img
         width 35%
         margin-bottom 2px
      .on
        color red
```


