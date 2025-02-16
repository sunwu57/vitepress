title: "示例"  
description: "这是一个测试文档"  
top: 1

# 方法一


```plain
<details>
  <summary>点击时的区域标题：点击查看详细内容</summary>
  <p> - 测试 测试测试</p>
  qwe
  qwe
  123
  123
  
<pre><code>title，value，callBack可以缺省</code></pre>
</details>
```



效果：



 - 测试 测试测试

```plain
title，value，callBack可以缺省
```



## 缺点


1. 代码段不能出现空行
2. 不支持颜色



# 方法二


```plain
<details>
  <summary>点击时的区域标题</summary>
  <code data-enlighter-language="raw" class="EnlighterJSRAW"></code><code data-enlighter-language="raw" class="EnlighterJSRAW">bash
  echo "hello shell"
  <br>
  echo "hello python"
  </code><code data-enlighter-language="raw" class="EnlighterJSRAW"></code>
</details>
```



效果：



```bash   echo "hello shell"      echo "hello python"   ```



# 方法3


```plain
<details> 
<summary><font size="4" color="orange">Show Code</font></summary> 

<pre><code class="language-cpp">这里填充代码</code>
</pre> </details>
```



效果:



```cpp
这里填充代码
```



# 方法4


```plain
<details>
<summary>Code</summary>

<pre><code class="language-cpp">
被折叠的代码块或者文章内容,内部不可以有空行
</code></pre>
</details>
```



效果:



```cpp

被折叠的代码块或者文章内容,内部不可以有空行
```



# 推荐这个


```plain
<details>
<summary>Code</summary>

<pre><code class="language-cpp">int found(int a[], int left, int right, int x) {
    while (left < right) {
        int mid = (right + left) >> 1;
        if (a[mid] < x) left = mid + 1;
        else
            right = mid;
    }
    return left;
}
</code></pre>
</details>
```



效果：



```cpp
int found(int a[], int left, int right, int x) {
    while (left < right) {
        int mid = (right + left) >> 1;
        if (a[mid] < x) left = mid + 1;
        else
            right = mid;
    }
    return left;
}
```



对于 <>的特殊符号应该用 `<` `>` 代替，不然会显示错误。(只需要修改 < 替换为 `<` 即可）



`必须紧贴代码开头（避免多出首行），`需单独一行（避免少了尾行）

