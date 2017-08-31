var gulp = require("gulp");
var sass = require("gulp-sass");

//преобразование sass в css
gulp.task("sass", function () {
    return gulp.src("sass/style.sass") //что хватаем
        .pipe(sass().on('error', sass.logError))  //преобразование
        .pipe(gulp.dest("css"));  //в какую папку выкидываем
});