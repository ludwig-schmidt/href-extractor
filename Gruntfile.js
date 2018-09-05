module.exports = function(grunt) {

  require('time-grunt')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['src/*.sass'], 
        tasks: ['sass', 'postcss']
      },
      js: {
        files: ['src/*.js'],
        tasks: ['babel']
      },
    },

    sass: {                    
      dist: {                  
        options: {   
          //implementation: 'sass',
          sourcemap: 'none',
          style: 'expanded'
        },
        files: {                         
            'src/_compiled/style--sass.css': 'src/styles.sass'      
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')(),
        ]
      },
      dist: {
        src: 'src/_compiled/style--sass.css',
        //dest: 'sass/_compiled/style.css'
        dest: 'public/styles.css'
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['env'],
        minified: true,
        comments: false
      },
      dist: {
        files: {
          'public/app.js': 'src/app.js',
          
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask('default', ['watch']);
};