const {src, dest, parallel} = require ('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3 // mejorar las imagenes en una optimizacion de 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe( cache( imagemin(opciones) ) )
        .pipe( dest('build/img') )
    done();
}

function versionWebp( done ) {
    const opciones = {
        quality: 50 //calidad de 0 a 100
    };
    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )
    done();
}

exports.versionWebp = versionWebp;
exports.imagenes = parallel(imagenes, versionWebp);
