# Wayos 防火墙 后台命令执行漏洞

## 漏洞描述

Wayos 防火墙 后台存在命令执行漏洞，通过命令注入可以执行远程命令

## 漏洞影响

```
Wayos 防火墙
```

## 网络测绘

```
body="Get_Verify_Info(hex_md5(user_string)."
```

## 漏洞复现

登录页面如下



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134227401.png)

登录后台后 ping 模块命令执行

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134227402.png)