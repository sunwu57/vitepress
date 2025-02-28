# cursor是什么?
:::tip
cursor是[openAi](https://so.csdn.net/so/search?q=openAi&spm=1001.2101.3001.7020)合作伙伴推出的，内置GPT-4的编辑器，能更好的为开发者服务。关键是是他是**免费的**。

cursor不用梯子也能用，支持多种语言：python，java，C#等等语言，也同样支持在多平台安装。可以用于聊天，辅助写代码，辅助写作等等功能。相信你试用了之后会感觉，嗯....真香。

:::

# 下载
[cursor官网](https://www.cursor.com/cn)

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/708f68b6be40395d22da772390068baf.png)

# 安装
![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/40e7908198e2d2cbe3a6260b480acb3e.png)

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/be60d7292fccde247af9b69503bee54b.png)

# 使用
## 导入deepseek-R1模型
### 打开cursor设置
![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/58a85888d4e96fb7adc7b1850d22d998.png)

### 写入api
![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/acc7415f573257451025a13864e6c611.png)![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/2bb26c5c71e608044baea604517f2477.png)

## 获取api
### 腾讯云（2025.2.25前api免费）
地址([https://console.cloud.tencent.com/lkeap](https://console.cloud.tencent.com/lkeap))

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/ff7a8f87e7d61ab2b6a3e9c4875431b3.png)

### 硅基流动（注册就送14块钱的token，约等于1400个对话）
注册地址([https://cloud.siliconflow.cn/i/PPetLNqx](https://cloud.siliconflow.cn/i/PPetLNqx))

## 项目一(借用cursor写一个注册登录功能及页面)
### 后端接口
1. 提前配置好环境
2. 让ds生成代码

```plain
现在的环境是go需要你用gin框架帮我写三个接口 第一个是用户名密码注册第二个是用户名密码登录(需要返回 用户信息)第三个是根据用户id查询用户信息。
我的数据库连接方式是:127.0.0.1:3306,root,root
以当前目录为根目录需要执行命令的时候请告诉我让我来执行
```

3. 根据ds的指引，依次应用ds给出的文件内容和命令  
![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/641435b422da6ebba65972f141478eb6.png)
4. 根据ds的指引，生成curl测试接口的指令

```plain
生成curl测试用例并告诉我成功与不成功的返回值
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/2276636ae8fdaa7299366e5163653576.png)

5. 执行curl命令，验证接口，后端接口就此完成

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/e9310f43399507c37f141f5e1e28250e.png)![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/507f68c49387bd886905ff1e480ea82e.png)

### 前端编写
#### 先用脚手架生成一个vue项目
```plain
npm create vue@latest
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/4242bb8fae7f6861dd1b2fd50551f274.png)

#### 新建一个项目，将登录界面丢给ds。让其进行生成
![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/37442c29392f2753d48068d25395c928.png)

```plain
这是一个vue项目已经初始化完毕了帮我生成一个登陆页和一 个主页登陆页按照这个图片一比一还原主页需要一句欢迎语就 可以。使用vue router。
以当前目录为根目录需要执行命令的时候请告诉我让我来执行
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/e67dc05d06026dd170114f3a40a14222.png)![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/1e4ec0c9765eab8281266658b0ae76c0.png)

#### 发送后端的测试命令，生成前端对应的代码
```plain
# 成功注册
curl -X POST http://localhost:8080/auth/register -H "Content-Type: application/json" -d '{"username":"testuser","password":"test123"}'
# 成功响应: {"message":"用户注册成功"} (HTTP 201)

# 用户名重复
curl -X POST http://localhost:8080/auth/register -H "Content-Type: application/json" -d '{"username":"testuser","password":"test123"}'
# 失败响应: {"error":"用户名已存在"} (HTTP 409)

# 缺少密码
curl -X POST http://localhost:8080/auth/register -H "Content-Type: application/json" -d '{"username":"testuser"}'
# 失败响应: {"error":"Key: 'Password' Error:Field validation..."} (HTTP 400)
# 正确登录
curl -X POST http://localhost:8080/auth/login -H "Content-Type: application/json" -d '{"username":"testuser","password":"test123"}'
# 成功响应: {"id":1,"username":"testuser","created_at":"2024-03-05T12:34:56Z"} (HTTP 200)

# 错误密码
curl -X POST http://localhost:8080/auth/login -H "Content-Type: application/json" -d '{"username":"testuser","password":"wrong"}'
# 失败响应: {"error":"用户名或密码错误"} (HTTP 401)
# 有效ID查询
curl http://localhost:8080/user/1
# 成功响应: {"id":1,"username":"testuser","created_at":"2024-03-05T12:34:56Z"} (HTTP 200)

# 无效ID查询
curl http://localhost:8080/user/999
# 失败响应: {"error":"用户不存在"} (HTTP 404)

# 错误ID格式
curl http://localhost:8080/user/abc
# 失败响应: {"error":"用户不存在"} (HTTP 404)
# 注册测试
echo "测试注册："
curl -X POST http://localhost:8080/auth/register -H "Content-Type: application/json" -d '{"username":"testuser","password":"test123"}'
echo -e "\n\n"

# 登录测试
echo "测试登录："
curl -X POST http://localhost:8080/auth/login -H "Content-Type: application/json" -d '{"username":"testuser","password":"test123"}'
echo -e "\n\n"

# 查询测试
echo "测试查询："
curl http://localhost:8080/user/1
```

[vue-project.zip](https://www.yuque.com/attachments/yuque/0/2025/zip/26698826/1739899799686-25cb1271-7f26-468a-aac1-2e9d600f96d3.zip)                [test6.zip](https://www.yuque.com/attachments/yuque/0/2025/zip/26698826/1739899696401-51e8f697-93fa-42fa-bbb1-501b82531fa3.zip)  
![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/5b9c80691466567e30b2e252e8e2c019.png)![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/a31f17cf9798a130619447becfd23ff2.png)

## 项目二(借用cursor编写yakit插件)
### 空白文件夹打开cursor
### 将yak手册喂给deepseek
yak手册([https://yaklang.com/api-manual/intro](https://yaklang.com/api-manual/intro))

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/4e1ca3be8fa8be15bfc6ed2bfc0058b9.png)

名称前面是绿色的小点就说明成功了

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/9a91bd5f722feecd8f77a53072201261.png)

使用指令验证是否导入成功

```plain
@yak手册 你都知道哪些yak函数
```

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/5c83db94490da63d5474d8c72b465896.png)

发现ds好像理解了

### 再喂一些正确的yak的插件代码
```plain
我在yak文件夹下放了一些yakit插件代码样例,这些配置文件可以直接导入yakit作为插件使用。现在请你参考这些样例文件,参考它们,生成相应的yak文件,来完成指定的插件功能
我想写一个关于mitm模块，检测数据包中是否有参数，如果有参数就会在参数值的后面加入单引号,如果加入单引号后的结果与不加单引号的结果不一样则提示有漏洞
```

```plain


# mirrorHTTPFlow 会镜像所有的流量到这里，包括 .js / .css / .jpg 这类一般会被劫持程序过滤的请求
mirrorHTTPFlow = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    
}

# mirrorFilteredHTTPFlow 劫持到的流量为 MITM 自动过滤出的可能和 "业务" 有关的流量，会自动过滤掉 js / css 等流量
mirrorFilteredHTTPFlow = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    
}

# mirrorNewWebsite 每新出现一个网站，这个网站的第一个请求，将会在这里被调用！
mirrorNewWebsite = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    
}

# mirrorNewWebsitePath 每新出现一个网站路径，关于这个网站路径的第一个请求，将会在这里被传入回调
mirrorNewWebsitePath = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    
}

# mirrorNewWebsitePathParams 每新出现一个网站路径且带有一些参数，参数通过常见位置和参数名去重，去重的第一个 HTTPFlow 在这里被调用
mirrorNewWebsitePathParams = func(isHttps /*bool*/, url /*string*/, req /*[]byte*/, rsp /*[]byte*/, body /*[]byte*/) {
    
}



这个是MItm的模板
```

### 代码检查
将ds生成的代码放到yakit中进行检查

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/742b8742ec7304dfda3c84d1b8927662.png)

只要能出现下面这个界面，就说明代码能跑(虽然报错了)

![](https://raw.githubusercontent.com/sunwu57/tuchuang/main/48489f236a7acdbffe43b4c64d43a0ef.png)

### 结论
1. ds写yakit插件代码还是有些不尽人意，建议先自己学会手写yakit插件，再用大模型帮忙写，否则出了bug不好解决。
2. 大模型写yakit插件，个人觉得还是写`nuclei yaml`插件最好用，剩下的次之。



