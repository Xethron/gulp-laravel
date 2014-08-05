var compass      = require('gulp-compass');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var handleErrors = require('../util/handleErrors');
var prefix       = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var rename       = require("gulp-rename");

gulp.task('compass', function() {
	return gulp.src('./app/assets/sass/**.scss')
		.pipe(compass({
			config_file: 'compass.rb',
			css: 'app/assets/css',
			sass: 'app/assets/sass'
		}))
		.on('error', handleErrors)
		.pipe(prefix("> 1%", { cascade: true }))
		.pipe(gulp.dest('public/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('public/css'));
});
