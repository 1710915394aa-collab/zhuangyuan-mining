@echo off
setlocal
cd /d "C:\Users\Administrator\Desktop\zhuangyuan-mining"

REM Add changes
git add .

REM Create a timestamped commit message
for /f %%i in ('powershell -NoProfile -Command "Get-Date -Format yyyyMMdd-HHmmss"') do set TS=%%i

REM Commit (ignore if nothing to commit)
git commit -m "update site %TS%" >nul 2>&1

REM Push to GitHub
 git push

echo Done.
pause
