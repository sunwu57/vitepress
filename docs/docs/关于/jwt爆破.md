# 什么是jwt？
## 使用 Hashcat 爆破 JWT（JSON Web Token）
JWT 主要由三部分组成：

1. **Header（头部）**
2. **Payload（负载）**
3. **Signature（签名）**

其中，`Signature` 是基于 **HMAC、RSA 或 ECDSA** 进行签名的。Hashcat 只能破解 **HMAC-SHA256（HS256）** 这种对称加密签名的 JWT，不能破解非对称加密（RSA 或 ECDSA）签名的 JWT。

JWT 的格式如下：

```plain
header.payload.signature
```

示例：

```plain
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.4v8PzHfAjT4yRlNwprV6o6s5xzPqowT5MDSx9O5SEJw
```

其中：

+ `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9` → Header
+ `eyJ1c2VybmFtZSI6ImFkbWluIn0` → Payload
+ `4v8PzHfAjT4yRlNwprV6o6s5xzPqowT5MDSx9O5SEJw` → Signature

你需要爆破的是 **Signature 的密钥（secret key）**。

## <font style="color:#DF2A3F;">jwt一般出现在http头Authorization中</font>
# hashcat爆破
```plain
.\hashcat.exe -m 16500 -w 3-a 0 .\22.txt .\passwords.txt
```

+ `-m 16500`：JWT HS256 的 Hashcat 模式
+ `-a 0`：字典攻击模式
+ `22.txt`：包含 JWT 的 `<font style="color:rgb(29, 26, 32);background-color:rgb(255, 251, 255);">Private/Secret Key</font>`
+ `passwords.txt`：字典文件
+ -w 3 使用gpu加速破解(需要快速破解，但希望系统仍能进行其他任务（如浏览网页、观看视频）。)

## 结果
```plain
hashcat-6.2.6> .\hashcat.exe -m 16500  -w 3 -a 0 .\22.txt .\passwords.txt
hashcat (v6.2.6) starting

Successfully initialized the NVIDIA main driver CUDA runtime library.

Failed to initialize NVIDIA RTC library.

* Device #1: CUDA SDK Toolkit not installed or incorrectly installed.
             CUDA SDK Toolkit required for proper device support and utilization.
             Falling back to OpenCL runtime.

* Device #1: WARNING! Kernel exec timeout is not disabled.
             This may cause "CL_OUT_OF_RESOURCES" or related errors.
             To disable the timeout, see: https://hashcat.net/q/timeoutpatch
nvmlDeviceGetFanSpeed(): Not Supported

OpenCL API (OpenCL 3.0 CUDA 12.2.146) - Platform #1 [NVIDIA Corporation]
========================================================================
* Device #1: NVIDIA GeForce RTX 4080 Laptop GPU, 12160/12281 MB (3070 MB allocatable), 58MCU

Minimum password length supported by kernel: 0
Maximum password length supported by kernel: 256

Hashes: 1 digests; 1 unique digests, 1 unique salts
Bitmaps: 16 bits, 65536 entries, 0x0000ffff mask, 262144 bytes, 5/13 rotates
Rules: 1

Optimizers applied:
* Zero-Byte
* Not-Iterated
* Single-Hash
* Single-Salt

Watchdog: Temperature abort trigger set to 90c

Host memory required for this attack: 1018 MB

Dictionary cache built:
* Filename..: .\passwords.txt
* Passwords.: 30000
* Bytes.....: 241951
* Keyspace..: 30000
* Runtime...: 0 secs




The wordlist or mask that you are using is too small.     Finished autotune
This means that hashcat cannot use the full parallel power of your device(s).
Unless you supply more work, your cracking speed will drop.
For tips on supplying more work, see: https://hashcat.net/faq/morework

Approaching final keyspace - workload adjusted.

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxMjMiLCJwYXNzd29yZCI6IlNlY3VyZUA0NTYiLCJpYXQiOjE3NDIyMjEwMzB9.rcgP5R7Q3K                                                                                                           KG__GlaEIuW3KN_H1rJDOzzFDqZolUiLH4:123456

Session..........: hashcat
Status...........: Cracked
Hash.Mode........: 16500 (JWT (JSON Web Token))
Hash.Target......: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZS...lUiLH4
Time.Started.....: Mon Mar 17 22:23:35 2025 (0 secs)
Time.Estimated...: Mon Mar 17 22:23:35 2025 (0 secs)
Kernel.Feature...: Pure Kernel
Guess.Base.......: File (.\passwords.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........: 42265.4 kH/s (0.11ms) @ Accel:1024 Loops:1 Thr:64 Vec:1
Recovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)
Progress.........: 30000/30000 (100.00%)
Rejected.........: 0/30000 (0.00%)
Restore.Point....: 0/30000 (0.00%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:0-1
Candidate.Engine.: Device Generator
Candidates.#1....: 123456 -> geekboy
Hardware.Mon.#1..: Temp: 52c Util: 51% Core:1230MHz Mem:9000MHz Bus:8

Started: Mon Mar 17 22:23:26 2025
Stopped: Mon Mar 17 22:23:36 2025
```

# 使用显卡加速
[https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local](https://developer.nvidia.com/cuda-downloads?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exe_local)

