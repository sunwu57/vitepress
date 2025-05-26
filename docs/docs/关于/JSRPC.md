# 环境
## 靶场
[http://39.98.108.20:8085](http://39.98.108.20:8085/)

[https://github.com/jxhczhl/JsRpc](https://github.com/jxhczhl/JsRpc)

[https://mp.weixin.qq.com/s?__biz=Mzg2ODYxMzY3OQ==&mid=2247512825&idx=1&sn=8329628a71d577c922dd8ff5f2bf2375&scene=21&poc_token=HJBFFmijUGhc-1gav5iNB98-MuO-vBwHkVxrWMNz](https://mp.weixin.qq.com/s?__biz=Mzg2ODYxMzY3OQ==&mid=2247512825&idx=1&sn=8329628a71d577c922dd8ff5f2bf2375&scene=21&poc_token=HJBFFmijUGhc-1gav5iNB98-MuO-vBwHkVxrWMNz)

## <font style="color:rgb(31, 35, 40);">加解密方式:</font>
1. <font style="color:rgb(31, 35, 40);">请求体加密 默认使用的是AES-128 可以根据实际需求修改</font>
2. <font style="color:rgb(31, 35, 40);">RequestId 为了防止重放攻击, 客户端生成随机RequestId 服务端接收后保存至Redis中, 如果再次接收到此RequestID, 则视为非法请求</font>
3. <font style="color:rgb(31, 35, 40);">时间戳 添加时间戳的超时时间, 一旦超时, 原始数据包失效</font>
4. <font style="color:rgb(31, 35, 40);">签名 将 requestId + 原始请求体 + 时间戳 合并生成哈希值 从而保证以上参数的有效性</font>

## 
```plain
var rpc_client_id, Hlclient = function (wsURL) {
    this.wsURL = wsURL;
    this.handlers = {
        _execjs: function (resolve, param) {
            var res = eval(param)
            if (!res) {
                resolve("没有返回值")
            } else {
                resolve(res)
            }
        }
    };
    this.socket = undefined;
    if (!wsURL) {
        throw new Error('wsURL can not be empty!!')
    }
    this.connect()
}
Hlclient.prototype.connect = function () {
    if (this.wsURL.indexOf("clientId=") === -1 && rpc_client_id) {
        this.wsURL += "&clientId=" + rpc_client_id
    }
    console.log('begin of connect to wsURL: ' + this.wsURL);
    var _this = this;
    try {
        this.socket = new WebSocket(this.wsURL);
        this.socket.onmessage = function (e) {
            _this.handlerRequest(e.data)
        }
    } catch (e) {
        console.log("connection failed,reconnect after 10s");
        setTimeout(function () {
            _this.connect()
        }, 10000)
    }
    this.socket.onclose = function () {
        console.log('rpc已关闭');
        setTimeout(function () {
            _this.connect()
        }, 10000)
    }
    this.socket.addEventListener('open', (event) => {
        console.log("rpc连接成功");
    });
    this.socket.addEventListener('error', (event) => {
        console.error('rpc连接出错,请检查是否打开服务端:', event.error);
    })
};
Hlclient.prototype.send = function (msg) {
    this.socket.send(msg)
}
Hlclient.prototype.regAction = function (func_name, func) {
    if (typeof func_name !== 'string') {
        throw new Error("an func_name must be string");
    }
    if (typeof func !== 'function') {
        throw new Error("must be function");
    }
    console.log("register func_name: " + func_name);
    this.handlers[func_name] = func;
    return true
}
Hlclient.prototype.handlerRequest = function (requestJson) {
    var _this = this;
    try {
        var result = JSON.parse(requestJson)
    } catch (error) {
        console.log("请求信息解析错误", requestJson);
        return
    }
    if (result["registerId"]) {
        rpc_client_id = result['registerId']
        return
    }
    if (!result['action'] || !result["message_id"]) {
        console.warn('没有方法或者消息id,不处理');
        return
    }
    var action = result["action"], message_id = result["message_id"]
    var theHandler = this.handlers[action];
    if (!theHandler) {
        this.sendResult(action, message_id, 'action没找到');
        return
    }
    try {
        if (!result["param"]) {
            theHandler(function (response) {
                _this.sendResult(action, message_id, response);
            })
            return
        }
        var param = result["param"]
        try {
            param = JSON.parse(param)
        } catch (e) {
        }
        theHandler(function (response) {
            _this.sendResult(action, message_id, response);
        }, param)
    } catch (e) {
        console.log("error: " + e);
        _this.sendResult(action, message_id, e);
    }
}
Hlclient.prototype.sendResult = function (action, message_id, e) {
    if (typeof e === 'object' && e !== null) {
        try {
            e = JSON.stringify(e)
        } catch (v) {
            console.log(v)//不是json无需操作
        }
    }
    this.send(JSON.stringify({"action": action, "message_id": message_id, "response_data": e}));
}
```

`<font style="color:rgb(202, 125, 55);">var</font><font style="color:rgb(51, 51, 51);"> demo = </font><font style="color:rgb(202, 125, 55);">new</font><font style="color:rgb(51, 51, 51);"> Hlclient(</font><font style="color:rgb(221, 17, 68);">"ws://127.0.0.1:12080/ws?group=zzz"</font><font style="color:rgb(51, 51, 51);">);</font>`

```plain
//可能需要断点

//时间戳
window.time = Date.parse
//requestId
window.id = p
//v函数
window.v1 = v
//签名
window.m = a.a.MD5
//加密
window.enc = l



//md5函数
demo.regAction("req", function (resolve,param) {
    //请求头
    let timestamp = time(new Date());
    let requestid = id();
    let v_data = JSON.stringify(v1(param));
    let sign = m(v_data + requestid + timestamp).toString();
    //加密请求体
    let encstr = enc(v_data);

    let res = {
        "timestamp":timestamp,
        "requestid":requestid,
        "encstr":encstr,
        "sign":sign
    };
    resolve(res);
})
```

访问

```plain
get_reqid=func(params){
dd-=json. New(json. dumps(params))~
ee=json.loads(dd.Value())
reqidd=json. Find(ee, "$. requestid")
return reqidd
}

get_sign-=func(params){
dd=json. New(json.dumps(params))~
ee=json. loads(dd.Value())
sign=json. Find(ee,"$.sign")
return.sign
}
get_encstr=func(params){
dd-=.json. New(json. dumps(params))~
ee=json.loads(dd.Value())
encstr=json. Find(ee,"$.encstr")
return encstr
}
get_timestamp=func(params){
dd-=json.New(json. dumps(params))~
ee=json.loads(dd.Value())
timestamp_str =json.Find(ee,"$.timestamp")
return timestamp_str
}




```

 

```plain
jsrpcReq = func(origin /*string*/) {
    //JSrpc的group
    group = "zzz";
    //jsrpc的action
    action = "req";

    if (origin[0] == "{"){
        rsp,rep = poc.Post("http://127.0.0.1:12080/go",poc.replaceBody("group="+group+"&action="+action+"&param="+json.dumps(origin), false),poc.appendHeader("content-type", "application/x-www-form-urlencoded"))~
        return json.loads(rsp.GetBody())["data"];
    } else{
        rsp,rep = poc.Post("http://127.0.0.1:12080/go",poc.replaceBody("group="+group+"&action="+action+"&param="+codec.EncodeUrl(origin), false),poc.appendHeader("content-type", "application/x-www-form-urlencoded"))~
        return json.loads(rsp.GetBody())["data"];
    }
    
}


// beforeRequest 允许在每次发送数据包前对请求做最后的处理，定义为 func(https bool, originReq []byte, req []byte) []byte
// https 请求是否为https请求
// originReq 原始请求
// req 请求
beforeRequest = func(https, originReq, req) {
    // 我们可以将请求进行一定的修改
    postParams = poc.GetAllHTTPPacketPostParams(req /*type: []byte*/)
    
    encryptedParam =jsrpcReq(postParams["encryptedData"])
    req = poc.ReplaceHTTPPacketPostParam(req, "encryptedData", encryptedParam)
    // 将修改后的请求返回
    return []byte(req)
}

```

