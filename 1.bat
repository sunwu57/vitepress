@echo off
setlocal enabledelayedexpansion

:: 获取当前日期（格式：YYYYMMDD）
for /f "tokens=2 delims==." %%i in ('"wmic os get localdatetime /value"') do set datetime=%%i
set ymd=!datetime:~0,4!!datetime:~4,2!!datetime:~6,2!

:: 获取参数作为备注编号，例如 "1" 或 "test"
set note=%1
if "%note%"=="" (
    set note=1
)

:: 拼接 commit 消息
set message=%ymd%-%note%

:: 执行 git commit
git add .
git commit -m "%message%"

echo Commit 完成：%message%
