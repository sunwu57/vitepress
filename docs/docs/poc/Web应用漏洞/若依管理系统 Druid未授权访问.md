# 若依管理系统 Druid未授权访问

## 漏洞描述

若依管理系统使用了Druid 默认开启了匿名访问，导致未授权获取敏感信息

## 漏洞影响

```
若依管理系统
```

## 网络测绘

```
app="若依-管理系统"
```

## 漏洞复现

源码中看到 pom.xml 文件中查看到引用了 阿里Druid

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115949497.png)



从 issues 中发现了默认存在的未授权访问



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115949498.png)



Url为



```plain
http://xxx.xxx.xxx.xxx/prod-api/druid/index.html
```



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115949499.png)

## 