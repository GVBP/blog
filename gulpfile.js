// resumo ele está pegando as configurações em tsProject do nosso arquivo tsconfig 
// e depois indo no diretório src da mesma forma que estávamos trabalhando antes, 
// a novidade é a ultima linha do nosso arquivo que irá ficar monitorando o nosso 
// diretório a procura de novos arquivos ou alterações. 

const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
  return gulp.src(JSON_FILES)
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);