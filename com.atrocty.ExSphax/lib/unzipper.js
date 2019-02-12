/*----------------------------------

Texture pack extractor & packer

----------------------------------*/
'use strict';
var objCsInterface = new CSInterface( )

//
// Required modules
//
// @module     {Node} (7zip-bin)
// @module     {Node} (node-7z)	<
//
var obj7zipNode = require( 'node-7z-forall' )

var objModZip = new obj7zipNode( );
getAllMethods( objModZip )
// const strPathTo7zip = obj7zipBin.path7za
// console.log( strPathTo7zip );
console.log( "strPathTo7zip" );
const strValidFiletypes = /(.png.mcmeta|.png)$/

$( onZipSelect )

function onZipSelect( )
{
	$( "#zipfile" ).change( function ( event )
	{
		// Closure to capture the file information.
		if ( event.target.files[ 0 ].name.endsWith( ".zip" ) )
		{
			handleFile( event.target.files[ 0 ] );
		}
	} );
}

function handleFile( objZipData )
{
	const myStream = objModZip.extractFull( 'S:/ExSphax/Testmod.zip', 'S:/OUTPUT/',
		{
			wildcards: [ '*.png' ], // extract all text and Markdown files
			r: true // in each subfolder too
		} )
		.progress( function ( files )
		{
			console.log( 'Some files are extracted: %s', files );
			getAllMethods( files )
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