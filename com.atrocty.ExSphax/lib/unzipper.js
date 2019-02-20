/* ----------------------------------
Texture pack extractor & packer
---------------------------------- */
"use strict";
var objCsInterface = new CSInterface();
const strDir = objCsInterface.getSystemPath(SystemPath.EXTENSION);
const strValidFilesPath = "-i@" + strDir + "/lib/" +
    "valid_files.txt";

//
// Required modules
//
// @module     {Node} (node-7z-forall)
//

const obj7zipNode = require("node-7z-forall");
var objModZip = new obj7zipNode();

$(onZipSelect)

function onZipSelect()
{
    $("#zipfile")
        .click(function()
        {
            var result = window.cep.fs.showOpenDialog();
            handleFile(result.data);
        });
}

function handleFile(strZipPath)
{
    const myStream = objModZip.extractFull(strZipPath, "S:/OUTPUT/",
        {
            raw: [strValidFilesPath],
            r: true
        })
        .progress(function(files)
        {
            console.log("Some files are extracted: %s", files);
            console.log("alle Mtehoden");
        })
        .then(function()
        {
            console.log("Extracting done!");
            getAllMethods(objZipData)
        })

        // On error
        .catch(function(err)
        {
            console.error(err);
        });
}
