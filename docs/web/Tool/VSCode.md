# 识别 wxml和wxss文件

1. ctrl+, 打开设置

2. 打开转换文件图标

3. 配置：

   ```
   "files.associations": {
       "*.wxml": "html",
       "*.wxss": "css",
   }
   ```

## 小程序中使用sass

1. 下载Easy Sass
2. 配置setting.json里的 easysass.formats

```
"easysass.formats": [   
     {
        "format": "compressed",
        "extension": ".wxss"  // 小程序需要的是wxss文件
      }
 ]
```

1. 注意：

   文件夹下只需新建一个`*.scss`文件，保存后会自动生成`*.wxss`。
   `1. 新建demo.scss保存后，自动生成demo.wxss`

   代码样式必须写在`*.scss`文件中。
   `1. 点击保存后demo.scss文件中代码会自动同步编译在demo.wxss中。`
   `2. 直接在demo.wxss写的代码,保存后会被demo.scss代码重制`

   只能在`vsCode`中编译`*.scss`文件，小程序开发者工具不支持

   `*.scss`文件不会被小程序打包

