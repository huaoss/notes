### 一、数组属性
- constructor	返回创建数组对象的原型函数
- length	设置或返回数组元素的个数
- prototype	允许你向数组对象添加属性或方法
### 二、Array对象方法
#### 1、concat()
```
定义和用法：
用于连接两个或多个数组
该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
语法：
array1.concat(array2,array3,...,arrayX)
```
#### 2、copyWithin()
```
定义和用法：
用于从数组的指定位置拷贝元素到数组的另一个指定位置中
语法：
array.copyWithin(target, start, end)
参数：
target	必需。复制到指定目标索引位置。
start	可选。元素复制的起始位置。
end	可选。停止复制的索引位置 (默认为 array.length)。如果为负值，表示倒数。
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
#### 
```
```
## 一、通过改变数组里元素位置，实现换位、置顶、上移、下移

```
var fieldData=[
    {id:'1',val:'一'},
    {id:'2',val:'二'},
    {id:'3',val:'三'},
    {id:'4',val:'四'},
    {id:'5',val:'五'}
    ];
var index=9;
```
#### 原理：
- unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
- shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
- splice() 方法可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。

#### 1. 两个元素换位：
```
function swapArr(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
}
```
#### 2. 置顶：
```
function toFirst(fieldData,index) {
    if(index!=0){
        fieldData.unshift(fieldData.splice(index , 1)[0]);
    }
}
```
#### 3. up上移一格：
```
function upGo(fieldData,index){
    if(index!=0){
        fieldData[index] = fieldData.splice(index-1, 1, fieldData[index])[0];
    }else{
        fieldData.push(fieldData.shift());
    }
}
```
#### 4. down下移一格：
```
function downGo(fieldData,index) {
    if(index!=fieldData.length-1){
        fieldData[index] = fieldData.splice(index+1, 1, fieldData[index])[0];
    }else{
        fieldData.unshift( fieldData.splice(index,1)[0]);
    }
}
```

## 二、数组拼接
```
var a = [1,2,3,4,5,6];
var b=["foo","bar", "fun"];
// [1,2,3,4,5,6,"foo","bar","fun"]
```
#### 方法1：concat
```
c=a.concat(b);
```
此时c是新数组，此时内存使用有，c,a,b三个数组。
#### 方法2:不使用新数组
```
for(var i=0;i<b.length;i++){
　　a.push(b[i]);
}
b=null;
```
没有新的数组创建，对于内存来说更优。注意到结尾的b=null;拼接完成后将数组b清空。
#### 方法3:apply(推荐）
```
a.push.apply(a,b);
```
#### 方法4:es6的写法（推荐）
```
a.push(...b)；
```

## 三、查找数组中指定元素并返回该元素的所有索引
```
//在数组中查找所有出现的x，并返回一个包含匹配索引的数组
function findall(a, x) {
    var results = [],
        len = a.length,
        pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) { //未找到就退出循环完成搜索
            break;
        }
        results.push(pos); //找到就存储索引
        pos += 1; //并从下个位置开始搜索
    }
    return results;
}
var arr = [1, 2, 3, 1, 4, 1, 4, 1];
findall(arr, 1); //返回[0,3,5,7]
```
## 四、判断数组中是否存在某个对象
1. 判断数组中是否存在某个元素，indexOf存在返回当前索引不存在返回-1
```
var arr=[1,2,3,4]
arr.indexOf(3) // 2
arr.indexOf(5) // -1
```
2. 利用数组API some来判断是否存在某个对象
```
var result = arr.some(item=>{
   if(item.name=='张三'){
      return true 
  } 
})
console.log(result) //如果arr数组对象中含有name:'张三',就会返回true，否则返回false
```


## 1.map
有返回值，返回一个新的数组，每个元素为调用func的结果。
```
let list = [1, 2, 3, 4, 5];
let other = list.map((d, i) => {
  return d * 2;
});
console.log(other);
// print: [2, 4, 6, 8, 10]
```
## 2.filter
有返回值，返回一个符合func条件的元素数组
```
let list = [1, 2, 3, 4, 5];
let other = list.filter((d, i) => {
  return d % 2;
});
console.log(other);
// print: [1, 3, 5]
```
## 3.some
返回一个boolean，判断是否有元素符合func条件，如果有一个元素符合func条件，则循环会终止。
```
let list = [1, 2, 3, 4, 5];
list.some((d, i) => {
  console.log(d, i);
  return d > 3;
});
// print: 1,0 2,1 3,2 4,3
// return false
```
## 4.every
返回一个boolean，判断每个元素是否符合func条件，有一个元素不满足func条件，则循环终止，返回false。
```
let list = [1, 2, 3, 4, 5];
list.every((d, i) => {
  console.log(d, i);
  return d < 3;
});
// print: 1,0 2,1 3,2
// return false
```
## 5.forEach
没有返回值，只针对每个元素调用func。

优点：代码简介。

缺点：无法使用break，return等终止循环。
```
let list = [1, 2, 3, 4, 5];
let other = [];
list.forEach((d, i) => {
  other.push(d * 2);
});
console.log(other);
// print: [2, 4, 6, 8, 10]
```
## 6.for in
for-in循环实际是为循环”enumerable“对象而设计的，for in也可以循环数组，但是不推荐这样使用，for–in是用来循环带有字符串key的对象的方法。

缺点：只能获得对象的键名，不能直接获取键值。
```
var obj = {a:1, b:2, c:3};
for (var prop in obj) {
 console.log("obj." + prop + " = " + obj[prop]);
}
// print: "obj.a = 1" "obj.b = 2" "obj.c = 3"
```
## 7.for of
for of为ES6提供，具有iterator接口，就可以用for of循环遍历它的成员。也就是说，for of循环内部调用的是数据结构的Symbol.iterator方法。

for of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象（比如arguments对象、DOM NodeList对象）、后文的Generator对象，以及字符串。

有些数据结构是在现有数据结构的基础上，计算生成的。比如，ES6的数组、Set、Map都部署了以下三个方法，调用后都返回遍历器对象。

entries

entries() 返回一个遍历器对象，用来遍历[键名, 键值]组成的数组。对于数组，键名就是索引值；对于Set，键名与键值相同。Map结构的iterator接口，默认就是调用entries方法。

keys

keys() 返回一个遍历器对象，用来遍历所有的键名。

values

values() 返回一个遍历器对象，用来遍历所有的键值。

这三个方法调用后生成的遍历器对象，所遍历的都是计算生成的数据结构。
```
// 字符串
let str = "hello";
for (let s of str) {
 console.log(s); // h e l l o
}
// 遍历数组
let list = [1, 2, 3, 4, 5];
for (let e of list) {
  console.log(e);
}
// print: 1 2 3 4 5
// 遍历对象
obj = {a:1, b:2, c:3};
for (let key of Object.keys(obj)) {
 console.log(key, obj[key]);
}
// print: a 1 b 2 c 3
```
说明：对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。

一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
```
// entries
let arr = ['a', 'b', 'c'];
for (let pair of arr.entries()) {
 console.log(pair);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

