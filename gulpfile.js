var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', () => {
    nodemon({
        script: 'deploy/app.js',
        ext: 'js',
        env: {
            PORT: 8080,
        },
        ignore: ['./node_modules/**'],
    }).on('restart', () => {
        console.log('Restarting Server');
    });
});
