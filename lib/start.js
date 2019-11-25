module.exports = function() {
    var path = require('path'),
        fs = require('fs');

    var gulp = require('gulp'),
        less = require('gulp-less'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync').create(),
        reload = browserSync.reload,
        serveStatic = require('serve-static'),
        ssi = require('@cxteam/browsersync-ssi');

    var defaultDir = 'temp';

    var deleteFolderRecursive = function(path) {
        var files = [];
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path);
            files.forEach(function(file, index) {
                var curPath = path + "/" + file;
                if (fs.statSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);
                } else {
                    // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        }
    };

    // 临时打包
    var gulpTasks = {
        init: function() {
            var that = this;
            // 删除临时文件夹
            deleteFolderRecursive(defaultDir);
            console.log('初始化开始');
            setTimeout(function() {
                gulp.src(["app/**/*.*", "!app/**/*.scss", "!app/**/*.sass", "!app/**/*.less"])
                    .pipe(gulp.dest(defaultDir))
                    .on('end', function() {
                        console.log('拷贝文件至temp目录');
                        that.scss();
                    });
            }, 1000)
        },
        scss: function() {
            var that = this;
            gulp.src(["app/**/*.scss", "app/**/*.sass"])
                .pipe(sass())
                .pipe(gulp.dest(defaultDir))
                .on('end', function() {
                    console.log('编译scss文件');
                    that.less();
                });
        },
        less: function() {
            var that = this;
            gulp.src(["app/**/*.less"])
                .pipe(less())
                .pipe(gulp.dest(defaultDir))
                .on('end', function() {
                    console.log('编译less文件');
                    that.server();
                });
        },
        server: function() {

            browserSync.init({
                server: {
                    baseDir: defaultDir
                },
                middleware: [{
                    route: "",
                    handle: ssi({
                        baseDir: defaultDir,
                        ext: '.html',
                        version: '2.18.8'
                    })
                }]
            });

            console.log('初始化结束');
        }
    };

    gulpTasks.init();

    //监控任务

    //sass
    gulp.watch(["app/**/*.sass", "app/**/*.scss"]).on('change', function(event) {

        gulp.src(event.path, { base: 'app' })
            .pipe(sass())
            .pipe(gulp.dest(defaultDir))
            .pipe(reload({ stream: true }));
    });

    //css
    gulp.watch(["app/**/*.css"]).on('change', function(event) {

        gulp.src(event.path, { base: 'app' })
            .pipe(gulp.dest(defaultDir))
            .pipe(reload({ stream: true }));
    });

    //less
    gulp.watch("app/**/*.less").on('change', function(event) {

        gulp.src(event.path, { base: 'app' })
            .pipe(less())
            .pipe(gulp.dest(defaultDir))
            .pipe(reload({ stream: true }));
    });

    //js
    gulp.watch("app/**/*.js").on('change', function(event) {

        gulp.src(event.path, { base: 'app' })
            .pipe(gulp.dest(defaultDir))
            .on('end', function() {
                console.log('js更新完成');
                reload();
            });
    });

    //html
    gulp.watch("app/**/*.html").on('change', function(event) {

        gulp.src(event.path, { base: 'app' })
            .pipe(gulp.dest(defaultDir))
            .on('end', function() {
                console.log('html更新完成');
                reload();
            });
    });

    //img
    gulp.watch("app/**/*.{png,jpg,gif,ico}").on('change', function(event) {

        gulp.src(event.path, { base: 'app' })
            .pipe(gulp.dest(defaultDir))
            .on('end', function() {
                console.log('图片更新完成');
                reload();
            });
    });

};