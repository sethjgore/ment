gulp-build-script
=================

Gulp.js build script intended for use with HTML5 Boilerplate. It's designed to ease the deployment of your site
 and optimize it during the process.


## What it does

* Minifies Javascript
* Combines and minifies CSS
* Cache-busting
* Optimizes images (with imagemin)
* Runs your JavaScript through a code quality tool, JSHint (optional)
* Runs your CSS through a code quality tool, CSSLint (optional)
* Starts a server with livereload capabilities to get a direct feedback on changes (optional)


## Installation requirements

* Install [node.js](http://nodejs.org/)
* Install gulp.js from the command line: `npm install gulp -g`
* Install the node modules: `npm install`


## Using the Build Script

Run the default task for deploying the site:  `gulp`

Run code checks like csslint and jshint: `gulp check`

Start a static server with livereload functionality: `gulp server`