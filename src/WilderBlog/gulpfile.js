/// <binding Clean='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task("minify", function () {
  gulp.src(["wwwroot/js/*.js", '!wwwroot/js/tour*.js', '!wwwroot/js/contact.js'])
    .pipe(uglify())
    .pipe(concat("wilderblog.min.js"))
    .pipe(gulp.dest("wwwroot/lib/site"));
  gulp.src(["wwwroot/js/contact.js"])
    .pipe(uglify())
    .pipe(concat("contact.min.js"))
    .pipe(gulp.dest("wwwroot/lib/site"));
});

gulp.task("scripts", function () {
  gulp.src("node_modules/bootstrap/dist/js/*")
    .pipe(gulp.dest("wwwroot/lib/bootstrap/js"));
  gulp.src("node_modules/bootstrap/dist/css/*")
    .pipe(gulp.dest("wwwroot/lib/bootstrap/css"));
});

gulp.task('default', ["minify", "scripts"]);