var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    babel = require('gulp-babel');

gulp.task('default', () => {
    nodemon({
        script: 'deploy/app.js',
        ext: 'js',
        env: {
            PORT: 8080,
        },
        ignore: ['./node_modules/**', './deploy'],
    }).on('restart', () => {
        gulp
            .src('src/**')
            .pipe(
                babel({
                    presets: ['env'],
                }),
            )
            .pipe(gulp.dest('deploy'));
    });
});
