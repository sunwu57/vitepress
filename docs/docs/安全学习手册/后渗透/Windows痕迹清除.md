# <font style="color:rgba(0, 0, 0, 0.85);">Windows痕迹清除</font>
## <font style="color:rgb(51, 51, 51);">日志</font>
<font style="color:rgb(51, 51, 51);">Windows的日志文件分为3类核心日志，分别是系统日志，程序日志，和安全日志</font>

### <font style="color:rgb(51, 51, 51);">系统日志(SysEvent)：</font>
<font style="color:rgb(51, 51, 51);">记录操作系统产生的事件，如设备驱动无法正常启动或停止，系统进程崩溃等</font>

<font style="color:rgb(102, 102, 0);">#</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">默认位置:</font>

<font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(102, 0, 102);">SystemRoot</font><font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(0, 0, 0);">\System32\Winevt\Logs\System</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">evtx</font>

### <font style="color:rgb(51, 51, 51);">程序日志(AppEvent)：</font>
<font style="color:rgb(51, 51, 51);">包含操作应用程序软件相关的事件。事件包括了错误、警告及任何应用程序需要报告的信息。</font>

<font style="color:rgb(102, 102, 0);">#</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">默认位置:</font>

<font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(102, 0, 102);">SystemRoot</font><font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(0, 0, 0);">\System32\Winevt\Logs\Application</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">evtx</font>

### <font style="color:rgb(51, 51, 51);">安全日志(SecEvent)：</font>
<font style="color:rgb(51, 51, 51);">包含安全性相关的事件。用户权限变更，登录及注销，文件/文件夹访问等信息。</font>

<font style="color:rgb(102, 102, 0);">#</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">默认位置:</font>

<font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(102, 0, 102);">SystemRoot</font><font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(0, 0, 0);">\System32\Winevt\Logs\Security</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">evtx</font>

### <font style="color:rgb(51, 51, 51);">注：</font>
<font style="color:rgb(51, 51, 51);">1、系统内置3个核心日志文件（System、Security、Application）;默认大小均20MB,数据超过20MB，默认系统将优先覆盖过期日志记录。应用程序、服务日志默认最大1024KB，超过最大限制也优先覆盖过期的日志记录  
</font><font style="color:rgb(51, 51, 51);">2、其他系统服务的日志也都储存在%SystemRoot%\System32\Winevt\Logs\下</font>

## **<font style="color:rgb(51, 51, 51);">操作系统日志记录大致流程</font>**
1. <font style="color:rgb(51, 51, 51);">svhost启动EventLog开始记录日志</font>
2. <font style="color:rgb(51, 51, 51);">EventLog将操作记录先缓存为一段内存内容</font>
3. <font style="color:rgb(51, 51, 51);">Wevtutil将内存内容解析为xml并且通过gui界面可视化的展现给用户</font>

### **<font style="color:rgb(51, 51, 51);">svchost</font>**
<font style="color:rgb(51, 51, 51);">svchost主要是用来实现服务进程数据共享,以此来减少系统资源消耗,很多系统程序和服务使用svchost运行。  
</font><font style="color:rgb(51, 51, 51);">windows系统进程分为独立进程和共享进程两种，</font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">svchost.exe</font><font style="color:rgb(51, 51, 51);">文件存在于</font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">%systemroot%system32</font><font style="color:rgb(51, 51, 51);">目录下，它属于共享进程。  
</font><font style="color:rgb(51, 51, 51);">随着windows系统服务不断增多，为了节省系统资源，微软把很多服务做成共享方式，交由svchost.exe进程来启动。但svchost进程只作为服务宿主，并不能实现任何服务功能，即它只能提供条件让其他服务在这里被启动，而它自己却不能给用户提供任何服务。这些系统服务是以动态链接库（dll）形式实现的，它们把可执行程序指向svchost，由svchost调用相应服务的动态链接库来启动服务。  
</font>![](https://cdn.nlark.com/yuque/0/2023/png/26698826/1675307155340-611a9cf1-28ca-4c3d-9bb0-ea042313a24e.png)

### **<font style="color:rgb(51, 51, 51);">Event Log</font>**
<font style="color:rgb(51, 51, 51);">Event Log主要是管理windows管理事件和事件日志。它支持日志记录事件、查询事件、订阅事件、归档事件日志以及管理事件元数据。它可以用 XML 和纯文本两种格式显示事件。  
</font><font style="color:rgb(51, 51, 51);">EventLog的启动需要依赖于svchost，启动示例如：</font>

<font style="color:rgb(0, 0, 0);">C</font><font style="color:rgb(102, 102, 0);">:</font><font style="color:rgb(0, 0, 0);">\Windows\System32\svchost</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">exe </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(0, 0, 0);">k </font><font style="color:rgb(102, 0, 102);">LocalServiceNetworkRestricted</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(0, 0, 0);">p</font>

### **<font style="color:rgb(51, 51, 51);">wevtutil</font>**
<font style="color:rgb(51, 51, 51);">检索有关事件日志和发布服务器的信息。此外，还可以使用此命令来安装和卸载事件清单，运行查询，以及导出、存档和清除日志。</font>

## **<font style="color:rgb(51, 51, 51);">Windows日志清理方法</font>**
<font style="color:rgb(51, 51, 51);">Windows日志清理主要分为全量清理和定向清理，全量清理其动作较大容易被发现，定向清理相对比较隐蔽</font>

### **<font style="color:rgb(51, 51, 51);">全量删除方法</font>**
#### <font style="color:rgb(51, 51, 51);">通过事件查看器删除</font>
<font style="color:rgb(102, 102, 0);">开始→运⾏,输⼊</font><font style="color:rgb(0, 0, 0);"> eventvwr </font><font style="color:rgb(102, 102, 0);">进⼊事件查看器，右边栏选择清除⽇志</font>

<font style="color:rgb(51, 51, 51);">需要注意日志清理因为本身也是系统事件所以也会被记录，这也就是不存在完美的日志清理.</font>

#### **<font style="color:rgb(51, 51, 51);">通过PowerShell删除</font>**
<font style="color:rgb(136, 0, 0);"># 方法一</font>

<font style="color:rgb(102, 0, 102);">PowerShell</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(102, 0, 102);">Command</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 136, 0);">"& {Clear-Eventlog -Log 你要清理的日志(如Security)}"</font>

<font style="color:rgb(136, 0, 0);"># 方法二</font>

<font style="color:rgb(102, 0, 102);">Get</font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(102, 0, 102);">WinEvent</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(102, 0, 102);">ListLog</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">你要清理的日志(如</font><font style="color:rgb(102, 0, 102);">Security</font><font style="color:rgb(102, 102, 0);">)</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(102, 0, 102);">Force</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">|</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">{</font><font style="color:rgb(102, 0, 102);">Wevtutil</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">exe cl $_</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(102, 0, 102);">Logname</font><font style="color:rgb(102, 102, 0);">}</font>

#### **<font style="color:rgb(51, 51, 51);">暴力删除日志文件</font>**
1. <font style="color:rgb(51, 51, 51);">停止Windows Event Log（EventLog） 服务</font>
2. <font style="color:rgb(51, 51, 51);">删除对应的文件</font>

<font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);"></font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">%SystemRoot%\System32\Winevt\Logs\</font>

1. <font style="color:rgb(51, 51, 51);">永久停用方法</font>

<font style="color:rgb(136, 0, 0);"># 查询要禁用的注册表</font>

<font style="color:rgb(0, 0, 0);">reg query </font><font style="color:rgb(0, 136, 0);">"HKEY_LOCAL_MACHINE\system\CurrentControlSet\Services\Eventlog\"</font>

<font style="color:rgb(0, 136, 0);"># 删除对应的注册表</font>

<font style="color:rgb(0, 136, 0);">reg delete "</font><font style="color:rgb(0, 0, 0);">HKEY_LOCAL_MACHINE\system\CurrentControlSet\Services\Eventlog\System</font><font style="color:rgb(0, 136, 0);">"  /f</font>

<font style="color:rgb(0, 136, 0);"># 重启Windows Event Log（EventLog） 服务</font>

#### **<font style="color:rgb(51, 51, 51);">使用wevtutil命令行删除</font>**
<font style="color:rgb(136, 0, 0);"># 进入cmd</font>

<font style="color:rgb(136, 0, 0);"># 查询 wevtutil el所有系统日志(如要删除的日志名字清楚可以忽略此步骤)</font>

<font style="color:rgb(136, 0, 0);"># 删除对应日志，以清空系统日志为例</font>

<font style="color:rgb(0, 0, 0);">wevtutil cl system</font>

#### **<font style="color:rgb(51, 51, 51);">msf一键清理</font>**
<font style="color:rgb(51, 51, 51);">进入meterpreter后直接执行clearev</font>

### **<font style="color:rgb(51, 51, 51);">定向清理方法</font>**
#### <font style="color:rgb(51, 51, 51);">删除最近数据</font>
<font style="color:rgb(0, 0, 0);">wevtutil qe </font><font style="color:rgb(102, 102, 0);">你要清理的日志(如</font><font style="color:rgb(102, 0, 102);">Security</font><font style="color:rgb(102, 102, 0);">)</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">/</font><font style="color:rgb(0, 0, 0);">f</font><font style="color:rgb(102, 102, 0);">:</font><font style="color:rgb(0, 0, 0);">text </font><font style="color:rgb(102, 102, 0);">/</font><font style="color:rgb(0, 0, 0);">rd</font><font style="color:rgb(102, 102, 0);">:</font><font style="color:rgb(0, 0, 136);">true</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">/</font><font style="color:rgb(0, 0, 0);">c</font><font style="color:rgb(102, 102, 0);">:删除行数(如</font><font style="color:rgb(0, 102, 102);">10</font><font style="color:rgb(102, 102, 0);">行)</font>

#### <font style="color:rgb(51, 51, 51);">删除某指定单条记录</font>
<font style="color:rgb(136, 0, 0);"># 1、删除Security下的单条日志(EventRecordID=2222)，并保存为tmp1.evtx</font>

<font style="color:rgb(0, 0, 0);">wevtutil epl </font><font style="color:rgb(102, 0, 102);">Security</font><font style="color:rgb(0, 0, 0);"> tmp1</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">evtx </font><font style="color:rgb(0, 136, 0);">"/q:*[System [(EventRecordID!=2222)]]"</font>

<font style="color:rgb(136, 0, 0);"># 2、结束日志进程(释放日志文件句柄)</font>

<font style="color:rgb(136, 0, 0);"># 3、替换原日志文件</font>

<font style="color:rgb(136, 0, 0);"># 4、重启日志服务</font>

#### <font style="color:rgb(51, 51, 51);">删除某指定多条记录</font>
<font style="color:rgb(136, 0, 0);"># 1、删除Security下的多条日志(EventRecordID为13030、13031和13032)，结果保存为tmp2.evtx</font>

<font style="color:rgb(0, 0, 0);">wevtutil epl </font><font style="color:rgb(102, 0, 102);">Security</font><font style="color:rgb(0, 0, 0);"> tmp2</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">evtx </font><font style="color:rgb(0, 136, 0);">"/q:*[System [(EventRecordID>13032) or (EventRecordID<13030)]]"</font>

<font style="color:rgb(136, 0, 0);"># 2、结束日志进程(释放日志文件句柄)</font>

<font style="color:rgb(136, 0, 0);"># 3、替换原日志文件</font>

<font style="color:rgb(136, 0, 0);"># 4、重启日志服务</font>

#### <font style="color:rgb(51, 51, 51);">按时间段删除</font>
<font style="color:rgb(136, 0, 0);"># 1、删除SystemTime为2021-12-10T03:20:00至2021-12-10T03:21:00之间的日志，结果保存为1.evtx</font>

<font style="color:rgb(0, 0, 0);">wevtutil epl </font><font style="color:rgb(102, 0, 102);">Security</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 102, 102);">1.evtx</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 136, 0);">"/q:*[System [TimeCreated[@SystemTime >'2021-12-10T03:21:00' or @SystemTime <'2021-12-10T03:20:00']]]"</font>

<font style="color:rgb(136, 0, 0);"># 2、结束日志进程(释放日志文件句柄)</font>

<font style="color:rgb(136, 0, 0);"># 3、替换原日志文件</font>

<font style="color:rgb(136, 0, 0);"># 4、重启日志服务</font>

## **<font style="color:rgb(51, 51, 51);">Windows远程连接日志清理</font>**
<font style="color:rgb(51, 51, 51);">当我们使用3389端口远程一台机器后会在对应机器上产生对应的记录，其记录只要有两部分组成：</font>

1. <font style="color:rgb(51, 51, 51);">Default.rdp文件(系统隐藏文件)</font>
2. <font style="color:rgb(51, 51, 51);">注册表记录</font>

### <font style="color:rgb(51, 51, 51);">删除Default.rdp方法</font>
<font style="color:rgb(136, 0, 0);"># 进入Default.rdp所在路径</font>

<font style="color:rgb(0, 0, 0);">cd </font><font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(0, 0, 0);">userprofile</font><font style="color:rgb(102, 102, 0);">%</font><font style="color:rgb(0, 0, 0);">\documents\</font>

<font style="color:rgb(136, 0, 0);"># 使用attrib去掉Default.rdp文件的，系统文件属性(S)；隐藏文件属性(H)</font>

<font style="color:rgb(0, 0, 0);">attrib </font><font style="color:rgb(102, 0, 102);">Default</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">rdp </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(0, 0, 0);">s </font><font style="color:rgb(102, 102, 0);">-</font><font style="color:rgb(0, 0, 0);">h</font>

<font style="color:rgb(136, 0, 0);"># 删除</font>

<font style="color:rgb(0, 0, 136);">del</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 0, 102);">Default</font><font style="color:rgb(102, 102, 0);">.</font><font style="color:rgb(0, 0, 0);">rdp</font>

### <font style="color:rgb(51, 51, 51);">注册表清理方法</font>
<font style="color:rgb(136, 0, 0);"># 查询远程连接在注册表中的键值</font>

<font style="color:rgb(0, 0, 0);">reg query </font><font style="color:rgb(0, 136, 0);">"HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default"</font>

<font style="color:rgb(136, 0, 0);"># 删除对应的键值,如删除MRU0 "/v MRU0"</font>

<font style="color:rgb(0, 0, 0);">reg </font><font style="color:rgb(0, 0, 136);">delete</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 136, 0);">"HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Default"</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">/</font><font style="color:rgb(0, 0, 0);">f </font><font style="color:rgb(102, 102, 0);">/</font><font style="color:rgb(0, 0, 0);">v MRU0</font>

<font style="color:rgb(51, 51, 51);">如使用当前机器作为跳板的话需要使用同步骤清理Servers下的键值：</font>

<font style="color:rgb(136, 0, 0);"># 查询具体要删除的键值文件夹</font>

<font style="color:rgb(0, 0, 0);">reg query </font><font style="color:rgb(0, 136, 0);">"HKEY_CURRENT_USER\Software\Microsoft\Terminal Server Client\Servers"</font>

<font style="color:rgb(136, 0, 0);"># 确定要删除的文件夹进行删除</font>

<font style="color:rgb(0, 0, 0);">reg </font><font style="color:rgb(0, 0, 136);">delete</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(0, 136, 0);">"HKEY_CURRENT_USER\Software\Microsoft\Terminal Server  Client\Servers\192.168.84.128"</font><font style="color:rgb(0, 0, 0);"> </font><font style="color:rgb(102, 102, 0);">/</font><font style="color:rgb(0, 0, 0);">f</font>

## **<font style="color:rgb(51, 51, 51);">近期访问记录清理</font>**
1. <font style="color:rgb(51, 51, 51);">用户最近访问过的文件和网页记录</font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);"> </font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">C:\Users\Administrator\AppData\Local\Microsoft\Windows\History</font>
2. <font style="color:rgb(51, 51, 51);">近期访问过的文件</font><font style="color:rgb(0, 136, 0);">`C:\Users\Administrator\Recent`</font>

### **<font style="color:rgb(51, 51, 51);">利用覆写增大溯源难度</font>**
<font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">cipher /w:X</font><font style="color:rgb(51, 51, 51);"> </font><font style="color:rgb(51, 51, 51);">#其中X指盘符或文件具体位置  
</font><font style="color:rgb(51, 51, 51);">cipher会分三次写入：第一次写入</font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">0x00</font><font style="color:rgb(51, 51, 51);">，第二次写入</font><font style="color:rgb(233, 30, 99) !important;background-color:rgb(246, 246, 246);">0xff</font><font style="color:rgb(51, 51, 51);">，最后一次写入随机数字</font>

---



  
 

