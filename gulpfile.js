"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var argv = require("yargs");
var gulpif = require("gulp-if");
var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var uglify = require("gulp-uglify");
var buffer = require("vinyl-buffer");

var scssSrc = "./src/assets/scss/**/*.scss";
var cssDest = "./src/assets/css";

gulp.task("sass", function() {
  return gulp
    .src(scssSrc)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task("watch", function() {
  gulp.watch(scssSrc, ["sass"]);
});

gulp.task("build-react", function() {
  var options = {
    entries: "./src/index.js", // Entry point
    extensions: [".js"], // consider files with these extensions as modules
    paths: ["./src"] // This allows relative imports in require, with './scripts/' as root
  };

  return browserify(options)
    .external("react")
    .transform(babelify)
    .bundle()
    .pipe(source("main.min.js"))
    .pipe(gulpif(argv.production, buffer())) // Stream files
    .pipe(gulpif(argv.production, uglify()))
    .pipe(gulp.dest("./build"));
});
