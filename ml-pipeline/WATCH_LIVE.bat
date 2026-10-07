@echo off
REM Live view of VTU training data generation
title AdaptLearn Generation - LIVE
echo Watching generation log... (Ctrl+C to exit view - generation keeps running)
echo.
powershell -noprofile -command "Get-Content 'D:\Adaptlearn\ml-pipeline\output\generation_log.txt' -Wait -Tail 0"
