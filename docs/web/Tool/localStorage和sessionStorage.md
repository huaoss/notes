### 检查浏览器是否支持localStorage和sessionStorage：

```
if(typeof(Storage)!=="undefined")
{
    // 是的! 支持 localStorage  sessionStorage 对象!
    // 一些代码.....
} else {
    // 抱歉! 不支持 web 存储。
}
```
保存数据：localStorage.setItem(key,value);  
读取数据：localStorage.getItem(key);  
删除单个数据：localStorage.removeItem(key);  
删除所有数据：localStorage.clear();  
得到某个索引的key：localStorage.key(index);  
