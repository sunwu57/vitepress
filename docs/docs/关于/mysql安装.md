[(48条消息) MySql免安装版及其配置_可爱发的博客-CSDN博客](https://blog.csdn.net/a648119398/article/details/120591054)



解压下载好的zip文件



/bin路径添加到path路径



```plain
mysqld.exe -remove
mysqld -install
net start mysql
mysqld --initialize --console


mysqld --initialize-insecure --user=mysql
```

