# Fetch和Ajax

### 一、Ajax
Ajax的本质是使用XMLHttpRequest对象来请求数据：
```
function ajax(url, fnSucc, fnFaild)
{
    //1.创建Ajax对象
    if(window.XMLHttpRequest){
       var oAjax=new XMLHttpRequest();
    }else{
       var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    //2.连接服务器（打开和服务器的连接）
    oAjax.open('GET', url, true);
    
    //3.发送
    oAjax.send();
    
    //4.接收
    oAjax.onreadystatechange=function (){
       if(oAjax.readyState==4){
           if(oAjax.status==200){
              //alert('成功了：'+oAjax.responseText);
              fnSucc(oAjax.responseText);
           }else{
              //alert('失败了');
              if(fnFaild){
                  fnFaild();
              }
           }
        }
    };
}
```
### 二、fetch

fetch 是全局量 window 的一个方法，它的主要特点有：

1、第一个参数是URL:

2、第二个是可选参数，可以控制不同配置的 init 对象

3、使用了 JavaScript Promises 来处理结果/回调:
```
// 链式处理,将异步变为类似单线程的写法: 高级用法.
fetch('/some/url').then(function(response) {
    return . //... 执行成功, 第1步...
}).then(function(returnedValue) {
    // ... 执行成功, 第2步...
}).catch(function(err) {
    // 中途任何地方出错...在此处理 :( 
});
```
### 三、fetch规范与jQuery.ajax()主要有两种方式的不同，牢记：
1、从 fetch()返回的 Promise 将<b>不会拒绝HTTP错误状态</b>, 即使响应是一个 HTTP 404 或 500。相反，它会正常解决 (其中ok状态设置为false), 并且仅在网络故障时或任何阻止请求完成时，它才会拒绝。

可以做简单的封装
```
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

fetch('/users')
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    console.log('request succeeded with JSON response', data)
  }).catch(function(error) {
    console.log('request failed', error)
  })
  ```
  2、默认情况下, fetch在服务端不会发送或接收任何 cookies, 如果站点依赖于维护一个用户会话，则导致未经认证的请求(要发送 cookies，必须发送凭据头).
这一点也可以做一些处理：

如果想要在同域中自动发送cookie,加上 credentials 的 same-origin 选项
```
fetch(url, {
  credentials: ’same-origin'
})
```
same-origin值使得fetch处理Cookie与XMLHttpRequest类似。 否则，Cookie将不会被发送，导致这些请求不保留认证会话。

对于CORS请求，使用include值允许将凭据发送到其他域：

```
fetch(url, {
  credentials: 'include'
})
```