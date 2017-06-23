/*jslint node: true */
"use strict";


module.exports = function(grunt) {

    grunt.initConfig({

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    open: true
                }
            }
        },

        watch: {
            dev: {
                files: [ 'Gruntfile.js', 'app/**', '*.html' ],
                tasks: [],
                options: {
                    atBegin: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('dev', [ 'connect:server', 'watch:dev' ]);

};