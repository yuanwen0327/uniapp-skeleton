<div align="center">
  <h1>uniapp-skeleton</h1>
</div>

能在[uniapp](https://github.com/dcloudio/uni-app)中使用微信开发者工具生成的骨架屏的命令行工具。


<h2 align="center">安装</h2>

```bash
npm install -D uniapp-skeleton
```

<h2 align="center">使用</h2>
首先在微信开发者工具中生成页面骨架屏

然后在终端的项目目录中执行
```bash
uniapp-skeleton -p "/pages/index/index"
```
-p后面的参数为要生成骨架屏的小程序页面的路径，此时会在项目的`/src/pages/index/`目录中生成`index.skeleton.vue`

最后在`index.vue`页面文件中引入即可。

<h2 align="center">注意</h2>

-  开发者工具生成的骨架屏有时候并不完美，需要手动微调
- 可以将生成的骨架屏文件里的单个结构拆分出来使用
  



附上小程序骨架屏文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html

