    var grunt = require('grunt');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: {
                    'css/final.min.css': ['css/*.css', '!css/final.min.css']
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask("default", ['cssmin']);
