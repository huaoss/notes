# Mac修改hosts文件

### 步骤：

1. 打开编辑界面：```sudo vim /etc/hosts```
2. 进入编辑模式：insert
3. hosts格式：ip+空格+域名 （# 后边是备注）
4. 退出编辑模式：esc
5. 保存修改：shift + ```:wq```
6. 查看：```cat /etc/hosts```

### 踩坑：

报错 ```Found a swap file by the name "/etc/.hosts.swp"``` 使用vi 操作txt文件时出现了异常中断，所以在当前目录下产生了一个 .swp 结尾的隐藏文件

解决：使用 ```ls -a``` 命令查看该隐藏文件，```:q!``` 不保存退出vi文件，```sudo rm -f /etc/.hosts.swp``` 将该隐藏文件删除

