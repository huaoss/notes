# npm使用

npm仓库默认地址：https://registry.npmjs.org/

淘宝镜像地址：http://registry.npm.taobao.org/

查看当前仓库：`npm config get registry`

设置仓库：`npm config set registry http://registry.npm.taobao.org/`

每次执行命令前加入`-registry`指定仓库路径：`npm --registry https://registry.npm.taobao.org install`

恢复默认镜像：`npm config delete registry`

注意：
cnpm不支持package-lock.json，使用 cnpm install package-lock.json锁定版本不起作用，如需锁定版本则使用npm install
