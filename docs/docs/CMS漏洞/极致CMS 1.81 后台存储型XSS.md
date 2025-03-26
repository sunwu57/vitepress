# 极致CMS 1.81 后台存储型XSS

## 漏洞描述

极致CMS后台中存在存储XSS，通过XSS漏洞，可能泄漏敏感信息

## 漏洞影响

```
极致CMS
```

## 网络测绘

```
icon_hash="1657387632"
```

## 漏洞复现

网站主页![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112516861.png)

登录管理员添加模块

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112516862.png)

注册用户

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112516863.png)

点击发布文章

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112516864.png)

在文章标题处插入xss payload

- `<details open ontoggle= confirm(document[`coo`+`kie`])>`

当管理员访问时XSS成功

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112516865.png)

