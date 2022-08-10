
SNKRS PLUS
一期：
首页
	banner
	最近一期抽签
	所有抽签活动按钮
所有列表
抽签详情（只做二抽）


发现
公众号文章列表
web-view页面


消息
引导关注服务号

我的
微信头像昵称

我参与的抽签

隐藏功能 管理员入口
管理员17600972245
店铺管理员、创建新活动、验卷、活动管理
最新活动
    活动名、活动状态、
    活动数据：最大中签数、报名人数、已中签数、已核销数
    人员列表页

页面梳理：
1、home
2、discover
3、message
4、mine

5、lottery_list
6、lottery
7、web_view
8、real_name
9、mine_lottery
分包：
1、staff_home
2、staff_list
3、lottery_list
4、lottery_add
5、ticket
6、user_list


活动状态：未上线1、未开始2、已开始报名3、已结束报名4、结束后抽签中（半小时抽签时间）5、抽签结果6、未中签7、已中签8、已核销9
c端按钮：
1、未开始->显示倒计时
2、已开始->显示报名按钮
3、已报名->显示等待开奖中、开奖时间xx
4、已开奖->未中；已中奖待核销（文案：恭喜中签）、查看核销码
5、已中奖已核销->显示已核销
6、已结束未报名->已结束
报名按钮可点击，查看中签码下划线文案可点击
b端活动状态：未上线、未开始、已开始、已结束

活动JSON
时间统一用时间戳

[
    {
        _id:'',
        _openId:'',
        cover:'',
        title:'',
        price:'',
        onlineTime:'',// 
        startTime:'',
        endTime:'',
        desc:'',
        rule:'',
        status:0,
    }
]

云函数C：
1、openId
本地没有openId的时候，在onload里await openId
openId:'',// storage
2、userInfo
入参openId
返回
userInfo:{
    userId:'',
    realName:'',
    idCard:'',
    phone:'',
    isStaff:true
}
3、lotteryList
入参openId、page、size
返回活动列表
4、lotteryDetail
入参openId、lotteryId
5、lotteryIn 
入参openId、lotteryId
6、articleList
入参openId、page、size
返回公众号文章列表


接口B：






二期：
是否关注服务号、订阅消息
openId加密成token
登录过期及等待
身份登记（实名认证收费引导）
请求鉴权、接口加密、防抓包
订阅提前15分钟通知
订单、购买、地址、分享、助力、城市、店铺
全部活动
    总活动数、总用户数、总中签人次、总核销人次、
    最近一周增长
    核销码已过期