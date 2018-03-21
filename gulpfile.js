const gulp = require("gulp")
const minifycss = require('gulp-minify-css')
const fileinclude = require('gulp-file-include')
const sass = require('gulp-sass')
const clean = require('gulp-clean')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const autoprefixer = require('gulp-autoprefixer')
const babel = require("gulp-babel")
const livereload = require("gulp-livereload")
const watch = require("gulp-watch")

//路径
const distPath = './dist'
const devPath = './src'

//html
gulp.task('bulidHtml',()=>{
    watch(`${devPath}/html/*.html`,()=>{
        
    })
})