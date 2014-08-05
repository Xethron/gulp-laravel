var gulp = require('gulp');
var fs   = require('fs');

gulp.task('cleanup', function() {
	fs.writeFile("./app/views/partial/browser-sync.php", '', function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("browser-sync partial cleared!");
		}
	});
});
