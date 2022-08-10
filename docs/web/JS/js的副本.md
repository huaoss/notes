## 实现点击li标签弹出索引

    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            <ul id="list">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <script type="text/javascript">
                window.onload = function() {
                    //获取所有的li标签
                    // var list = document.getElementById('list').children;
                    // 推荐使用querySelectorAll方法获取
                    var list = document.querySelectorAll('#list>li');

                    // 方法一：使用setAttribute、getAttribute，直接往标签里添加索引
                    // for (var i = 0, len = list.length; i < len; i++) { //遍历每一个li标签
                    //     list[i].setAttribute('index', i); //给每一个li标签添加索引
                    //     list[i].onclick = function() {
                    //         alert(this.getAttribute('index')); //获取添加的li标签的元素值
                    //     }
                    // };

                    // 方法二：使用闭包
                    for (var i = 0, len = list.length; i < len; i++) { //遍历每一个li标签
                        function outer() {
                            var num = i;
                            function inner() {
                                alert(num);
                            }
                            return inner;
                        }
                        list[i].onclick = outer(); //给每一个li标签注册单击事件
                    };
                }
            </script>
        </body>
    </html>


## js添加和删除属性

    // 添加
    var obj= {}
    obj.address="shenzhen"

    // 删除
    var obj= {
        height: 180,
        long: 180,
        weight: 180,
        hobby: {
            ball: 'good',
            music: 'nice'
        }
    }
    delete obj.hobby 已声明的对象不可删除, 对象中的对象属性可以删除


## 函数柯里化Currying

- 参数复用

        // 正常正则验证字符串 reg.test(txt)

        // 函数封装后
        function check(reg, txt) {
            return reg.test(txt)
        }

        check(/\d+/g, 'test')       //false
        check(/[a-z]+/g, 'test')    //true

        // Currying后
        function curryingCheck(reg) {
            return function(txt) {
                return reg.test(txt)
            }
        }

        var hasNumber = curryingCheck(/\d+/g)
        var hasLetter = curryingCheck(/[a-z]+/g)

        hasNumber('test1')      // true
        hasNumber('testtest')   // false
        hasLetter('21212')      // false

- 提前确认
- 延迟运行

curry的一些性能问题你只要知道下面四点就差不多了：

- 存取arguments对象通常要比存取命名参数要慢一点
- 一些老版本的浏览器在arguments.length的实现上是相当慢的
- 使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
- 创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上

其实在大部分应用中，主要的性能瓶颈是在操作DOM节点上，这js的性能损耗基本是可以忽略不计的，所以curry是可以直接放心的使用。

题：

    // 实现一个add方法，使计算结果能够满足如下预期：
    add(1)(2)(3) = 6;
    add(1, 2, 3)(4) = 10;
    add(1)(2)(3)(4)(5) = 15;

    function add() {
        // 第一次执行时，定义一个数组专门用来存储所有的参数
        var _args = Array.prototype.slice.call(arguments);

        // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
        var _adder = function() {
            _args.push(...arguments);
            return _adder;
        };

        // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }
        return _adder;
    }

    add(1)(2)(3)                // 6
    add(1, 2, 3)(4)             // 10
    add(1)(2)(3)(4)(5)          // 15
    add(2, 6)(1)                // 9



## prototype

## web防扒

- 禁用浏览器右键
- 监听键盘事件
- 检测控制台
- 鼠标点击事件
- 禁止保存
- css禁止左键右键