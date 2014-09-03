mimosa-minify-json
===========
## Overview

This module will minify JSON files when Mimosa's `--minify` flag is engaged.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'minify-json'` to your list of modules. Mimosa will install the module for you when you start up.

## Functionality

This module runs a simple `JSON.parse` and `JSON.stringify` on `.json` files effectively minifying them.

If a `.json` file does not parse an error will be logged and the file will be left alone.

## Default Config

This module has no config.