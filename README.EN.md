<h1 style="text-align: center">The Frontend(React) of ELADMIN system </h1>

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

English | [简体中文](./README.md) 

## Introduction
- eladmin web system is a web interface based on React + React-Router + Antd + Echarts 
- Json-server is adopted for mimicing the backed server. You need install a real `eladmin` server based on Spring-Boot, and change the API data structure of the Web system to communicate with each other

**Online Demo：**  [https://roboticsandcloud.github.io/eladmin_web_react](https://roboticsandcloud.github.io/eladmin_web_react)

**Username/Password：** `admin / admin`

**Source Code**

|   Backend  |   Frontend（Vue)  | Frontend（React) |
|--- | --- | --- |
|  https://github.com/elunez/eladmin   |  https://github.com/elunez/eladmin-web   |  https://github.com/RoboticsAndCloud/eladmin_web_react   

## Demo

<div align="center">
  
![](./docs/imgs/login1.jpg)

![](./docs/imgs/login.png)

![](./docs/imgs/account_list.png)

![](./docs/imgs/account_add.png)

</div>

## Features

#### Completed
- User Management：Add/Delete/Edit/Search users information 
- Role Management：Manage roles, menus for relevant users 

#### Developing
- Menu Management：
- DepartmentManagement：
- Position Management：
- Dict Management：
- System Logs：
- SQL Monitoring：
- Cron Jobs：
- Code Generation：
- Mail & Tools：
- Cloud Storage：
- Alipay：
- Monitoring：
- DevOps：


## Getting started

### Environment
- node v16.20.1
- npm v9.2.0

### Installation

```bash
$ git clone https://github.com/RoboticsAndCloud/eladmin_web_react.git
$ cd eladmin_web_react
$ npm install
$ npm run jsonserver # Launch the jsonserver, please check package.json for more details,"jsonserver": "json-server --watch db.json --host 10.227.96.160 --port 3004 --routes routes.json"

$ npm start   # URL: http://localhost:3000
```

## Supported Browsers

>  chrome is preferred

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Discussion

Any suggestions or contributions are welcome.

- If you like it，please [Star](https://github.com/RoboticsAndCloud/eladmin_web_react.git).
- If you want to contribute some codes，please [Pull Request](https://github.com/RoboticsAndCloud/eladmin_web_react/pulls).

## Thanks

- Thank [phachon](https://github.com/phachon/ailu-admin) for the template of the frontend
- Thank [elunez](https://github.com/elunez/eladmin) for the template and system of the backend
