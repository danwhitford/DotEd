var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var webserver = require('gulp-webserver');

var paths = {
    pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['src/doted.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

function bundle() {
    return watchedBrowserify
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
}

gulp.task('webserver', function() {
    gulp.src('dist')
      .pipe(webserver({
          open: true
      }));
  });

gulp.task("default", gulp.series(["copy-html", "webserver"], bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);
