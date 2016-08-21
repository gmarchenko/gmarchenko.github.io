module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'tmp/js/concatenated.js',
      },
    },

    uglify: {
      my_target: {
        files: {
          'app/js/script.min.js': ['tmp/js/concatenated.js']
        }
      }
    },

    concat_css: {
      options: {
        // Task-specific options go here. 
      },
      all: {
        src: ["src/css/*.css"],
        dest: "tmp/css/concatenated.css"
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'app/css/style.css': ['tmp/css/concatenated.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};