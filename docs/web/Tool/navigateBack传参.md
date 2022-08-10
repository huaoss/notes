
```
var pages = getCurrentPages(); // 获取当前页面栈。数组中第一个元素为首页，最后一个元素为当前页面。
var curPage = pages[pages.length - 1];   // 当前页面
var prePage = pages[pages.length - 2];  // 上一个页面
// 直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
prePage.setData({
  data：data
});
```
