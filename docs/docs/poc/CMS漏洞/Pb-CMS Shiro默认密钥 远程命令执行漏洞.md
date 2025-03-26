# Pd-CMS Shiro默认密钥 远程命令执行漏洞

## 漏洞描述

Pd-CMS存在Shiro默认密钥，攻击者通过已知的密钥将会造成Shiro远程命令执行漏洞

## 漏洞影响

```
Pd-CMS
```

## 网络测绘

```
"pb-cms"
```

## 漏洞复现

主页面

![image-20220518155442570](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112228797.png)

默认密钥

```
3AvVhmFLUs0KTA3Kprsdag==
```

![image-20220518155454512](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112228799.png)