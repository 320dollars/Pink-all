var gulp  = require('gulp'), // Подключаем Gulp
sass   = require('gulp-sass'); //Подключаем Sass пакет,

    var gulp = require('gulp'), // Подключаем Gulp
        sass  = require('gulp-sass'), //Подключаем Sass пакет,
        browserSync = require('browser-sync'), // Подключаем Browser Sync
        concat  = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
        uglify   = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
        cssnano  = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
        rename  = require('gulp-rename'); // Подключаем библиотеку для переименования файлов

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('app/css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('css-libs', ['sass'], function() {
    return gulp.src('app/css/libs.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
});
