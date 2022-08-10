
# Github响应时间过长

### 概念了解

TTL值：TTL是 Time To Live的缩写，该字段指定IP包被路由器丢弃之前允许通过的最大网段数量。TTL是IPv4报头的一个8 bit字段。

注意：TTL与DNS TTL有区别。二者都是生存时间，前者指ICMP包的转发次数（跳数），后者指域名解析信息在DNS中的存在时间。

### 检测github.com TTL值最小的IP

 打开站长工具```http://tool.chinaz.com/dns```, 在DNS检测中输入github.com, 点击 “检测”，将检测结果列表中TTL值最小的IP 和域名 github.com 一起 添加到hosts里, 如: 192.30.255.112 github.com

