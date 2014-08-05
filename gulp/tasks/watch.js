var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('app/assets/js/**', ['scripts']);
	gulp.watch('app/assets/sass/**', ['compass']);
	gulp.watch('app/assets/images/**', ['images']);
});
