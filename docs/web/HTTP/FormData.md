# FormData

## 引言
在后端与前端约定好application/json格式传递数据时，因为后台是go强类型语言，在定义api接口时，某些字段要求是整型类型，但是对于前端来说输入框或者从url中的search取到的参数都是字符串，不得不进行前端类型转换。

咋一看，对于接口参数比较少的api前端转换没有什么，但是对于一般的交互复杂，参数比较多的接口，要对大部分参数进行类型转换就是一种吃力不讨好的活。好在后端同学还支持另一种的前后端数据交互格式，即multipart/form-data。通过该格式后端取到前端传递的数据就是数字了(即使前端传递的是字符串)，而不像json格式获取的是字符串。这样，就不需要额外对前端获取的数据进行特殊转换了。下面就来说说form-data。
## form-data请求格式
multipart/form-data是基于post方法来传递数据的，并且其请求内容格式为Content-Type: multipart/form-data,用来指定请求内容的数据编码格式。另外，该格式会生成一个boundary字符串来分割请求头与请求体的，具体的是以一个boundary=${boundary}来进行分割，伪码如下：
```
...
Content-Type: multipart/form-data; boundary=${boundary} 
 
--${boundary}
...
...
 
--${boundary}--
```
上面boundary=${boundary}之后就是请求体内容了，请求体内容各字段之间以--${boundary}来进行分割,以--${boundary}--来结束请求体内容。
## 具体可以参考下面例子：
```
POST http://www.example.com HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryyb1zYhTI38xpQxBK
 
------WebKitFormBoundaryyb1zYhTI38xpQxBK
Content-Disposition: form-data; name="city_id"
 
1
 
------WebKitFormBoundaryyb1zYhTI38xpQxBK
Content-Disposition: form-data; name="company_id"
 
2
------WebKitFormBoundaryyb1zYhTI38xpQxBK
Content-Disposition: form-data; name="file"; filename="chrome.png"
Content-Type: image/png
 
PNG ... content of chrome.png ...
------WebKitFormBoundaryyb1zYhTI38xpQxBK--
```
form-data格式一般是用来进行文件上传的。使用表单上传文件时，必须让表单的 enctype 等于 multipart/form-data，因为该值默认值为application/x-www-form-urlencoded。
## FormData对象
XMLHttpRequest Level 2添加了一个新的接口FormData。利用FormData对象，我们可以通过JavaScript用一些键值对来模拟一系列表单控件，我们还可以使用XMLHttpRequest的send()方法来异步的提交这个"表单"
```
var formData = new FormData();
formData.append("username", "Groucho");
formData.append("accountnum", 123456); 
fetch('/users', {
 method: 'POST',
 body: formData
})
```
上面创建了一个FormData对象，通过fetch进行ajax请求时，会自动为其将其转为form-data格式，无需手动添加格式。
## 对象转FormData对象
对于FormDat对象，像上面那种形式可以直接添加参数比较方便，但是对于对象或者嵌套对象：

let userObj = {userName: 'xxx', age: '21'} formData.append('user', userObj)

上面形式添加formData参数user，并不会获取到其真正的内容，而是返回userObj的Object.prototype.toString.call(userObj)的值作为user字段的值。
```
------WebKitFormBoundaryyb1zYhTI38xpQxBK
Content-Disposition: form-data; name="user"
 
[object Object]
```

遗憾的是，FormData对象没有像JSON.stringify那样的方法能批量将对象形式转换为对应的形式，formData而言是将对象的key转换为正确formData请求参数字段名，例如如下对象：
```
var obj = {
  a: '2', 
  b: {c: 'test'}, 
  c: [ 
    {id: 1, name: 'xx'}, 
    {id:2 ,name: 'yy', info: {d: 4} }
  ]
}
```
这样转换为FormData对象时，其对应的key应该是下面这样的：
```
a: 2
b[c]: test
c[][id]: 1
c[][name]: xx
c[][id]: 2
c[][name]: yy
c[][info][d]:4
```
这样，就需要我们自己手动来实现一个转换数据函数，具体代码如下：
```
function objectToFormData (obj, form, namespace) {
 const fd = form || new FormData();
 let formKey;
  
 for(var property in obj) {
   if(obj.hasOwnProperty(property)) {
    let key = Array.isArray(obj) ? '[]' : `[${property}]`;
    if(namespace) {
     formKey = namespace + key;
    } else {
     formKey = property;
    }
    
    // if the property is an object, but not a File, use recursivity.
    if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
     objectToFormData(obj[property], fd, formKey);
    } else {
      
     // if it's a string or a File object
     fd.append(formKey, obj[property]);
    }
     
   }
  }
  
 return fd;
   
}
```
这样，就可以将对象转化为对应的formData的格式了。