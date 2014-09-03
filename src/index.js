"use strict";

var _minify = function( mimosaConfig, options, next ) {
  if ( options.files && options.files.length ) {
    options.files.forEach( function( file ) {
      var prevSize = file.outputFileText.length;
      try {
        file.outputFileText = JSON.stringify( JSON.parse( file.outputFileText ) );
      } catch ( err ) {
        mimosaConfig.log.error( "minify-json could not parse file [[ " + file.inputFileName + " ]]" + err );
      }

      var minifiedSize = file.outputFileText.length;
      if ( minifiedSize < prevSize ) {
        var sizeDiff = prevSize - minifiedSize;
        var pcnt = Math.round( ( sizeDiff / prevSize ) * 100 );
        mimosaConfig.log.info( "minify-json saved [[ " + sizeDiff + " (" + pcnt + "%) ]] characters for file [[ " + file.inputFileName + " ]]");
      }
    });
  }
  next();
};

exports.registration = function( mimosaConfig, register ) {
  if ( mimosaConfig.isMinify ) {
    register( ["add","update","buildFile"], "beforeWrite", _minify, ["json"] );
  }
};
