var gulp = require('gulp');

mqRemove = require("gulp-mq-remove");

gulp.task("default", function () {
		return gulp.src("styles/style.css")
			.pipe(mqRemove({ width: "1440px" }))
			.pipe(gulp.dest("build"));
});
