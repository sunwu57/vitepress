# 蓝海卓越计费管理系统 debug.php 远程命令执行漏洞

## 漏洞描述

蓝海卓越计费管理系统 debug.php 存在命令调试页面，导致攻击者可以远程命令执行

## 漏洞影响

```
蓝海卓越计费管理系统
```

## 网络测绘

```
title=="蓝海卓越计费管理系统"
```

## 漏洞复现

登录页面如下



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120003545.png)



漏洞代码



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120003546.png)



访问 debug.php页面 远程调试命令执行



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120003547.png)