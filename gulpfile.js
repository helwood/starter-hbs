"use strict";

const path = require("path");
const gulp = require("gulp");
const Handlebars = require("handlebars");
const handlebars = require("gulp-handlebars");
const compileHandlebars = require("gulp-compile-handlebars");
const merge = require("merge-stream");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const del = require("del");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const less = require("gulp-less");
const wrap = require("gulp-wrap");
const declare = require("gulp-declare");
const runSequence = require('run-sequence');

let buildConfig = require("./build.json");
const cssOutputDir = buildConfig.cssOutputDir || "dist/css";
const jsOutputDir = buildConfig.jsOutputDir || "dist/js";
const baseOutputDir = buildConfig.baseOutputDir || "dist/";
const fontOutputDir = buildConfig.fontOutputDir || "dist/fonts";

// Refresh brower on changes
var browserSync = require('browser-sync').create();

gulp.task('browserSync',function(){
	browserSync.init({
		server: {
			baseDir: baseOutputDir
		}
	})
});	

gulp.task("clean", (next) => {
	return del(["./dist/**"],next);
});

gulp.task("templates",["clean"], () => {
	if (typeof buildConfig.preCompileTemplates !== "undefined" && buildConfig.preCompileTemplates === true) {
        const partials = gulp.src(`${buildConfig.templatesDir}/partials/**/*.hbs`)
            .pipe(handlebars({
                handlebars: Handlebars
            }))
            .pipe(wrap("HBS.registerPartial(<%= processPartialName(file.relative) %>, HBS.template(<%= contents %>));", {}, {
                imports: {
                    processPartialName: (fileName) => {
                        return JSON.stringify(path.basename(fileName, ".js"));
                    }
                }
            }));

    	const templates = gulp.src([`${buildConfig.templatesDir}/**/*.hbs`, `!${buildConfig.templatesDir}/**/partials/*.hbs`])
        	.pipe(handlebars({
            	handlebars: Handlebars
        	}))
        	.pipe(wrap("HBS.template(<%= contents %>)"))
        	.pipe(declare({
            	namespace: "Genesis.templates",
            	noRedeclare: true // Avoid duplicate declarations
        	}));

        return merge(partials, templates)
            .pipe(concat("templates.js"))
            .pipe(gulp.dest("temp/js/"));
    } else {
        return; // eslint-disable-line consistent-return
    }
});

gulp.task("local",["templates"], () => {
	for(let i = 0, j = buildConfig.build.length; i < j; ++i) {
		const page = buildConfig.build[i];

		if(page.js.length) {
			gulp.src(page.js)
				.pipe(concat(`${page.name}.js`))
				.pipe(gulp.dest(jsOutputDir))
				.pipe(uglify())
				.on("error", (err) => {
					console.log(err.message); // eslint-disable-line no-console
				})
				.pipe(rename({suffix: ".min"}))
				.pipe(gulp.dest(jsOutputDir));
		}

		if(page.css.length) {
			gulp.src(page.css)
				.pipe(less())
				.on("error", (err) => {
					console.log(err.message); // eslint-disable-line no-console
				})
				.pipe(rename({
					basename: page.name
				}))
				.pipe(gulp.dest(cssOutputDir))
				.pipe(cleanCSS({compatibility: "*"}))
				.pipe(rename({suffix: ".min"}))
				.pipe(gulp.dest(cssOutputDir));
		}

		var templateData = {
			"site": {
				"name": page.name,
				"title": page.title
			}
		},
		options = {
			batch : [`${buildConfig.templatesDir}/partials`]
		}
	
		gulp.src(`${buildConfig.templatesDir}/*.hbs`)
			.pipe(compileHandlebars(templateData, options))
			.pipe(rename(function(pathname) {
				pathname.extname = '.html';	
			}))
			.pipe(gulp.dest(baseOutputDir));

		gulp.src('node_modules/Scaffold/src/fonts/**/*')
			.pipe(gulp.dest(fontOutputDir));

		gulp.src('client/data/*.json')
			.pipe(gulp.dest('dist/data'));
	}
	gulp.watch([`${buildConfig.jsDir}/**/*.js`,`${buildConfig.lessDir}/**/*.less`,`${buildConfig.templatesDir}/**/*.hbs`],["local"]);
});

// gulp.task("default");

gulp.task('default',function(callback){
	runSequence(
		'local',
		'browserSync',
		callback
	)
});