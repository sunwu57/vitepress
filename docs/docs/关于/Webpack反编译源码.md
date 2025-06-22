1. Webpack源码信息泄露

漏洞url：

https://xxx.xxx.cn/xxx/xxx/js/app.12d1f8c9.js.map

登录地址：https://xxx.xxx.cn/#/home

扫码抓包发现很多js文件存在js.map泄露

![](../../images/aca4274602bd348b9ac547dd9e542328.webp)

访问https://xxx.xxx.xxx.cn/xxx/xxx/js/app.12d1f8c9.js.map下载

下载后使用sourcemap工具进行反编译寻找源代码敏感信息

参考链接：

```plain
http://www.luckysec.cn/posts/531d91e3.html
```

sourcemap安装/还原命令（js.map所在当前目录下）

```plain
npm install --global reverse-sourcemapreverse-sourcemap -v app.12d1f8c9.js.map -o hbut
```

作用：通过 npm（Node.js 包管理器）全局安装reverse-sourcemap工具，该工具可将编译后的 JavaScript 文件及其对应的 sourcemap 文件还原为原始源代码。

-o hbut：将还原的源代码输出到名为hbut的目录中（可自行命名）。

![](../../images/8b81662fa294fdb54371681bd054c57e.webp)

编译完后打开文件夹下的xxx/webpack/src/main.js

![](../../images/15aa9f3082683e38a71a6320084e4db9.png)

使用Windows PowerShell自带命令全局搜索当前目录下js中的关键字，这里我们直接搜索”SK”关键字

命令：Get-ChildItem -Recurse -Include *.js | Select-String -Pattern "SK"

可以发现成功搜索到敏感信息SK泄露，并且给出的位置在main.js中！

![](../../images/0eb2c7d0c9e678a1aa03957d3c5aac0d.webp)

进入查看，发现AKSK全都在

发现华为云AKSK泄露

![](../../images/88cb5e291bb0bcf5e9049cdfb9544116.png)

2.华为云服务器接管

使用云资产管理工具进行接管

// Vue.prototype.$OBS_AK = "Cxxxxxxxxxx0";

// Vue.prototype.$OBS_SK = "k9xxxxxxxxxxxxxxxxxMa";

![](../../images/46730a8b55467d69d9904560b8742f06.webp)

![](../../images/79cf0e069314bae34a1d93ebc933387f.webp)

生成账号密码接管

![](../../images/c229a0a474631d3ab4d4f235915a9c44.png)

接管服务器成功！

![](../../images/af9569a7548d3501ab315a63297226a8.webp)

用户名：xxxxSRC

密码：9xxxxxxYfpy

登录地址：https://auth.huaweicloud.com/authui/login?id=hwxxxxx0

访问登录地址使用账号密码登录成功

![](../../images/069f8456d5ac93252799e8527af7e5be.webp)

登录成功

![](../../images/bfdf1faa44362d6a7c4e9be5b3f0f5ae.webp)

![](../../images/05174f6f0a72fce44d0624304bbce829.webp)

接管以后可以查看任意信息，进行任意操作

![](../../images/d1c2e0d459769a9d39278da9e8f797f0.png)

![](../../images/34db037fb5e5cfd2c19099715d53b5e5.webp)

![](../../images/298ed75b9b39eb65ee7bb4ac9c627002.webp)

3.云上服务器命令行执行命令

![](../../images/9fced245622d2cac6095c7c10779169a.png)

![](../../images/38e26ad8b54a3bf26a192223366ecaae.webp)

4.存储桶接管

下载OBS Browser+

https://support.huaweicloud.com/browsertg-obs/obs_03_1003.html

![](../../images/6a1f27e4e123edd1a401653ac1bdc01b.webp)

安装后

// Vue.prototype.$OBS_AK = "CIxxxxxxxY0";

// Vue.prototype.$OBS_SK = "k9xxxxxxxxxxxxMa";

![](../../images/a8a01b65856a977c82982dacdd2a533c.webp)

![](../../images/fa6b928861e852f13fa5095ebd59568d.webp)

成功接管，提交坐等拿钱即可，收工！

