# 极致CMS 后台文件编辑插件 任意文件上传

## 漏洞描述

极致CMS后台中含有文件编辑插件，通过逻辑漏洞可任意修改文件

## 漏洞影响

```
极致CMS
```

## 网络测绘

```
icon_hash="1657387632"
```

## 漏洞复现

登陆后台查看插件处，有一个后台编辑的插件

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112529716.jpg)

安装之后设置密码并使用

- 如果已经设有密码，重新安装插件即可解决密码未知问题

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112529717.jpg)

修改为php代码

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112529718.jpg)

成功执行php代码的命令