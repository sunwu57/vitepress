# 锐捷 ISG 账号密码泄露漏洞

## 漏洞描述

锐捷ISG 存在账号密码泄露漏洞，通过查看前端，可以获取密码的md5值, 解密后获取后台权限

## 漏洞影响

```
锐捷ISG
```

## 网络测绘

```
title="RG-ISG"
```

## 漏洞复现

登录页面如下

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134739970.png)

F12 查看到账号密码

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134739971.png)

解密md5 后登陆系统

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134739972.png)

