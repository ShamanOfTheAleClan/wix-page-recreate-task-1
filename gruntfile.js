module.exports = function(grunt) {
    grunt.initConfig({
      
      browserSync: {
        bsFiles: {
            src : 'assets/css/*.css'
        },
        options: {
            server: {
                baseDir: "./"
            }
        }
      },
      compass: {                  // Task
        dist: {                   // Target
          options: {              // Target options
            sassDir: 'sass',
            cssDir: 'css',
            environment: 'production'
          }
        },
      },
      watch: {
        configFiles: {
          files: [ 'Gruntfile.js', 'config/*.js' ],
          options: {
            reload: true
          }
        },
        options: {
          livereload: 35730,
        },
        css: {
          files: ['sass/*.scss'],
          tasks: ['compass'],
        },
      },
    });

    

    
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['compass', 'browserSync', 'watch']);
    
    
  };