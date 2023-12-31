<h1 style="text-align: center">ELADMIN 后台管理前端（React）系统</h1>

<p align="center">
  <a href="https://github.com/facebook/react/">
    <img src="https://img.shields.io/badge/react-18.1.0-brightgreen.svg" alt="react">
  </a>
  <a href="https://nodejs.org/en">
    <img src="https://img.shields.io/badge/node-16.20.1-brightgreen.svg" alt="node">
  </a>
  <a href="https://www.npmjs.com" rel="nofollow">
    <img src="https://img.shields.io/badge/npm-9.2.0-brightgreen.svg" alt="npm">
  </a>
  <a href="https://github.com/RoboticsAndCloud/eladmin_web_react/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/saltstack/salt" alt="license">
  </a>
</p>

简体中文 | [English](./README.EN.md) 

## 项目简介
- eladmin web system 是一个基于 React + React-Router + Antd + Echarts 开发的后台管理系统的前端界面
- 本系统使用json-server模拟后端服务，若需要与eladmin后端Spring-Boot进行联调，请调整接口数据格式及对应的后端服务地址

**体验地址：**  [https://roboticsandcloud.github.io/eladmin_web_react](https://roboticsandcloud.github.io/eladmin_web_react)

**账号密码：** `admin / admin`

#### 项目源码

|   后端源码  |   前端源码（Vue)  | 前端源码（React) |
|--- | --- | --- |
|  https://github.com/elunez/eladmin   |  https://github.com/elunez/eladmin-web   |  https://github.com/RoboticsAndCloud/eladmin_web_react   

## 项目展示

<div align="center">
  
![](./docs/imgs/login1.jpg)

![](./docs/imgs/login.png)

![](./docs/imgs/account_list.png)

![](./docs/imgs/account_add.png)

</div>

## 功能

#### 已完成
- 登录 / 登出
- 用户管理：提供用户的相关配置 
- 角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限
#### 开发中
- 菜单管理：已实现菜单动态路由，后端可配置化，支持多级菜单
- 部门管理：可配置系统组织架构，树形表格展示
- 岗位管理：配置各个部门的职位
- 字典管理：可维护常用一些固定的数据，如：状态，性别等
- 系统日志：记录用户操作日志与异常日志，方便开发人员定位排错
- SQL监控：采用druid 监控数据库访问性能，默认用户名admin，密码123456
- 定时任务：整合Quartz做定时任务，加入任务日志，任务运行情况一目了然
- 代码生成：高灵活度生成前后端代码，减少大量重复的工作任务
- 邮件工具：配合富文本，发送html格式的邮件
- 七牛云存储：可同步七牛云存储的数据到系统，无需登录七牛云直接操作云数据
- 支付宝支付：整合了支付宝支付并且提供了测试账号，可自行测试
- 服务监控：监控服务器的负载情况
- 运维管理：一键部署你的应用


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
