# Windows痕迹清除
## 日志
Windows的日志文件分为3类核心日志，分别是系统日志，程序日志，和安全日志

### 系统日志(SysEvent)：
记录操作系统产生的事件，如设备驱动无法正常启动或停止，系统进程崩溃等

# 默认位置:

%SystemRoot%\System32\Winevt\Logs\System.evtx

### 程序日志(AppEvent)：
包含操作应用程序软件相关的事件。事件包括了错误、警告及任何应用程序需要报告的信息。

# 默认位置:

%SystemRoot%\System32\Winevt\Logs\Application.evtx

### 安全日志(SecEvent)：
包含安全性相关的事件。用户权限变更，登录及注销，文件/文件夹访问等信息。

# 默认位置:

%SystemRoot%\System32\Winevt\Logs\Security.evtx

### 注：
1、系统内置3个核心日志文件（System、Security、Application）;默认大小均20MB,数据超过20MB，默认系统将优先覆盖过期日志记录。应用程序、服务日志默认最大1024KB，超过最大限制也优先覆盖过期的日志记录  
2、其他系统服务的日志也都储存在%SystemRoot%\System32\Winevt\Logs\下

## 操作系统日志记录大致流程
1. svhost启动EventLog开始记录日志
2. EventLog将操作记录先缓存为一段内存内容
3. Wevtutil将内存内容解析为xml并且通过gui界面可视化的展现给用户

### svchost
svchost主要是用来实现服务进程数据共享,以此来减少系统资源消耗,很多系统程序和服务使用svchost运行。  
windows系统进程分为独立进程和共享进程两种，svchost.exe文件存在于%systemroot%system32目录下，它属于共享进程。  
随着windows系统服务不断增多，为了节省系统资源，微软把很多服务做成共享方式，交由svchost.exe进程来启动。但svchost进程只作为服务宿主，并不能实现任何服务功能，即它只能提供条件让其他服务在这里被启动，而它自己却不能给用户提供任何服务。这些系统服务是以动态链接库（dll）形式实现的，它们把可执行程序指向svchost，由svchost调用相应服务的动态链接库来启动服务。  
![](https://cdn.nlark.com/yuque/0/2023/png/26698826/1675307155340-611a9cf1-28ca-4c3d-9bb0-ea042313a24e.png)

### Event Log
Event Log主要是管理windows管理事件和事件日志。它支持日志记录事件、查询事件、订阅事件、归档事件日志以及管理事件元数据。它可以用 XML 和纯文本两种格式显示事件。  
EventLog的启动需要依赖于svchost，启动示例如：

C:\Windows\System32\svchost.exe -k LocalServiceNetworkRestricted -p

### wevtutil
检索有关事件日志和发布服务器的信息。此外，还可以使用此命令来安装和卸载事件清单，运行查询，以及导出、存档和清除日志。

## Windows日志清理方法
Windows日志清理主要分为全量清理和定向清理，全量清理其动作较大容易被发现，定向清理相对比较隐蔽

### 全量删除方法
#### 通过事件查看器删除
开始→运⾏,输⼊ eventvwr 进⼊事件查看器，右边栏选择清除⽇志

需要注意日志清理因为本身也是系统事件所以也会被记录，这也就是不存在完美的日志清理.

#### 通过PowerShell删除
# 方法一

PowerShell -Command "& {Clear-Eventlog -Log 你要清理的日志(如Security)}"

# 方法二

Get-WinEvent -ListLog 你要清理的日志(如Security) -Force | % {Wevtutil.exe cl $_.Logname}

#### 暴力删除日志文件
1. 停止Windows Event Log（EventLog） 服务
2. 删除对应的文件

%SystemRoot%\System32\Winevt\Logs\

1. 永久停用方法

# 查询要禁用的注册表

reg query "HKEY_LOCAL_MACHINE\system\CurrentControlSet\Services\Eventlog\"

# 删除对应的注册表

reg delete "HKEY_LOCAL_MACHINE\system\CurrentControlSet\Services\Eventlog\System"  /f

# 重启Windows Event Log（EventLog） 服务

#### 使用wevtutil命令行删除
# 进入cmd

# 查询 wevtutil el所有系统日志(如要删除的日志名字清楚可以忽略此步骤)

# 删除对应日志，以清空系统日志为例

wevtutil cl system

#### msf一键清理
进入meterpreter后直接执行clearev

### 定向清理方法
#### 删除最近数据
wevtutil qe 你要清理的日志(如Security) /f:text /rd:true /c:删除行数(如10行)

#### 删除某指定单条记录
# 1、删除Security下的单条日志(EventRecordID=2222)，并保存为tmp1.evtx

wevtutil epl Security tmp1.evtx "/q:*[System [(EventRecordID!=2222)]]"

# 2、结束日志进程(释放日志文件句柄)

# 3、替换原日志文件

# 4、重启日志服务

#### 删除某指定多条记录
# 1、删除Security下的多条日志(EventRecordID为13030、13031和13032)，结果保存为tmp2.evtx

wevtutil epl Security tmp2.evtx "/q:*[System [(EventRecordID>13032) or (EventRecordID<13030)]]"

# 2、结束日志进程(释放日志文件句柄)

# 3、替换原日志文件

# 4、重启日志服务

#### 按时间段删除
# 1、删除SystemTime为2021-12-10T03:20:00至2021-12-10T03:21:00之间的日志，结果保存为1.evtx

wevtutil epl Security 1.evtx "/q:*[System [TimeCreated[@SystemTime >'2021-12-10T03:21:00' or @SystemTime <'2021-12-10T03:20:00']]]"

# 2、结束日志进程(释放日志文件句柄)

# 3、替换原日志文件

# 4、重启日志服务

## Windows远程连接日志清理
当我们使用3389端口远程一台机器后会在对应机器上产生对应的记录，其记录只要有两部分组成：

1. Default.rdp文件(系统隐藏文件)
2. 注册表记录

### 删除Default.rdp方法
# 进入Default.rdp所在路径

cd %userprofile%\documents\

# 使用attrib去掉Default.rdp文件的，系统文件属性(S)；隐藏文件属性(H)

attrib Default.rdp -s -h

# 删除

del Default.rdp

### 注册表清理方法
# 查询远程连接在注册表中的键值

reg query "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default"

# 删除对应的键值,如删除MRU0 "/v MRU0"

reg delete "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default" /f /v MRU0

如使用当前机器作为跳板的话需要使用同步骤清理Servers下的键值：

# 查询具体要删除的键值文件夹

reg query "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Servers"

# 确定要删除的文件夹进行删除

reg delete "HKEY_CURRENT_USER\Software\Microsoft\Terminal Server  Client\Servers\192.168.84.128" /f

## 近期访问记录清理
1. 用户最近访问过的文件和网页记录 C:\Users\Administrator\AppData\Local\Microsoft\Windows\History
2. 近期访问过的文件`C:\Users\Administrator\Recent`

### 利用覆写增大溯源难度
cipher /w:X #其中X指盘符或文件具体位置  
cipher会分三次写入：第一次写入0x00，第二次写入0xff，最后一次写入随机数字

---



  
 

