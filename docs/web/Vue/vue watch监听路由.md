```
// watch: {
    //     $route(to, from) {
    //         console.log(to.path);
    //         console.log(from.path);
    //     }
    // },
    // 修改写法
    watch: {
        '$route.path': {
            immediate: true,
            handler(newV, oldV) {
                // console.log("query", this.$route.query);
                // console.log(newV);
                // console.log(oldV);
                if (newV == '/shop_import' && !oldV) {
                    let {
                        source,
                        shopId,
                        token
                    } = this.$route.query;
                    this.source = +source;
                    this.shopId = shopId;
                    window.localStorage.setItem("token", token)
                    switch (this.source) {
                        case 1: // 微信
                            this.steps = ['基本信息', '营业执照', '身份证件', '结算账户']
                            break;
                        case 2: // 支付宝
                            this.steps = ['基本信息', '营业执照', '身份证件']
                            break;
                    }
                    this.getInfo()
                }
            }
        }
    },
```