const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')//Rescatamos los archivos de la carpeta fuente
    .pipe(sass({ outputStyle: 'compressed'})) //Nos los comprime
    .pipe(gulp.dest('./dist/css')); //Los manda a la pasta destino
}
function images(){
    return gulp.src('./src/images/**/*')//Rescatamos los archivos de la carpeta fuente
    .pipe(imagemin()) //Nos los comprime
    .pipe(gulp.dest('./dist/images')); //Los manda a la pasta destino
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}