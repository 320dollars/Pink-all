var gulp  = require('gulp');
var sass  = require('gulp-sass');
var plumber = require('gulp-plumber');
var server = require('browser-sync').create();


gulp.task('style', function(){
   gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('app/css')) ;
        .pipe(server.stream());
});

gulp.task('serve', ['style'], function(){
   server.init({
     server: 'app/'
});


gulp.watch('app/sass/**/*.sass.{srss, sass}', ['style']);
gulp.watch('app/*.html').on('change', server.reload);

});
