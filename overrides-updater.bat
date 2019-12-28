@echo off

PowerShell -Command "(New-Object Net.WebClient).DownloadFile('https://github.com/Queuecumbr/user-overrides.js/raw/master/user-overrides.js', 'user-overrides.js')"
call updater.bat -updatebatch -unattended
exit
