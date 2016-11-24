var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    sass         = require('gulp-sass'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    spritesmith  = require('gulp.spritesmith');

gulp.task('sass', function() {
    gulp.src('dev/sass/*.sass')
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
    .pipe(gulp.dest('prod/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync(
        {server:
         {baseDir:'prod'},
         notify: false
        });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('dev/sass/*.sass', ['sass']);
    gulp.watch('prod/*.html', browserSync.reload);
});

gulp.task('clean', function() {
	return del.sync('prod');    // Удаляем папку prod перед сборкой
});

gulp.task('img', function() {
	return gulp.src('dev/img/**/*') // Берем все изображения из dev
		.pipe(cache(imagemin({ // Сжимаем их с наилучшими настройками
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('prod/img')); // Выгружаем на продакшен
});

gulp.task('clear', function () {
	return cache.clearAll();
});

gulp.task('build', ['clean','img','sass'], function() {

});

gulp.task('sprite', function () {
  var spriteData = gulp.src('dev/sprite/*.png').pipe(spritesmith({
    imgName: 'icons.png',
    cssName: 'sprite.sass'
  }));
  return spriteData.pipe(gulp.dest('prod/img'));
});

gulp.task('default', ['watch']);
