# 中国色

一个用于展示与查阅中国传统颜色的网站。

## 起源

最初是看到了 zhongguose.com 这个网站，觉得很好看。后来又了解到，原来这个主题是一个日本人为日本传统颜色而设计的。zhongguose.com的站主只是照抄了一下，并且并不是开源的。于是我便创建了这个Github Organizations，用以承载这个网站。

由于本人审美及能力有限，所以页面比较丑。如果有更好的页面效果，欢迎提交Pull Request给这个库。

## 参与

### 程序员

任何人都可以通过提交Pull Request来参与更改。为了方便开发，我写了两个脚本在项目根目录下。

1. data.js 用以方便的更改颜色数据并将结果压缩输出到data.json中。

2. index.js 用以方便开发。它使用`browser-sync`架起本地服务器，并监听本地的文件更改以自动的刷新各个设备上的页面，使用`watch`监听`less`文件夹中的更改，以自动生成`main.min.css`。

本地开发时，只需要本地安装过Node.js，执行如下命令即可搭建好开发环境。

```bash
npm install
npm install -g less
npm install -g browser-sync
```

然后运行`npm run dev`即可执行`index.js`，`npm run data`即可执行`data.js`。

### 非程序员

如果你并不擅长写代码，那么可以通过反馈一些颜色信息的错误，或者增加信息等等方式来参与进来。只需要点击[问题](https://github.com/ChineseColor/ChineseColor.github.io/issues/new)发表出来，便能让所有人看到。

## 即将要做的

- [ ] 增加颜色的说明
- [ ] 增加颜色的RGB以及16进制显示
