var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat-json2js');

// Task scripts
gulp.task('vendor', function() {
	gulp.src('app/assets/vendor/**.json')
		.pipe(concat())
		.pipe(uglify())
		.pipe(rename({suffix:'.min'}))
		.pipe(gulp.dest('public/js'));
});
