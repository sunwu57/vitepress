# 默安 幻阵蜜罐未授权访问 RCE

## 漏洞描述

默安 幻阵蜜罐存在部署页面未授权访问 ，可执行任意命令

## 漏洞影响

```
默安 幻阵蜜罐
```

## 漏洞复现

产品页面



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108643.png)



安装页面如下

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108644.png)



刷新并抓包



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108645.png)



Drop掉 **/huanzhen/have_installed?**



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108646.png)



进入页面



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108647.png)

点击调试抓包

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108648.png)



执行其他命令



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108649.png)



点击一键诊断泄露 IP数据



![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326120108650.png)