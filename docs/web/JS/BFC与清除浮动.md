BFC

BFC：块级格式化上下文

BFC的布局规则

内部的Box会在垂直方向，一个接一个地放置。
Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
计算BFC的高度时，浮动元素也参与计算。
BFC的区域不会与float box重叠。
每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。 
如何创建BFC

1、 float 的值不是 none 。

2、 position 的值不是 static 或者 relative 。

3、 display 的值是 inline-block 、 table-cell 、 flex 、 table-caption 或者 inline-flex
4、 overflow 的值不是 visible

BFC的作用

1.利用BFC避免margin重叠。

2.自适应两栏布局

3.清除浮动。

清除浮动

清除浮动主要是为了解决，父元素因为子级元素浮动引起的内部高度为0的问题。

清除浮动的方法

1. 额外标签法

在最后一个浮动标签后，新加一个标签，给其设置clear：both；(不推荐)

优点：通俗易懂，方便

缺点：添加无意义标签，语义化差

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
<style>
        .div1 {
            background: #00a2d4;
        }
        .left {
            float: left;
            width: 200px;
            height: 200px;
            background: #9889c1;
        }
        .right {
            float: right;
            width: 200px;
            height: 200px;
            background: orangered;
        }
        .clear {
            clear: both;
        }
    </style>
</head>
<body>
<div class="div1">
    <div class="left">Left</div>
    <div class="right">Right</div>
    <div class="clear"></div>
</div>
<div class="div2"></div>
</body>
2.父级添加overflow属性

通过触发BFC方式，实现清除浮动。（不推荐）

优点：代码简洁

缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .div1 {
            background: #00a2d4;
            overflow: hidden;
        }
        .left {
            float: left;
            width: 200px;
            height: 200px;
            background: #9889c1;
        }
        .right {
            float: right;
            width: 200px;
            height: 200px;
            background: orangered;
        }
    </style>
</head>
<body>
<div class="div1">
    <div class="left">Left</div>
    <div class="right">Right</div>
</div>
<div class="div2"></div>
</body>
</html>
3.使用after伪元素清除浮动（推荐使用）

优点：符合闭合浮动思想，结构语义化正确。

缺点：ie6-7不支持伪元素：after，使用zoom:1触发hasLayout。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .div1 {
            background: #00a2d4;
        }
        .left {
            float: left;
            width: 200px;
            height: 200px;
            background: #9889c1;
        }
        .right {
            float: right;
            width: 200px;
            height: 200px;
            background: orangered;
        }
        .clearfix:after {
            content: ""; /*内容为空*/
            display: block; /*转换为块级元素*/
            height: 0; /*高度为0*/
            clear: both; /*清除浮动*/
            visibility: hidden; /*隐藏盒子*/
        }
        .clearfix {
            *zoom: 1; /*IE6\7的处理方式*/
        }
    </style>
</head>
<body>
<div class="div1 clearfix">
    <div class="left">Left</div>
    <div class="right">Right</div>
</div>
<div class="div2"></div>
</body>
</html>
4.使用before和after双伪元素清除浮动

优点：不仅可以清除浮动，也可以解决高度塌陷的问题（给父盒子添加类名clearfix）

缺点：用zoom:1触发hasLayout.

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .div1 {
            background: #00a2d4;
        }
        .left {
            float: left;
            width: 200px;
            height: 200px;
            background: #9889c1;
        }
        .right {
            float: right;
            width: 200px;
            height: 200px;
            background: orangered;
        }
        .clearfix:after, .clearfix:before {
            content: "";
            display: table;
        }
        .clearfix:after {
            clear: both;
        }
        .clearfix {
            *zoom: 1;
        }
    </style>
</head>
<body>
<div class="div1 clearfix">
    <div class="left">Left</div>
    <div class="right">Right</div>
</div>
<div class="div2"></div>
</body>
</html>