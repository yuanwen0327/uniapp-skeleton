<div align="center">
  <h1>uniapp-skeleton</h1>
</div>

一个命令行工具，能使微信开发者工具中生成的骨架屏在[uni-app](https://github.com/dcloudio/uni-app)中使用。

![骨架屏](https://cdn.jsdelivr.net/gh/yuanwen0327/tuchuang@master/uPic/1609291164860910.gif)

-------------
## 安装

```bash
npm install -g uniapp-skeleton
```
-------------
## 使用

首先在微信开发者工具中生成页面骨架屏  

![生成骨架屏](https://cdn.jsdelivr.net/gh/yuanwen0327/tuchuang@master/uPic/WX20201230-101144.png)

然后在终端的项目目录中执行
```bash
uniapp-skeleton -p "/pages/index/index"
```
`-p`后面的参数为要生成骨架屏的小程序页面的路径，此时会在项目的`/src/pages/index/`目录中生成`index.skeleton.vue`

最后在`index.vue`页面文件中引入改组件即可。

-------------
## 建议

-  开发者工具生成的骨架屏有时候并不完美，需要手动微调
- 可以将生成的骨架屏文件里的单个结构拆分出来使用
  

附上原生小程序骨架屏文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
