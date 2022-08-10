# 闪现-小程序

## 分享

参数一
- path:`pages/games/games`
- query: `id=${id}&shareType=&{shareType}&shareId=${shareId}`
- scene:`${id}-${shareType}-${shareId}`（拼接时参数为空用0占位，不能错位）

参数二
- id: 业务id
- shareType: b或c
- shareId: shopCode或sxId

app和小程序共用

- 剧本详情
`pages/drama_detail/drama_detail`

- 门店详情
`pages/shop/shop_detail/shop_detail`

- 组局详情
`pages/game_detail/game_detail`

- 门店组局列表
`pages/shop_game/shop_game`

- 优惠券
`pages/ticket_detail/ticket_detail`


小程序单独

- C端首页
- 剧本排行榜
- webview_share


// 维护全局邀请参数，用户新用户注册

```
onLoad(options){
    // 记录分享者，用于拉新
    if (options.shareType && options.shareId) {
        app.globalData.shareInfo = {
            type: shareType,
            id: shareId
        }
    };
}
```

## canvas 2d 异步生成小程序分享图

```
<canvas type="2d" id="canvas"></canvas>

#canvas {
    position: fixed;
    top: -200px;
    left: 0;
    z-index: 1000;
    width: 250px;
    height: 200px;
    background: rgba(0, 0, 0, .5);
}

onShareAppMessage() {
    wx.showLoading()
    const promise = new Promise(resolve => {
        wx.createSelectorQuery()
            .select('#canvas')
            .fields({
                node: true,
                size: true
            })
            .exec((res) => {
                const canvas = res[0].node;
                const ctx = canvas.getContext('2d');
                canvas.width = res[0].width * pixelRatio;
                canvas.height = res[0].height * pixelRatio;
                ctx.scale(pixelRatio, pixelRatio);
                ctx.beginPath();
                ctx.lineWidth = 6;
                ctx.lineCap = "round";
                ctx.strokeStyle = "#686868";
                ctx.arc(125, 100, 97, 0, 2 * Math.PI);
                ctx.stroke();
                wx.canvasToTempFilePath({
                    canvas: canvas,
                    fileType: 'jpg',
                    success(res) {
                        console.log(res.tempFilePath)
                        resolve({
                            imageUrl: res.tempFilePath
                        })
                    },
                    fail(err) {
                        console.log(err)
                    }
                })
                wx.hideLoading()
            })
    })
    return {
        title: '自定义转发标题',
        path: '/page/user?id=123',
        promise
    }
}
```

## useExtendedLib方式使用weui

```
app.json
"useExtendedLib": {
    "weui": true
},
"mp-dialog": "weui-miniprogram/dialog/dialog"
```

## rich-text解析h5标签实现高亮查询

```
<text decode > {{ str }}</text >
    <rich-text nodes="{{str}}"></rich-text>
    <strong style="color:red;">大侠梦</strong>
    <rrr>哈哈哈哈</rrr> 
str: '哈哈哈<span style="color:red;">大侠梦</span>哈哈',
```

## setData赋值

```
"obj.a": "xx",
'Array[0].a'：'99',  //这样也可以只不过Array[0]里的0不能是变量不然会报错
[`Array[${index}].a`]:'99' //es6语法拼接这样index可以为动态的值
```

#### scroll-view 里使用 border-radius 失效

```
transform: translate3d(0, 0, 0);
或
transform: translateX(0);
```

## OSS静态文件夹路径
```
https://oss-aisx-file-service-01.oss-cn-beijing.aliyuncs.com/prd/miniapp/
```

## 生成小程序码

```
// 获取AccessToken
    getAccessToken() {
        const appid = 'wxc93f24ceb238cf5d';
        const secret = '5bff5773f8f758c48aac21884b8ca67c';
        wx.request({
            url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
            method: 'get',
            success: (res) => {
                console.log(res)
                this.getBuffer(res.data.access_token)
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
    // 获取小程序码Buffer对象
    getBuffer(access_token) {
        let that = this;
        let data = {
            // page: 'pages/ticket_detail/ticket_detail',
            scene: '666',
            env_version: 'trial',
            // is_hyaline: true,
            auto_color: true,
            line_color: {
                "r": 145,
                "g": 103,
                "b": 173
            }
            // env_version: 'develop',
        }
        wx.request({
            url: 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' + access_token,
            method: 'POST',
            data: data,
            // dataType: 'json',
            responseType: 'arraybuffer', //将返回数据 按文本解析修改为arraybuffer
            success: function (res) {
                console.log(res)
                // const arrayBuffer = new Uint8Array([11, 22, 33])
                // const base64 = wx.arrayBufferToBase64(res.arrayBuffer)

                // 利用writeFile bese64图片存本地文件使用
                const fs = wx.getFileSystemManager();
                const filePath = `${wx.env.USER_DATA_PATH}/code.png`;

                console.log(filePath)
                fs.writeFile({
                    filePath: filePath,
                    data: res.data,
                    encoding: 'base64',
                    success: (res) => {
                        console.log(res)
                        that.setData({
                            img: filePath
                        })
                    },
                    fail(res) {
                        console.error(res)
                    }
                })
            }
        })
    },
```

## 本地缓存Storage说明
```
用户信息， token过期清空
userInfo: {
    token: '',
    refresToken: '',
    nick: '',
    avatar: '',
    userId: '',
    tel: '',
    sxId: '',
    isV: '',
}

最后一次进B端的店铺信息， 切换手机号冲掉
shopInfo: {
    userId: '',
    shopId: '',
    shopCode: '',
}

最后一次添加剧本的价格，与用户无关
lastAllPrice:'' 
```



requestTask.abort()外部调用无效
```
const app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    const requestTask = wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data)
      }
    })
    requestTask.abort() // 取消请求任务
  },
})
```
