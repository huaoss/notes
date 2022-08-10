## 一.getElementsByClassName()
- 其返回值是一个伪数组（元素集合），是通过索引来访问数组中的每一个元素的。
- 可以通过length属性来得到元素的个数。
```
<ul>
    <li class="map1" id="map2"></li>
    <li class="map1"></li>
    <li></li>
</ul>
 
<script>
     //获取所有class选择器为map1的元素，并将返回值赋给map
    //即此时的map就是一个伪数组
    var map=document.getElementsByClassName("map2");
    
    console.log(map.length);//打印出maps数组的元素个数
    
    for(var i=0;i<map.length;i++)//循环遍历每一个元素
    {
        console.log(map[i]);//通过过索引访问
    }
 
</script>
```
## 二.querySelector()
- querySelector() 方法返回文档中匹配指定 CSS选择器的一个元素。可以是class选择器、id选择器、标签选择器等。
- 需要注意的是：querySelector()方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用querySelectorAll() 方法替代。而querySelectorAll()方法的返回值是一个伪数组，具体用法和getElementsByClassName()方法类似。
```
<ul>
    <li class="map1" id="map2"></li>
    <li class="map1"></li>
    <li></li>
</ul>
<script>
    //获取标签选择器为ul的元素
    var ul1=document.querySelector("ul");
 
    //获取id选择器为map2的元素
    var a1=document.querySelector("#map2");
 
 
    //获取class选择器为map1的元素
    //且为第一个li元素
    var a2=document.querySelector(".map1");
 
 
  //获取class选择器为map1的所有元素
    var a3=document.querySelectorAll(".map1");
    for(var i=0;i<a3.length;i++)//循环遍历每一个元素
    {
        console.log(a3[i]);//通过过索引访问
    }
 
    console.log(a1);
    console.log(a2);
</script>
```