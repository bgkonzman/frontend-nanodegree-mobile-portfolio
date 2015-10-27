module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        options: {
          screwIE8: true
        },
        files: {
          src: ['js/*.js', 'views/js/*.js'],  // source files mask
          dest: '.',    // destination folder
          expand: true,    // allow dynamic building
          flatten: true,   // remove all unnecessary nesting
          ext: '.min.js'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['css/*.css', '!css/*.min.css', 'views/css/*.css', '!views/css/*.min.css'],
          dest: '.',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {
     dist: {
        options: {
          optimizationLevel: 5
        },
        files: [{
           expand: true,
           cwd: '.',
           src: ['**/*.{png,jpg,gif}'],
           dest: '.'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin']);

};
