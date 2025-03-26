# 泛微OA E-Office UserSelect 未授权访问漏洞

## 漏洞描述

泛微OA E-Office UserSelect接口存在未授权访问漏洞，通过漏洞攻击者可以获取敏感信息

## 漏洞影响

```
泛微OA E-Office
```

## 网络测绘

```
app="泛微-EOffice"
```

## 漏洞复现

登录页面

![image-20220520134445854](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113012300.png)

验证POC

```
/UserSelect/
```

![image-20220520140409297](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113012301.png)