var gulp = require("gulp");
var gulp = require("gulp-sass");

//преобразование scss в css
gulp.task("sass", function () {
    gulp.src("sass/style.scss") //что хватаем
        .pipe(sass())  //преобразование
        .pipe(gulp.dest("css"));  //в какую папку выкидываем
});