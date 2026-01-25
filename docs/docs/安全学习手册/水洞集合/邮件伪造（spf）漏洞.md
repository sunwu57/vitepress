## 漏洞危害
<font style="color:rgb(51, 51, 51);">允许攻击者伪造发件人身份，从而发送钓鱼邮件或垃圾邮件，获取接收方的信任，进而可能导致主机被控制或重要资料的泄露。</font>

<font style="color:rgb(51, 51, 51);">比如：</font>[<font style="color:rgb(65, 131, 196);">www.baidu.com</font>](https://www.baidu.com)<font style="color:rgb(51, 51, 51);">有这个漏洞，你就可以伪造</font>[<font style="color:rgb(65, 131, 196);">HR@baidu.com</font>](mailto:HR@baidu.com)<font style="color:rgb(51, 51, 51);">给受害人发邮件进行钓鱼</font>

## <font style="color:rgb(51, 51, 51);">挖掘过程</font>
` dig -t txt baidu.com `

<font style="color:rgb(51, 51, 51);">如果是</font>`<font style="color:rgb(51, 51, 51);">-all</font>`<font style="color:rgb(51, 51, 51);">就是不存在，如果是</font>`<font style="color:rgb(51, 51, 51);">~all</font>`<font style="color:rgb(51, 51, 51);">就是存在</font>

![](../../../images/95d39440f2eb04daaefe1c07e7674280.png)

<font style="color:rgb(51, 51, 51);">利用工具：kali自带的swaks</font>

 swaks --body "钓鱼邮件测试" --header "Subject:钓鱼测试" -t my@163.com -f "test@baidu.com"

+ <font style="color:rgb(51, 51, 51);">-</font><font style="color:rgb(51, 51, 51);">t：后面改成自己的163邮箱</font>
+ <font style="color:rgb(51, 51, 51);">-</font><font style="color:rgb(51, 51, 51);">f：后面改成要测试的域名邮箱</font>

<font style="color:rgb(51, 51, 51);">能收到邮件就说明存在此漏洞</font>

![](../../../images/1f4ac008bcb04555fba0d1c1e3e62a65.png)

### <font style="color:rgb(51, 51, 51);">✨</font><font style="color:rgb(51, 51, 51);">怎么修复</font>
<font style="color:rgb(51, 51, 51);">把</font>`<font style="color:rgb(51, 51, 51);">~all</font>`<font style="color:rgb(51, 51, 51);">改成</font>`<font style="color:rgb(51, 51, 51);">-all</font>`

