<h1 style="text-align: center">ELADMIN 后台管理前端（React）系统</h1>

#### 项目简介
- eladmin web system 是一个基于 React + React-Router + Antd + Echarts 开发的后台管理系统的前端界面
- 本系统使用jsonserver模拟后端服务，若需要与eladmin后端进行联调，请调整接口数据格式及对应的后端服务地址

**体验地址：**  [https://roboticsandcloud.github.io/eladmin_web_react](https://roboticsandcloud.github.io/eladmin_web_react)

**账号密码：** `admin / admin`

#### 项目源码

|   后端源码  |   前端源码（Vue)  | 前端源码（React) |
|--- | --- | --- |
|  https://github.com/elunez/eladmin   |  https://github.com/elunez/eladmin-web   |  https://github.com/RoboticsAndCloud/eladmin_web_react   

#### 项目展示

<div align="center">
  
![](./docs/imgs/login1.jpg)

![](./docs/imgs/login.png)

![](./docs/imgs/account_list.png)

![](./docs/imgs/account_add.png)

</div>

## 功能

todo 开发中。。。


## 使用

### 环境
- node v16.20.1
- npm v9.2.0

### 安装

```bash
$ git clone https://github.com/RoboticsAndCloud/eladmin_web_react.git
$ cd eladmin_web_react
$ npm install
$ npm run jsonserver # Launch the jsonserver, please check package.json for more details,"jsonserver": "json-server --watch db.json --host 10.227.96.160 --port 3004 --routes routes.json"

$ npm start   # 浏览器访问 http://localhost:3000
```

## 浏览器支持

> 推荐使用 chrome 浏览器

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 交流&贡献

欢迎任何类型的贡献

- 如果您喜欢该项目，请 [Star](https://github.com/RoboticsAndCloud/eladmin_web_react.git).
- 欢迎您一起加入项目，请 [Pull Request](https://github.com/RoboticsAndCloud/eladmin_web_react/pulls).

## 致谢

- 感谢 [phachon](https://github.com/phachon/ailu-admin) 大佬提供的前端模板
- 感谢 [elunez](https://github.com/elunez/eladmin) 大佬提供的后端模板和系统逻辑
