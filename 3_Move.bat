@RD /S /Q "%CD%\com.atrocty.ExSphax"
robocopy "C:\Users\timms\AppData\Roaming\Adobe\CEP\extensions\com.atrocty.ExSphax" "E:\Coding\Eclipse PS\com.atrocty.ExSphax" /E /MOVE
robocopy "E:\Coding\Eclipse PS\manifest.xml" "E:\Coding\Eclipse PS\com.atrocty.ExSphax\CSXS"
del "E:\Coding\Eclipse PS\ExSphax.zxp"
pause
cmd /k