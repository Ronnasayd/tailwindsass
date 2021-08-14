const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const gcmq = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");

function compileSass() {
  return gulp
    .src("src/core.scss")
    .pipe(sass())
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist"));
}

exports.default = gulp.series(compileSass);
