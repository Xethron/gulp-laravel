var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
	browserSync.init(
		['public/**', 'app/views/**'],
		{},
		function(err, bs){
			var fs = require('fs');
			fs.writeFile("./app/views/partial/browser-sync.php", bs.api.snippet, function(err) {
				if(err) {
					console.log(err);
				} else {
					console.log("browser-sync partial updated!");
				}
			});
		}
	);
});
