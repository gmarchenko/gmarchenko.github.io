module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
              files: [{
                expand: true,
                cwd: 'style/scss',
                src: ['*.scss'],
                dest: 'style/css',
                ext: '.css'
              }]
            }
          },
          watch: {
            sass: {
              // We watch and compile sass files as normal but don't live reload here
              files: ['style/*.scss'],
              tasks: ['sass']
            }
          },
          concat_css:{
            options:{

            },
            all:{
              src:['style/css/style.css', 'style/css/style768.css', 'style/css/style960.css'],
              dest:'style/css/mainstyle.css'
            }
          },
          uglify: {
            build: {
                src: 'script/script.js',
                dest: 'script/script.min.js',
                src: 'script/scriptIE.js',
                dest: 'script/scriptIE.min.js',
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass','concat_css', 'uglify']);
};
