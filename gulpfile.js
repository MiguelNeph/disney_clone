const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss')//Rescatamos los archivos de la carpeta fuente
    .pipe(sass({ outputStyle: 'compressed'})) //Nos los comprime
    .pipe(gulp.dest('./dist/css')); //Los manda a la pasta destino
}

exports.default = styles;
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}