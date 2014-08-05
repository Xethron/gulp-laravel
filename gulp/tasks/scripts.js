var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require("gulp-jshint");
var rename = require("gulp-rename");
var concat = require('gulp-concat-json2js');

// Task scripts
gulp.task('scripts', function() {
	gulp.src('app/assets/js/**.json')
		.pipe(concat())
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('public/js'));
});
