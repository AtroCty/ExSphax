@RD /S /Q "%AppData%\Adobe\CEP\extensions\com.atrocty.ExSphax"
robocopy "%CD%\com.atrocty.ExSphax" "%AppData%\Adobe\CEP\extensions\com.atrocty.ExSphax" /E
del "%CD%\ExSphax.zxp"