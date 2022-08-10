1. 修改node_modules/axios/lib/default.js中transformResponse：
```
transformResponse: [function transformResponse(data) {
    // console.log('11111',data);
    // console.log('22222',typeof data);
    /*eslint no-param-reassign:0*/
    // if (typeof data === 'string') {
    //   try {
    //     data = JSON.parse(data);
    //   } catch (e) { /* Ignore */ }
    // }
    return data;
  }],
```
2. 封装long转string方法
```
// 过滤接口返回值里所有16到20位的连续数字，在数字两边添加双引号
function long2string(text) {
  const reg = /: *\d{16,20} */g;
  text = text.toString().replace(reg, function(a) {
    return a.replace(/: */g, ":\"").replace(" ", "") + "\"";
  });
  return text;
}
```
由于不能过滤出数组内的long，修改如下：
```
// 过滤以 [,: 中任意一个开头的，16位以上的数字串，在数字串两边加 "
function long2string(text) {
  // console.log('text', typeof text, text)
  const reg = /[\[,:]\d{16,}/g;
  text = text.replace(reg, a => {
    return a.slice(0, 1) + '"' + a.slice(1) + '"';
  });
  return text;
};
```



3. 增加返回拦截器过滤接口返回值