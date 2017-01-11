var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
	browserSync.init({
        proxy: "localhost:8080"
    });
    //gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("sass/**/*.scss", ['sass']);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/output/*.scss")
        .pipe(sass())
        .pipe(uglifycss())
        .pipe(gulp.dest("public/css"))
        .pipe(browserSync.stream());
});

