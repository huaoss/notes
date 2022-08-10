### 1、全局安装pm2
```
npm install -g pm2
```
### 2、输入 pm2 -v 后报错 pm2: command not found 解决方法
```
ln -s /usr/local/nodebox/nodejs/lib/node_modules/pm2/bin/pm2 /usr/local/bin

如果提示：ln: creating symbolic link `/usr/local/bin/pm2': File exists
则使用：mv /usr/local/bin/pm2 /tmp/ 
删除就好  然后再次执行npm install -g pm2就OK了

```
### 启动
```
pm2 start app.js --name test
```
### 显示所有进程状态

pm2 list
### 显示所有进程日志

pm2 logs
### 查看启动的进程

ps -ef|grep pm2
### 停止所有进程

pm2 stop all