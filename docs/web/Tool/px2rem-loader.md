# 移动端适配：将px转化为rem
## 一、npm 下载lib-flexible
```
npm i lib-flexible --save
```
## 二、main.js中引入lib-flexible
```
import 'lib-flexible/flexible'
```
## 三、通过meta设置设备宽高及缩放比例
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## 四、安装
```
npm install px2rem-loader
```
## 五、配置，在 build中找到until.JS,将px2rem-loader添加到cssLoader中
```
const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }
  const px2remLoader = {
    loader: 'px2rem-loader',
    options: {
      remUnit: 75
    }
  }
  ```
 在generateLoaders方法中添加px2remLoader
 ```
 function generateLoaders (loader, loaderOptions) {
　　const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoader] : [cssLoader, px2remLoader]
if (loader) {
　　loaders.push({
　　loader: loader + '-loader',
　　options: Object.assign({}, loaderOptions, {
　　sourceMap: options.sourceMap
　　})
　　})
　　}

if (options.extract) {
　　return ExtractTextPlugin.extract({
　　use: loaders,
　　fallback: 'vue-style-loader'
　　})
　　} else {
　　return ['vue-style-loader'].concat(loaders)
　　}
}
```
## 六、配置完成需要重启服务
```
npm run dev
```


## 原生js仿jq的$

    function $(Nid){
        return document.getElementById(Nid);
    }