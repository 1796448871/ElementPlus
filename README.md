# 项目介绍
## ElementPlus
参考视频 BV1c142117Fz 学习Vue—ts开发
MYVue是VUE3开发
MYVue-Ts是Vue和Ts开发

# 使用介绍：
访问 https://1796448871.github.io/ElementPlus/ 即可到达本项目,
访问顺序如下：
index.html 或 index.htm：作为目录的默认首页显示。
README.md：如果index.html不存在，Markdown文件将被渲染为HTML显示。
其他文件：按照文件类型和路径直接访问或显示。
## 另
想访问内部项目,就如同本地路径一般 '/文件名' 就可以了

# 其他：
测试CodeSpaces,云开发,Vscode-Codespaces没网打不开

# Project使用
## server
新的环境中，需要先再到server文件夹中 npm i
然后就可以npm run dev
但是注意,后端似乎有问题,出一次错误可能导致服务器无法访问？
### 密钥存储(Important)
在Project/server/.env  (没有则创建)
中写MONGODB_URI=mongodb://localhost:27017/currencyeg
或是MONGODB_URI=你的服务器MONGODB地址(不用引号)

如果你不需要密钥存储,在Project\server\src\app.ts中直接写你的MONGODB地址即可

## client

### 代码提示缺失?
安装下面的包,能解决部分问题
```bash
npm install typescript @types/node @types/axios --save-dev
```
在 client 上一级目录, 如 myApp 输入(就可以自动创建出client文件夹)

```bash
npm create vite@latest client -- --template vue-ts
```

然后`cd client`, 并且输入

```bash
npm i
```


# 暂无打包