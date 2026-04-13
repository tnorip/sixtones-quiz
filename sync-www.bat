@echo off
echo ========================================
echo   www/ ディレクトリへのコピー + cap sync
echo ========================================
echo.

REM www/ ディレクトリが無ければ作成
if not exist www mkdir www

REM Webファイルをコピー
copy /Y index.html www\
copy /Y app.js www\
copy /Y styles.css www\
copy /Y firebase-config.js www\
copy /Y manifest.json www\
copy /Y icon.svg www\
copy /Y sw.js www\
copy /Y privacy.html www\
copy /Y terms.html www\
copy /Y about.html www\
copy /Y admin.html www\

echo.
echo --- ファイルコピー完了 ---
echo.

REM Capacitor sync 実行
echo npx cap sync を実行中...
call npx cap sync

echo.
echo ========================================
echo   完了！
echo ========================================
pause
