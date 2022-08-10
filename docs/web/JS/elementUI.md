# elementUI

### 复制文本到粘贴板

```
copy(data) {
    let url = data
    let oInput = document.createElement('input')
    oInput.value = url
    document.body.appendChild(oInput)
    oInput.select() // 选择对象
    document.execCommand("Copy") // 执行浏览器复制命令
    this.$message({
        message: '复制成功',
        type: 'success'
    })
    oInput.remove()
}

copyLink() {  
    this.copy('https://baidu.com/')
    }
```

### 文件上传与下载

1. 注意一下：上传文件必须为FormData 所以这边New FormData() ，把上传文件的File填进去。
2. 注意一点 打印console.log(FormData.file) 是打印不出来的 ,需要用 到 FormData.get(’’) ！！！！是个坑 是个坑
3. a标签方式
4. 文件流方式



# CDN vue-Element Plus

### 一、默认英文改成中文

将cdn方式改成直接从本地读取js文件，搜索js中对应英文字段修改为中文


#  版本差异一、el-cascader取label（2.7前后对比）
```
<el-cascader :options="options" ref="myCascader" @change="handleSubCat"></el-cascader>

handleSubCat(value) {
    // 获取value值
    console.log(value)
    // 获取label 值
    var labels = this.$refs['myCascader'].currentLabels; // 2.7前
    console.log(labels)
    var label = this.$refs['myCascader'].getCheckedNodes()[0].label; // 2.7及之后
    console.log(label)
},
```
# 二、
