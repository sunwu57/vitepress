<font style="color:#DF2A3F;">POST-xss危害基本没有</font>

## <font style="color:rgba(0, 0, 0, 0.85);">存在漏洞的jQuery版本</font>
<font style="color:rgb(51, 51, 51);">在大于或等于1.2且在3.5.0之前的jQuery。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">漏洞存在的原因</font>
<font style="color:rgb(51, 51, 51);">在大于或等于1.2且在3.5.0之前的jQuery版本中，即使执行了消毒（sanitize）处理，也仍会执行将来自不受信任来源的HTML传递给jQuery的DOM操作方法（即html()、.append()等），从而导致xss漏洞。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">利用工具</font>
<font style="color:rgb(51, 51, 51);">下载地址：https://github.com/mahp/jQuery-with-XSS</font>

## <font style="color:rgba(0, 0, 0, 0.85);">挖掘方法</font>
<font style="color:rgb(51, 51, 51);">1、将工具下载解压，使用编辑器打开test.html，修改第九行代码，将代码中的src=后的链接修改为要验证的jQuery链接。  
</font>![](https://cdn.nlark.com/yuque/0/2025/jpeg/26698826/1753865104981-a5c260ec-bfc6-4701-bf49-9c368f3249fb.jpeg)

<font style="color:rgb(51, 51, 51);">替换链接，在测试中替换的就是被测试网站的jquery  
</font>![](https://cdn.nlark.com/yuque/0/2025/jpeg/26698826/1753865105139-9158e0d6-a257-4212-9577-8edeb3974f2f.jpeg)

<font style="color:rgb(51, 51, 51);">2、保存后，使用浏览器打开，会看到3个demo。  
</font>![](https://cdn.nlark.com/yuque/0/2025/jpeg/26698826/1753865105079-6aa93cf1-aac2-4064-99f5-d50d4ba0860d.jpeg)<font style="color:rgb(51, 51, 51);">  
</font><font style="color:rgb(51, 51, 51);">3、可以依次点击这三个Demo，看哪个会弹窗。如果弹窗，说明此版本的漏洞被验证成功了。  
</font>![](https://cdn.nlark.com/yuque/0/2025/jpeg/26698826/1753865105012-e00f1cd2-bebc-4071-a321-3be7bbdb9839.jpeg)

<font style="color:rgb(51, 51, 51);">4、也可以点击页面中的 test result，来判断自己版本的 jQuery 版本存在的 bug 编号。  
</font>![](https://cdn.nlark.com/yuque/0/2025/jpeg/26698826/1753865105033-258be7bf-b765-4171-807d-b4fe25f1d87c.jpeg)<font style="color:rgb(51, 51, 51);">  
</font>![](https://cdn.nlark.com/yuque/0/2025/jpeg/26698826/1753865105975-71beb244-7959-40d9-b439-4823f89f87bc.jpeg)

<font style="color:rgb(51, 51, 51);">5、知道 bug 编号之后，再来到 test.html 页面点击对应的 bug编号即可。</font>

## <font style="color:rgba(0, 0, 0, 0.85);">修复方法</font>
<font style="color:rgb(51, 51, 51);">更新jQuery到3.5.0或更高版本</font>

