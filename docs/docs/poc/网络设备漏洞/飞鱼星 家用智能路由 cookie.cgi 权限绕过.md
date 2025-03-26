# 飞鱼星 家用智能路由 cookie.cgi 权限绕过

## 漏洞描述

飞鱼星 家用智能路由存在权限绕过，通过Drop特定的请求包访问未授权的管理员页面

## 漏洞影响

```
飞鱼星 家用智能路由
飞鱼星 企业级智能上网行为管理系统
```

## 网络测绘

```
title="飞鱼星家用智能路由"
```

## 漏洞复现

登录页面如下

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134821131.png)

访问 index.html 时会请求 cookie.cgi

```plain
http://xxx.xxx.xxx.xxx/index.html
```

页面抓包 Drop掉 cookie.cgi

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134821132.png)

跳转后台获取了权限

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134821133.png)