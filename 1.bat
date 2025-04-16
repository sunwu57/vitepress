@echo off
setlocal enabledelayedexpansion

:: 设置控制台为 UTF-8 编码（可选）
chcp 65001 >nul

:: 获取当前日期（YYYYMMDD）
for /f "tokens=2 delims==." %%i in ('"wmic os get localdatetime /value"') do set datetime=%%i
set ymd=!datetime:~0,4!!datetime:~4,2!!datetime:~6,2!

:: 获取备注编号
set note=%1
if "%note%"=="" (
    set note=1
)

:: 拼接 commit 消息
set message=%ymd%-%note%

:: Git 操作
git add .
git commit -m "%message%"

:: 输出结果
echo Commit 完成：%message%
