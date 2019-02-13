/*----------------------------------

Texture pack extractor & packer

----------------------------------*/
'use strict';
var objCsInterface = new CSInterface( )
const strDir = objCsInterface.getSystemPath( SystemPath.EXTENSION )
const strValidFilesPath = "-i@" + strDir + '/lib/' + "valid_files.txt"

//
// Required modules
//
// @module     {Node} (node-7z-forall)
//

const obj7zipNode = require( 'node-7z-forall' )
var objModZip = new obj7zipNode( );

$( onZipSelect )

function onZipSelect( )
{
	$( "#zipfile" ).change( function ( event )
	{
		// Closure to capture the file information.
		if ( event.target.files[ 0 ].name.endsWith( ".zip" ) )
		{
			console.log( (window.URL || window.webkitURL).createObjectURL(event.target.files[ 0 ]) )
			handleFile( (window.URL || window.webkitURL).createObjectURL(event.target.files[ 0 ]) )
		}
	} );
}

function handleFile( strZipPath )
{
	const myStream = objModZip.extractFull( strZipPath, 'S:/OUTPUT/',
		{
			raw: [ strValidFilesPath ],
			r: true
		} )
		.progress( function ( files )
		{
			console.log( 'Some files are extracted: %s', files );
			getAllMethods( files )
			console.log( "alle Mtehoden" );
		} )
		.then( function ( )
		{
			console.log( 'Extracting done!' );
			getAllMethods( objZipData )
		} )

		// On error
		.catch( function ( err )
		{
			console.error( err );
		} );
}