/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('browserify', function() {

	var bundleMethod = global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		entries: ['./app/assets/javascript/app.js']
	});

	var bundle = function() {
		bundleLogger.start();

		return bundler
			.bundle({debug: true})
			.on('error', handleErrors)
			.pipe(source('app.js'))
			.pipe(gulp.dest('./public/js/'))
			.on('end', bundleLogger.end);
	};

	if(global.isWatching) {
		bundler.on('update', bundle);
	}

	return bundle();
});
