/*
 * grunt-bump-version
 * https://github.com/Klab-Berlin/grunt-bump-version
 *
 * Copyright (c) 2014 Frederik Rudeck
 * Licensed under the MIT license.
 */

'use strict';


var path = require('path');
var semver = require('semver');
var util = require('util');


module.exports = function(grunt) {

  grunt.registerTask('bump_version', 'Bump version numbers for the specified files.', function(versionNumber) {
    if (typeof versionNumber === 'undefined' || semver.valid(versionNumber) === null) {
      grunt.log.error('You have to specify a semantic version number, e.g. grunt bump_version:0.0.0');
      return false;
    }

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      js: {
        regex: /(?:@version|version:)+ '?([0-9\.]*)'?/g,
        substr: '%s'
      },
      json: {
        regex: /"version": "([0-9\.]*)"/g,
        substr: '%s'
      }
    });

    // Get task specific config
    var taskConfig = grunt.config('bump_version');
    if (typeof taskConfig.files === 'undefined') {
      grunt.log.error('You have to specify files in your task configuration');
      return false;
    }

    var files = taskConfig.files;
    files.filter(function(filepath) {
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('File "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
    }).forEach(function(filepath) {
      try {
        var type = path.extname(filepath).replace('.', '');
        var file = grunt.file.read(filepath);
        
        var output = file.replace(options[type].regex, function(match, p1) {
          return match.replace(p1, util.format(options[type].substr, versionNumber));
        });

        grunt.file.write(filepath, output);
        grunt.log.writeln('Modified version number (' + versionNumber + ') for ' + filepath);
      } catch (error) {
        grunt.log.error('Bump version failed - ' + error);
        return false;
      }
    });
  });

};
