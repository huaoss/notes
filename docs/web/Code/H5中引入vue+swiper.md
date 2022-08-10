```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0">
    <title>HTML引入vue和Swiper的测试</title>
    <!-- 引入 Vue，使用到vue，必须先引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
    <!-- 引入babel-polyfill es6转es5 -->
    <script src="https://cdn.bootcss.com/babel-polyfill/7.8.3/polyfill.min.js"></script>
    <!-- 引入 Swiper -->
    <link href="https://cdn.bootcss.com/Swiper/4.5.1/css/swiper.min.css" rel="stylesheet">
    <script src="https://cdn.bootcss.com/Swiper/4.5.1/js/swiper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-awesome-swiper@3.1.3/dist/vue-awesome-swiper.min.js"></script>
    <!-- 内部样式 -->
    <style type="text/css">
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        .app-view-wrapper {
            width: 100%;
            height: 100%;
        }

        .wrapper-swiper-container {
            height: 100%;
            width: 100%;
        }
    </style>
    <!-- 小屏幕处理 -->
    <script>
        // 设置fontSize
        initFontSize()
        // 变化的时候，修改fontSize
        window.onresize = () => {
            initFontSize()
        }
        function initFontSize() {
            var html = document.getElementsByTagName("html")[0];
            const cw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            // 375 -> fontSize = 16px
            html.style.fontSize = cw / 375 * 16 + 'px';
        }
    </script>
</head>
<body>
    <div id="app" class="app-view-wrapper">
         <!-- 完全的vue里面的写法 -->
        <swiper class="wrapper-swiper-container" :options="swiperOption">
            <swiper-slide style="background: red;">Slide 1</swiper-slide>
            <swiper-slide style="background: rebeccapurple;">Slide 2</swiper-slide>
            <swiper-slide style="background: rosybrown;">Slide 3</swiper-slide>
            <swiper-slide style="background: white;">Slide 4</swiper-slide>
            <swiper-slide style="background: wheat;">Slide 5</swiper-slide>
        </swiper>
    </div> 
</body>
<script>
    // 这样才能使用 Swiper
    Vue.use(window.VueAwesomeSwiper)
    new Vue({
        el: '#app',
        data() {
            return {
                swiperOption: {
                    direction: 'vertical',
                    slidesPerView: 1,
                    centeredSlides: true   
                }
            }
        },

        // created函数
        created() {
        },
        // 方法
        methods: {
        }
    });

    // 处理移动端的点击双击放大
    window.onload = function () {
        // 阻止双击放大
        var lastTouchEnd = 0;
        document.addEventListener('touchstart', function (event) {
            if (event.touches.length > 1) {
                event.preventDefault();
            }
        });
        document.addEventListener('touchend', function (event) {
            var now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        // 阻止双指放大
        document.addEventListener('gesturestart', function (event) {
            event.preventDefault();
        });
    };
</script>
</html>
```
