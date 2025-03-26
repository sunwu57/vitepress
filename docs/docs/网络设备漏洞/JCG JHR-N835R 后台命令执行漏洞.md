# JCG JHR-N835R 后台命令执行漏洞

## 漏洞描述

JCG JHR-N835R 后台存在命令执行，通过 ; 分割 ping 命令导致任意命令执行

## 漏洞影响

```
JCG JHR-N835R
```

## Shodan

```
JHR-N835R
```

## 漏洞复现

登录页面 admin admin登录

![image-20220209202626135](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326133955894.png)

在后台系统工具那使用 PING工具，使用 ; 命令执行绕过

![image-20220209202640541](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326133955895.png)

![image-20220209202702580](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326133955896.png)