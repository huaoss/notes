# Homebrew使用

### 官方地址安装

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

报错：```curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to raw.githubusercontent.com:443 ```

### 解决办法：使用国内源

```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

注：如果国内源报GitHub错，修复GitHub响应时间过长问题后再试

注：安装成功后重启终端窗口

### 一些brew命令

```
本地软件库列表：brew ls
查找软件：brew search google（其中google替换为要查找的关键字）
查看brew版本：brew -v 
更新brew版本：brew update
安装cask软件：brew install --cask firefox（把firefox换成你要安装的）

```

