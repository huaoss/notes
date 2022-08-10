# vue-cli 注意事项汇总
## 一、assets 和 static 
相同点：资源在html中使用，都是可以的；  
不同点：assets会被webpack重编译，路径会变；static不会编译，只是在dist中复制一遍；所以在js中使用assets资源时需要使用require才行；如下：
````
<div id="hook">
    <p>直接使用路径</p>
    <img src="../../assets/11.png" alt="图片加载失败" title="assets中的图片">
    <img src="../../../static/11.png" alt="图片加载失败" title="static中的图片">
    <br>
    <p>动态绑定路径</p>
    <img :src="assetsURL" alt="图片加载失败" title="assets中的图片">
    <img :src="staticURL" alt="图片加载失败" title="static中的图片">
</div>

data (){
    return {
         assetsURL: require('../../assets/11.png'),
         staticURL: '../../../static/11.png'
    }
}
````
建议：static中放外部第三方，自己的到assets；
## 二、sass-loader报错 Module build failed this.getResolve is not a function
sass-loader 的版本太高适当降低即可，找到package.json文件修改8.0.0为7.3.1之后重新install即可
## 三、vue构建项目npm install错误run `npm audit fix` to fix them, or `npm audit` for details...
```
npm audit fix
npm audit fix --force
npm audit
```
## 四、vue eslint开发 关掉 tab错误提示
找到vue 项目中的 .eslintrc.js , 在rules 中 添加
```
'no-tabs': 0,
'no-mixed-spaces-and-tabs': 0,
'indent': ["off", "tab"],
'no-trailing-spaces': 0,
```
```
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': ["off", "tab"],
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,
    "eqeqeq": 0
  }
}
```
## 五、在组件中使用v-for时，key是必须的
```
v-for="(item,index) in list" :key=""
```
## 六、vue第三方组件样式无法覆盖
1、内联样式

2、定义独立id或class，单独写无scope的新共用的scss
## 七、在vue项目中升级更新element ui版本
```
卸载旧版：npm uninstall element-ui
重新安装：npm i element-ui -S
PS：旧版中import 'element-ui/lib/theme-chalk/index.css' 中路径theme-chalk可能是default，需要改过来
```
## 八、