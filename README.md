# Beauty Stars

>     一个简单的评分组件

> 难易程度: ⭐

[在线预览](https://tangweikun.github.io/happy-beauty-stars)

<img src="./screenshot/gif.gif" alt='' width="300">

## 相关项目

- [Happy Clicker](https://juejin.im/post/5dce16b8f265da0bc53c76b7)

  一个简单的计数器，可以'加一'，'减一'和'重置'

## 快速开始

1. 克隆仓库

```bash
git clone git@github.com:tangweikun/happy-beauty-stars.git
```

2. 安装依赖包

```bash
cd happy-beauty-stars
yarn | npm install
```

3. 本地运行

```bash
yarn start | npm run start
```

4. 在浏览器中打开[http://localhost:3000](http://localhost:3000)查看效果

## 依赖库

| library         | version   |
| --------------- | --------- |
| `react`         | `16.11.0` |
| `react-dom`     | `16.11.0` |
| `react-scripts` | `3.2.0`   |
| `gh-pages`      | `2.1.1`   |

## 部署到 Github Pages

1. 添加 `homepage` 到 `package.json`

```json
"homepage": "https://myusername.github.io/my-app",
```

2. 安装 `gh-pages`

```bash
yarn add gh-pages
```

3. 在`package.json`中添加部署脚本

```json
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

4. 执行 `yarn deploy`

```bash
yarn deploy
```

5. 打开`https://myusername.github.io/my-app`查看效果
