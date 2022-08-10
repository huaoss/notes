## grid和flex布局区别

grid和flex区别是什么？
Flexbox 是一维布局系统，适合做局部布局，比如导航栏组件。
Grid 是二维布局系统，通常用于整个页面的规划。
二者从应用场景来说并不冲突。虽然 Flexbox 也可以用于大的页面布局，但是没有 Grid 强大和灵活。二者结合使用更加轻松。
flex 布局和 Grid 布局有实质的区别，那就是 flex 布局是一维布局，Grid 布局是二维布局。flex 布局一次只能处理一个维度上的元素布局，一行或者一列。Grid 布局是将容器划分成了“行”和“列”，产生了一个个的网格，我们可以将网格元素放在与这些行和列相关的位置上，从而达到我们布局的目的。

7. 对Flex布局的理解及其使用场景
  简单来说： flex布局是CSS3新增的一种布局方式，可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。一个容器默认有两条轴：一个是水平的主轴，一个是与主轴垂直的交叉轴。可以使用flex-direction来指定主轴的方向。可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还可以使用flex-wrap来规定当一行排列不下时的换行方式。对于容器中的项目，可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，项目的放大比例，还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。

以下6个属性设置在容器上：

flex-direction属性决定主轴的方向（即项目的排列方向）。
flex-wrap属性定义，如果一条轴线排不下，如何换行。
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
justify-content属性定义了项目在主轴上的对齐方式。
align-items属性定义项目在交叉轴上如何对齐。
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
以下6个属性设置在项目上：

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
Grid 布局即网格布局
Grid 布局即网格布局，是一种新的 CSS 布局模型，比较擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系。号称是最强大的的 CSS 布局方案，是目前唯一一种 CSS 二维布局。利用 Grid 布局，



## 动画性能优化

https://zhuanlan.zhihu.com/p/367128527

https://blog.csdn.net/u011140116/article/details/122898455

哪些属性不会触发回流



## gpu加速

[CSS3](https://so.csdn.net/so/search?q=CSS3&spm=1001.2101.3001.7020)为咱们开发动画效果大大提升了效率，但有些动画效果，如果涉及的DOM元素比较多，会发现有“卡卡”的感觉，为动画DOM元素添加CSS3样式 -webkit-transform:transition3d(0,0,0)或-webkit-transform:translateZ(0) ，这两个属性都会开启GPU硬件加速模式，从而让浏览器在渲染动画时从CPU转向GPU，其实说白了这是一个小伎俩，也可以算是一个Hack， -webkit-transform:transition3d 和 -webkit-transform:translateZ 其实是为了渲染3D样式，但我们设置值为0后，并没有真正使用3D效果，但浏览器却因此开启了GPU硬件加速模式。

这种[GPU](https://so.csdn.net/so/search?q=GPU&spm=1001.2101.3001.7020)硬件加速在当今PC机及移动设备上都已普及，在移动端的性能提升是相当显著地，所以建议大家在做动画时可以尝试一下开启GPU硬件加速。

当然也可以这样开启所有浏览器的GPU硬件加速：

[webkit](https://so.csdn.net/so/search?q=webkit&spm=1001.2101.3001.7020)-transform: translateZ(0);

-moz-transform: translateZ(0);

-ms-transform: translateZ(0);

-o-transform: translateZ(0);

transform: translateZ(0);

或者

webkit-transform: translate3d(0,0,0);

-moz-transform: translate3d(0,0,0);

-ms-transform: translate3d(0,0,0);

-o-transform: translate3d(0,0,0);

transform: translate3d(0,0,0);

TIPS:通过 -webkit-transform:transition3d/translateZ 开启GPU硬件加速之后，有些时候可能会导致浏览器频繁闪烁或抖动，可以尝试以下办法解决之：

-webkit-backface-visibility:hidden;

-webkit-perspective:1000;