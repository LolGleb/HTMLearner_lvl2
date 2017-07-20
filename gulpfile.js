var gulp = require("gulp");
var sass = require("gulp-sass");

//преобразование scss в css
gulp.task("sass", function () {
    gulp.src("sass/style") //что хватаем
        .pipe(sass())  //преобразование
        .pipe(gulp.dest("css"));  //в какую папку выкидываем
});