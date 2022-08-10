[js-cookie官方文档](https://www.npmjs.com/package/js-cookie)

## 一、安装
```
npm install js-cookie --save
```
## 二、引用
```
import Cookies from 'js-cookie'
```
## 三、一般使用
```
1.存到Cookie去
// Create a cookie, valid across the entire site:
Cookies.set('name', 'value');

// Create a cookie that expires 7 days from now, valid across the entire site:
Cookies.set('name', 'value', { expires: 7 });

// Create an expiring cookie, valid to the path of the current page:
Cookies.set('name', 'value', { expires: 7, path: '' });
```
2.在Cookie中取出
```
// Read cookie:
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined

// Read all visible cookies:
Cookies.get(); // => { name: 'value' }
```
3.删除
```
// Delete cookie:
Cookies.remove('name');

// Delete a cookie valid to the path of the current page:
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // fail!
Cookies.remove('name', { path: '' }); // removed!
```
## 四、特殊使用（在Cookie中存对象）
跟一般使用不同的是，从Cookie中取出的时候，要从字符串转换成json格式：
```
const user = {
  name: 'lia',
  age: 18
}
Cookies.set('user', user)
const liaUser = JSON.parse(Cookies.get('user'))
```
