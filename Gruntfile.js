module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        options: {
          screwIE8: true
        },
        files: {
          'js/perfmatters.min.js': 'js/perfmatters.js',
          'views/js/main.min.js': 'views/js/main.js'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'css/style.min.css': 'css/style.css',
          'css/print.min.css': 'css/print.css',
          'views/css/style.min.css': 'views/css/style.css',
          'views/css/bootstrap-grid.min.css': 'views/css/bootstrap-grid.css'
        }
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
