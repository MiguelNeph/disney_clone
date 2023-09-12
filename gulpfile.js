const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

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

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}