## 可以用伪类增加可点击区域
    #btn::before{
        content:'';
        position:absolute;
        top:-20px;
        right:-20px;
        bottom:-20px;
        left:-20px;
    }

## 平滑滚动属性

    scroll-behavior:smooth;

## 选择所有文本

    user-select:all;


## transform-origin: x-axis y-axis z-axis;
```

值	描述
x-axis	
定义视图被置于 X 轴的何处。可能的值：

left
center
right
length
%
y-axis	
定义视图被置于 Y 轴的何处。可能的值：

top
center
bottom
length
%
z-axis	
定义视图被置于 Z 轴的何处。可能的值：

length
```


## px2vw

1. PostCSS 插件
> $ npm install @moohng/postcss-px2vw --save-dev

2. less/sass minx 

## css选择器

- ‘+’是指紧跟在后面的某同级元素
- ‘~’是指某些同级元素

## css画三角形

## css隐藏滚动条

    .element::-webkit-scrollbar { display: none;}

    /* IE 10+ */
    .element { -ms-overflow-style: none; }

    /* Firefox */
    .element { overflow: -moz-scrollbars-none; }

## 常用字体

> // 简书
> font-family: "lucida grande", "lucida sans unicode", lucida, helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;


## css层叠样式
```
<style> 
.classA { color:blue; } 
.classB { color:red;}
</style>
<p class="classB classA">hello</p> // hello现实为红色
````

### display:none;
用来创建不占据页面空间的不可见元素：不占用空间
### visibility:hidden;
visibility 属性规定元素是否可见：占用空间
### opacity:0;
占用空间，保留元素上绑定的事件

- display:none不会渲染图片，visibility:hidden和opacity:0会渲染图片
- vue中v-if是将dom元素动态的添加或删除；v-show则是为该元素添加display:none属性，dom元素还存在于页面中


# Css粘性属性

```
<div class="container">
        <div class="sticky-box">内容1</div>
        <div class="sticky-box">内容2</div>
        <div class="sticky-box">内容3</div>
        <div class="sticky-box">内容4</div>
    </div>
```

```
.container {
            background: #eee;
            width: 600px;
            height: 1000px;
            margin: 0 auto;
        }

        .sticky-box {
            position: -webkit-sticky;
            position: sticky;
            height: 20px;
            margin-bottom: 10px;
            background: #ff7300;
            top: 10px;
        }

        div {
            font-size: 12px;
            text-align: center;
            color: #fff;
            line-height: 20px;
        }
```

