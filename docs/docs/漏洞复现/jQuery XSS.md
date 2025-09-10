<font style="color:#DF2A3F;">POST-xss危害基本没有</font>

## <font style="color:rgba(0, 0, 0, 0.85);">存在漏洞的jQuery版本</font>
<font style="color:rgb(51, 51, 51);">在大于或等于1.2且在3.5.0之前的jQuery。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">漏洞存在的原因</font>
<font style="color:rgb(51, 51, 51);">在大于或等于1.2且在3.5.0之前的jQuery版本中，即使执行了消毒（sanitize）处理，也仍会执行将来自不受信任来源的HTML传递给jQuery的DOM操作方法（即html()、.append()等），从而导致xss漏洞。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">利用工具</font>
<font style="color:rgb(51, 51, 51);">下载地址：https://github.com/mahp/jQuery-with-XSS</font>

## <font style="color:rgba(0, 0, 0, 0.85);">挖掘方法</font>
<font style="color:rgb(51, 51, 51);">1、将工具下载解压，使用编辑器打开test.html，修改第九行代码，将代码中的src=后的链接修改为要验证的jQuery链接。  
</font>![](../../images/a0898607eaa665d93af537af56de1482.jpeg)

<font style="color:rgb(51, 51, 51);">替换链接，在测试中替换的就是被测试网站的jquery  
</font>![](../../images/016de3451bf227441fa77506c6ce79a4.jpeg)

<font style="color:rgb(51, 51, 51);">2、保存后，使用浏览器打开，会看到3个demo。  
</font>![](../../images/1504a8b10fef5068f3dff8aeb26d7f4b.jpeg)<font style="color:rgb(51, 51, 51);">  
</font><font style="color:rgb(51, 51, 51);">3、可以依次点击这三个Demo，看哪个会弹窗。如果弹窗，说明此版本的漏洞被验证成功了。  
</font>![](../../images/a86e150d6a05cc96fc613b35ad89daa8.jpeg)

<font style="color:rgb(51, 51, 51);">4、也可以点击页面中的 test result，来判断自己版本的 jQuery 版本存在的 bug 编号。  
</font>![](../../images/e24057e3e09fcb1f075fa8b9fb0981fe.jpeg)<font style="color:rgb(51, 51, 51);">  
</font>![](../../images/81952654ddcb87bc1cae10d6b1c2b1dc.jpeg)

<font style="color:rgb(51, 51, 51);">5、知道 bug 编号之后，再来到 test.html 页面点击对应的 bug编号即可。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">修复方法</font>
<font style="color:rgb(51, 51, 51);">更新jQuery到3.5.0或更高版本</font>

