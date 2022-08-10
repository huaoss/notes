## mac上配置Apache服务器

1. 在User下新建sites文件夹 Macintosh HD > 用户 > 你的电脑名
2. 找到配置文件，给原来文件备份 
   
    // 切换工作目录
    > $cd /etc/apache2

    //  备份文件，以防不测，只需要执行一次就可以了
    > $sudo cp httpd.conf httpd.conf.bak

    // 如果后续操作出现错误, 恢复备份过的 httpd.conf 文件
    > $sudo cp httpd.conf.bak httpd.conf

3. 修改配置文件

    // 用vim编辑httpd.conf

    >$sudo vim httpd.conf

    // 查找DocumentRoot  

    >/DocumentRoot

    按下 i 进入编辑模式

    可以看到有两个路径 把他们都改成你刚才建的那个sites 文件夹的路径

      DoucmentRoot "/Users/xx/sites"
      <Directory ""/Users/xx/sites"">

    再查找php
    >/php

    定位到
      LoadModule php7_module libxec/apache2/libphp.so
    把前边的“#”删掉

    查找Options 输入/Options 也可以目测自己找到图中的位置，在Options和Follow之间增加一个  `Indexes`

    改好之后先按下esc键退出编辑模式，再输入:wq 保存并退出 如果打错了不想保存就是 :q!

4. 收尾工作与确认成功

//切换到工作目录

$cd /etc

//拷贝配置文件

$sudo cp php.ini.default php.ini

// 重新启动apache服务器 之后下面说这句话是正常的

$sudo apachectl -k restart

5. 再确认下到底成功了没有，就到浏览器里输入localhost如果能来到index of界面就对了


MAC




* 打开信任任何来源：sudo spctl --master-disable ;关闭信任任何来源：sudo spctl --master-enable；
* root directory，根目录，/
* home directory，家目录或users账户名，~
* working directory，当前目录， .
* parent directory，上级目录， ..
* * 匹配任意符 任意次
* ？ 匹配任意符一次
* pwd 显示当前目录的绝对路径
* ls 展示当前目录内容（不包括隐藏文件） ls -a，ls -A
* cd 查找目录 desktop， ~/desktop，cd..
* rmdir 移除目录（目录必须为空）
* cp 复制 source_file target_file， ...target_directory
* mv 移动文件到source file，...directory
* rm 移除文件不能移除目录
* touch 如果文件不存在，那么创建文件
* open 打开文件或则目录
* sudo 以管理员身份执行一次命令




macOS快捷键

* Command+Shift+. 显示、隐藏文件
* 窗口最小化：command➕m
* 隐藏当前窗口：command➕h
* 关窗口：command➕w
* 退出程序：command➕q
* ctrl + command + F   代码格式化
* command➕tab
* command+shift+3 捕捉所有屏幕；捕捉后可编辑
* command+shift+4 捕捉区域
* command+shift+control+3 捕捉后拷贝
* command+shift+5 录制屏幕



SnailSVN：

1. 在Apple Store下载SvnSnail： Lite版本（需输入apple id）
2. 打开SnailSVN
3. 点击General，打开系统设置（Open System Preference），勾上SnailSVNLite: Finder Extensions
4. 点击SVN Settings，选择paths
5. 创建.ssh路径，先打开终端Terminal，然后输入 mkdir .ssh，创建完成后就可以paths中选择你刚刚创建的.ssh，再依次选择bin以及Applications路径。/Users/xxx/.ssh, /urs/local/bin， /Applications
6. 新建一个文件夹svn-workspace作为工作路径
7. 点击SnailSVN Lite左上角的File->Svn Checkout，输入SVN的Url，检出项目的路径svn-workspace，点击确定，弹出验证框，输入帐号密码即可。
8. 结束

GitHUb Desktop：



命令行：
git log 查日志，q退出日志



提示：
1. 多用客户端和工具，少用命令行，除非在Linux上直接开发
2. 每次提交前，diff自己的代码，以免提交错误的代码
3. 每天下班前，整理好自己的工作区
4. 并行的项目，使用分支开发
5. 遇到冲突时，搞明白冲突的原因，千万不要随意丢弃别人的代码
6. 产品发布后，记得打tag，方便将来拉分支修bug

